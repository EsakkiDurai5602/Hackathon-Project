let score = 0;
let correctAnswer;

const reactions = [
  { q: "H2 + O2 → ?", a: "H2O", options: ["H2O", "H2O2", "HO"] },
  { q: "Na + Cl2 → ?", a: "NaCl", options: ["NaCl", "NaCl2", "Na2Cl"] },
  { q: "C + O2 → ?", a: "CO2", options: ["CO2", "CO", "C2O"] },
  { q: "Fe + S → ?", a: "FeS", options: ["FeS", "Fe2S3", "FeSO4"] }
];

function newReaction() {
  const r = reactions[Math.floor(Math.random() * reactions.length)];
  correctAnswer = r.a;

  document.getElementById("question").innerText = r.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  r.options.forEach(opt => {
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
  window.location.href = "../index.html"; // because the game is in its own folder
}

window.onload = newReaction;
