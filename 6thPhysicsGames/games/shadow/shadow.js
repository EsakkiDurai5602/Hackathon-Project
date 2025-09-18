let score = 0;
let current = 0;

let questions = [
  { q: "Closer the object to light → shadow size?", options: ["Bigger", "Smaller"], ans: "Bigger" },
  { q: "Opaque objects form?", options: ["Shadow", "No shadow"], ans: "Shadow" },
  { q: "Transparent objects form?", options: ["Clear shadow", "No shadow"], ans: "No shadow" },
  { q: "Shadow is always?", options: ["Black", "Colorful"], ans: "Black" }
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
