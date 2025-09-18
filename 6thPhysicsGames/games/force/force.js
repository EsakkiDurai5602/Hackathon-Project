let score = 0;
let current = 0;

let questions = [
  { q: "Force can change?", options: ["Shape", "Direction", "Both"], ans: "Both" },
  { q: "Friction is a force that?", options: ["Opposes motion", "Helps motion"], ans: "Opposes motion" },
  { q: "Which surface has more friction?", options: ["Ice", "Sandpaper"], ans: "Sandpaper" },
  { q: "Which force pulls us to Earth?", options: ["Gravity", "Friction"], ans: "Gravity" }
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
