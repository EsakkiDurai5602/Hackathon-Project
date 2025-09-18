let score = 0;
let correctAnswer;

const questions = [
  { q: "Which part of a plant absorbs water?", a: "Root", options: ["Root", "Stem", "Leaf"] },
  { q: "Where does photosynthesis occur?", a: "Leaf", options: ["Leaf", "Flower", "Root"] },
  { q: "Which plant reproduces using seeds?", a: "Angiosperm", options: ["Angiosperm", "Fern", "Moss"] },
  { q: "Which part of plant transports water?", a: "Stem", options: ["Stem", "Leaf", "Root"] },
  { q: "Which plant has vascular tissue?", a: "Fern", options: ["Fern", "Moss", "Algae"] }
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
