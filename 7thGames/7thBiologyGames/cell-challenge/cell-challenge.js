let score = 0;
let correctAnswer;

const questions = [
  { q: "Which organelle is the control center of the cell?", a: "Nucleus", options: ["Nucleus", "Mitochondria", "Ribosome"] },
  { q: "Which organelle produces energy (ATP)?", a: "Mitochondria", options: ["Mitochondria", "Chloroplast", "Golgi Body"] },
  { q: "Which organelle helps in protein synthesis?", a: "Ribosome", options: ["Ribosome", "Lysosome", "Vacuole"] },
  { q: "Which organelle is present in plant cells but not in animal cells?", a: "Chloroplast", options: ["Chloroplast", "Nucleus", "Endoplasmic Reticulum"] }
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
