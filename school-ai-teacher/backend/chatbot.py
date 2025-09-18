import pickle
import faiss
from sentence_transformers import SentenceTransformer

class AITeacher:
    def __init__(self, index_dir="faiss_index", model_name="all-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)

        # Load FAISS index
        index_path = f"{index_dir}/index.faiss"
        pkl_path = f"{index_dir}/index.pkl"

        # Load FAISS index
        self.index = faiss.read_index(index_path)

        # Load associated texts
        with open(pkl_path, "rb") as f:
            self.text_data = pickle.load(f)

    def answer(self, query: str, top_k: int = 3) -> str:
        import re

        # Handle math queries
        math_answers = []
        # Find expressions like "5+2", "12*3"
        exprs = re.findall(r'(\d+\s*[\+\-\*\/]\s*\d+)', query)
        for e in exprs:
            try:
                math_answers.append(f"{e} = {eval(e)}")
            except:
                math_answers.append(f"{e} = ❌ Invalid")

        # Find numbers for odd/even
        numbers = re.findall(r'\b\d+\b', query)
        odd_even = []
        for n in numbers:
            n_int = int(n)
            if n_int not in [int(e.split()[0]) for e in exprs]:  # avoid duplicates
                odd_even.append(f"{n_int} is {'Even' if n_int % 2 == 0 else 'Odd'}")

        # Search FAISS for syllabus content
        q_emb = self.model.encode([query])[0].astype("float32").reshape(1, -1)
        k = min(top_k, len(self.text_data))
        D, I = self.index.search(q_emb, k)

        hits = []
        for idx in I[0]:
            if 0 <= idx < len(self.text_data):
                hits.append(str(self.text_data[idx]))

        syllabus_text = ""
        if hits:
            syllabus_text = "Based on your study material:\n" + "\n\n".join(hits)

        # Combine all answers
        all_answers = math_answers + odd_even
        if syllabus_text:
            all_answers.append(syllabus_text)

        return "\n\n---\n\n".join(all_answers)
