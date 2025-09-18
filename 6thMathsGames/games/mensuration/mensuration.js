let score = 0;
let current = 0;

let questions = [
  { q: "Find area of rectangle: length=10, breadth=5", ans: 50 },
  { q: "Find perimeter of square: side=6", ans: 24 },
  { q: "Find area of triangle: base=10, height=8", ans: 40 },
  { q: "Find area of circle: radius=7 (use π=22/7)", ans: 154 }
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
