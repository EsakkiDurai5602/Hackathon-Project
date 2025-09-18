let score = 0;
let current = 0;

let questions = [
  { q: "Solve: x + 5 = 12, find x", ans: 7 },
  { q: "Solve: 2x = 14, find x", ans: 7 },
  { q: "Solve: x - 4 = 10, find x", ans: 14 },
  { q: "Solve: 3x = 21, find x", ans: 7 }
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
