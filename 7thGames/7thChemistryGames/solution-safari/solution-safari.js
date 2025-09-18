let score = 0;
let correctAnswer;

const questions = [
  { q: "Water is a common ______.", a: "Solvent", options: ["Solvent", "Solute", "Mixture"] },
  { q: "Sugar dissolves in water. Sugar is the?", a: "Solute", options: ["Solute", "Solvent", "Solution"] },
  { q: "Mixture of salt and water is called?", a: "Solution", options: ["Solution", "Compound", "Element"] },
  { q: "Oil and water form a?", a: "Mixture", options: ["Mixture", "Solution", "Compound"] },
  { q: "Salt is soluble in?", a: "Water", options: ["Water", "Oil", "Alcohol"] }
];

function newQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  correctAnswer = q.a;

  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
}

function checkAnswer(choice) {
  if (choice === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").innerText = `❌ Wrong! Correct: ${correctAnswer}`;
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "../index.html"; // Because the game is in its own folder
}

window.onload = newQuestion;
