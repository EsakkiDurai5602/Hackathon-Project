let score = 0;
let current = 0;

let questions = [
  { q: "H2O is a?", options: ["Element", "Compound", "Mixture"], ans: "Compound" },
  { q: "Na is?", options: ["Element", "Compound", "Mixture"], ans: "Element" },
  { q: "Air is?", options: ["Element", "Compound", "Mixture"], ans: "Mixture" },
  { q: "CO2 is?", options: ["Compound", "Element", "Mixture"], ans: "Compound" }
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
