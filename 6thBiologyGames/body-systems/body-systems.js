let correctAnswers = {
  "Heart": "circulatory",
  "Lungs": "respiratory",
  "Stomach": "digestive"
};
let score = 0;
const feedbackEl = document.getElementById("feedback");

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", e => e.dataTransfer.setData("text", e.target.textContent));
});
document.querySelectorAll(".dropbox").forEach(box => {
  box.addEventListener("dragover", e => e.preventDefault());
  box.addEventListener("drop", e => {
    let data = e.dataTransfer.getData("text");
    if(correctAnswers[data] === box.id){
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.classList.add("correct");
      score++;
    } else {
      feedbackEl.textContent = "❌ Wrong!";
      feedbackEl.classList.add("wrong");
    }
    if(score === Object.keys(correctAnswers).length){
      feedbackEl.textContent = "🎉 All organs placed!";
    }
  });
});
