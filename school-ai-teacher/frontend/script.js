async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    // Show user message
    chatBox.innerHTML += `<div class="user">${userMessage}</div>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const res = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await res.json();

        // Split response by "---" to handle multiple answers clearly
        const responses = data.response.split("\n\n---\n\n");
        responses.forEach(resp => {
            chatBox.innerHTML += `<div class="bot">${resp}</div>`;
        });

        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
        chatBox.innerHTML += `<div class="bot">❌ Connection failed</div>`;
    }
}

// Press Enter to send message
document.getElementById("user-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") sendMessage();
});
