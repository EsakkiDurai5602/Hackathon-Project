let score = 0;
let current = 0;

let questions = [
  { q: "A car travels 100 km in 2 hours. Speed?", ans: 50 },
  { q: "A boy runs 200 m in 20 s. Speed?", ans: 10 },
  { q: "A bus covers 90 km in 3 hours. Speed?", ans: 30 },
  { q: "A cycle moves 60 m in 6 s. Speed?", ans: 10 }
];

function loadQuestion() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
  document.getElementById("question").textContent = questions[current].q;
}

function checkAnswer() {
  let userAns = parseInt(document.getElementById("answer").value);
  let correct = questions[current].ans;
  if (userAns === correct) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = "❌ Wrong! Correct: " + correct;
  }
  document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 Game Over! Final Score: " + score;
    document.getElementById("answer").style.display = "none";
  }
}

loadQuestion();
