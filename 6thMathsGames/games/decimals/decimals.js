let score = 0;
let current = 0;

let questions = [
  { q: "What is 0.5 + 0.25?", options: [0.7, 0.75, 0.8, 1], ans: 0.75 },
  { q: "What is 1.2 × 10?", options: [10, 12, 11.2, 20], ans: 12 },
  { q: "What is 3.6 ÷ 2?", options: [1.8, 2.2, 2, 1.6], ans: 1.8 },
  { q: "What is 2.75 - 1.25?", options: [1.25, 1.5, 1.4, 1.6], ans: 1.5 }
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
