let score = 0;
let correctAnswer;

const questions = [
  { q: "Which particle has a positive charge?", a: "Proton", options: ["Electron", "Proton", "Neutron"] },
  { q: "Which particle has no charge?", a: "Neutron", options: ["Electron", "Proton", "Neutron"] },
  { q: "Which particle orbits the nucleus?", a: "Electron", options: ["Electron", "Proton", "Neutron"] },
  { q: "The center of an atom is called?", a: "Nucleus", options: ["Shell", "Nucleus", "Orbit"] }
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
