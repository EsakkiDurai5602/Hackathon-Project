let score = 0;
let correctAnswer;

const questions = [
  { q: "Who is the father of genetics?", a: "Mendel", options: ["Mendel", "Darwin", "Watson"] },
  { q: "What determines traits in organisms?", a: "Genes", options: ["Genes", "Cells", "Proteins"] },
  { q: "A dominant trait masks a?", a: "Recessive trait", options: ["Recessive trait", "Dominant trait", "Allele"] },
  { q: "Humans have how many chromosomes?", a: "46", options: ["46", "23", "48"] },
  { q: "Traits passed from parents to offspring are called?", a: "Heredity", options: ["Heredity", "Mutation", "Evolution"] }
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
