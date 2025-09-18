let score = 0;
let correctAnswer;

const questions = [
  { q: "What is the symbol for Hydrogen?", a: "H", options: ["H", "He", "O"] },
  { q: "Which element belongs to Group 18 (Noble gases)?", a: "Neon", options: ["Neon", "Sodium", "Chlorine"] },
  { q: "Atomic number of Carbon?", a: "6", options: ["12", "6", "8"] },
  { q: "Which element is a halogen?", a: "Chlorine", options: ["Chlorine", "Potassium", "Helium"] },
  { q: "Which element is a metal?", a: "Sodium", options: ["Sodium", "Oxygen", "Neon"] }
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
  window.location.href = "../index.html"; // works for subfolder
}

window.onload = newQuestion;
