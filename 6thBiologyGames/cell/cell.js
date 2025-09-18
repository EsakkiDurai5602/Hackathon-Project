let correctAnswers = {
  "Cell Wall": "plant",
  "Chloroplast": "plant",
  "Nucleus": "both",
  "Mitochondria": "both",
  "Vacuole": "both"
};

let score = 0;
let total = Object.keys(correctAnswers).length;
const feedbackEl = document.getElementById("feedback");

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", e.target.textContent);
  });
});

document.querySelectorAll(".dropbox").forEach(box => {
  box.addEventListener("dragover", e => e.preventDefault());
  box.addEventListener("drop", e => {
    let data = e.dataTransfer.getData("text");
    if(correctAnswers[data] === box.id || correctAnswers[data] === "both"){
      feedbackEl.textContent = `✅ Correct! ${data} placed correctly`;
      feedbackEl.classList.add("correct");
      feedbackEl.classList.remove("wrong");
      score++;
      const draggedItem = Array.from(document.querySelectorAll(".item")).find(i => i.textContent === data);
      draggedItem.style.transform = "scale(0.8)";
      draggedItem.setAttribute("draggable", "false");
    } else {
      feedbackEl.textContent = `❌ Wrong! ${data} does not belong here`;
      feedbackEl.classList.add("wrong");
      feedbackEl.classList.remove("correct");
    }
    if(score === total){
      feedbackEl.textContent = "🎉 All organelles placed correctly!";
    }
  });
});
