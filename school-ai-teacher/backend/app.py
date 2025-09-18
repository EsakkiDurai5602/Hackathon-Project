import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import AITeacher

app = Flask(__name__)
CORS(app)

# ---------------- CONFIG ----------------
INDEX_DIR = "faiss_index"
TOP_K = 3
# ---------------------------------------

print("📚 Loading AI Teacher...")
bot = AITeacher(index_dir=INDEX_DIR)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "").strip()
    if not user_message:
        return jsonify({"response": "Please type a question!"})
    response = bot.answer(user_message, top_k=TOP_K)
    return jsonify({"response": response})

if __name__ == "__main__":
    print("🚀 AI Teacher backend running on http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=5000, debug=True)
