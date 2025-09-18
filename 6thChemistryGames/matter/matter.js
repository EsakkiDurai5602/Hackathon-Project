let correctAnswers = {
  "Ice": "solid",
  "Rock": "solid",
  "Water": "liquid",
  "Juice": "liquid",
  "Steam": "gas"
};

let score = 0;

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", e.target.textContent);
  });
});

document.querySelectorAll(".dropbox").forEach(box => {
  box.addEventListener("dragover", e => e.preventDefault());
  box.addEventListener("drop", e => {
    let data = e.dataTransfer.getData("text");
    if (correctAnswers[data] === box.id) {
      document.getElementById("feedback").textContent = "✅ Correct!";
      score++;
    } else {
      document.getElementById("feedback").textContent = "❌ Wrong!";
    }
    if (score === Object.keys(correctAnswers).length) {
      document.getElementById("feedback").textContent = "🎉 All items sorted!";
    }
  });
});
