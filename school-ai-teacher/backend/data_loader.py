import os
import pickle
from sentence_transformers import SentenceTransformer
import faiss

RESOURCE_DIR = "resources"
VECTOR_STORE = "vector_store.pkl"
MODEL_NAME = "all-MiniLM-L6-v2"

# Load all text files
texts = []
for root, _, files in os.walk(RESOURCE_DIR):
    for file in files:
        if file.endswith(".txt"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                texts.append(f.read())

# Build embeddings
print("🔹 Generating embeddings...")
model = SentenceTransformer(MODEL_NAME)
embeddings = model.encode(texts, convert_to_numpy=True, normalize_embeddings=True)

# Create FAISS index
dim = embeddings.shape[1]
index = faiss.IndexFlatL2(dim)
index.add(embeddings)

# Save index + texts
with open(VECTOR_STORE, "wb") as f:
    pickle.dump((index, texts), f)

print(f"✅ Vector store saved to {VECTOR_STORE}, total {len(texts)} documents.")
