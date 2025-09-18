let score = 0;
let correctAnswer;

const energyTypes = [
  { type: "Kinetic Energy", example: "A rolling ball" },
  { type: "Potential Energy", example: "Water stored in a dam" },
  { type: "Heat Energy", example: "Boiling water on a stove" },
  { type: "Sound Energy", example: "Music from a guitar" },
  { type: "Light Energy", example: "Sunlight reaching Earth" },
  { type: "Electrical Energy", example: "Bulb glowing in a circuit" },
  { type: "Chemical Energy", example: "Energy stored in food" }
];

function newQuestion() {
  const q = energyTypes[Math.floor(Math.random() * energyTypes.length)];
  correctAnswer = q.type;

  document.getElementById("question").innerText = `Which form of energy is shown in: "${q.example}"?`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  let shuffled = [...energyTypes].sort(() => Math.random() - 0.5);

  shuffled.forEach(e => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = e.type;
    btn.onclick = () => checkAnswer(e.type);
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
  window.location.href = "../index.html";
}

window.onload = newQuestion;
