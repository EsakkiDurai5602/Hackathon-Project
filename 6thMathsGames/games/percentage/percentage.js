let score = 0;
let current = 0;

let questions = [
  { q: "What is 20% of 250?", options: [40, 45, 50, 60], ans: 50 },
  { q: "What is 50% of 180?", options: [60, 90, 80, 100], ans: 90 },
  { q: "What is 25% of 200?", options: [25, 50, 75, 100], ans: 50 },
  { q: "What is 10% of 350?", options: [30, 35, 40, 25], ans: 35 }
];

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").textContent = q.q;
  let optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    let div = document.createElement("div");
    div.textContent = opt;
    div.onclick = () => checkAnswer(opt, q.ans);
    optionsEl.appendChild(div);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
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
    document.getElementById("feedback").textContent = "";
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 Game Over! Final Score: " + score;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();
