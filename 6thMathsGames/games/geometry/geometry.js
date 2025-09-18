let score = 0;
let current = 0;

let questions = [
  { q: "How many sides does a hexagon have?", options: [5, 6, 7, 8], ans: 6 },
  { q: "What is the angle of a right triangle?", options: [60, 45, 90, 120], ans: 90 },
  { q: "How many degrees in a straight line?", options: [90, 180, 270, 360], ans: 180 },
  { q: "How many faces does a cube have?", options: [6, 8, 12, 4], ans: 6 }
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
