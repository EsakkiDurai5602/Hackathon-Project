let score = 0;
let correctAnswer;

const questions = [
  { q: "Which system pumps blood throughout the body?", a: "Circulatory", options: ["Circulatory", "Respiratory", "Digestive"] },
  { q: "Which system helps in breathing?", a: "Respiratory", options: ["Respiratory", "Nervous", "Skeletal"] },
  { q: "Which system digests food?", a: "Digestive", options: ["Digestive", "Excretory", "Circulatory"] },
  { q: "Which system controls body functions?", a: "Nervous", options: ["Nervous", "Muscular", "Endocrine"] },
  { q: "Which system protects the body from infection?", a: "Immune", options: ["Immune", "Skeletal", "Digestive"] }
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
