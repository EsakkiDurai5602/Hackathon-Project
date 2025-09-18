let correctAnswers = {
  "Lion": "forest",
  "Camel": "desert",
  "Shark": "ocean"
};

let score = 0;
const feedbackEl = document.getElementById("feedback");

// Make items draggable
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", e.target.textContent);
  });
});

// Make boxes droppable
document.querySelectorAll(".dropbox").forEach(box => {
  box.addEventListener("dragover", e => e.preventDefault());

  box.addEventListener("drop", e => {
    let data = e.dataTransfer.getData("text");
    if (correctAnswers[data] === box.id) {
      feedbackEl.textContent = `✅ Correct! ${data} belongs to ${box.id}`;
      feedbackEl.classList.add("correct");
      feedbackEl.classList.remove("wrong");
      score++;
      // Optional: animate the item into the box
      const draggedItem = Array.from(document.querySelectorAll(".item"))
        .find(i => i.textContent === data);
      draggedItem.style.transform = "scale(0.8)";
      draggedItem.setAttribute("draggable", "false");
    } else {
      feedbackEl.textContent = `❌ Wrong! ${data} does not belong here`;
      feedbackEl.classList.add("wrong");
      feedbackEl.classList.remove("correct");
    }

    // Check if all items are correctly placed
    if (score === Object.keys(correctAnswers).length) {
      feedbackEl.textContent = "🎉 All organisms placed correctly!";
      // Optional: trigger confetti or sound
    }
  });
});
