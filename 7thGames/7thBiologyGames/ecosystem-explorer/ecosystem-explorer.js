let score = 0;
let correctAnswer;

const questions = [
  { q: "Which organism makes its own food?", a: "Producer", options: ["Producer", "Consumer", "Decomposer"] },
  { q: "Which organism eats other organisms?", a: "Consumer", options: ["Consumer", "Producer", "Decomposer"] },
  { q: "Which organism breaks down dead matter?", a: "Decomposer", options: ["Decomposer", "Consumer", "Producer"] },
  { q: "What is a series of organisms eating each other called?", a: "Food Chain", options: ["Food Chain", "Ecosystem", "Habitat"] },
  { q: "Which ecosystem is home to cacti?", a: "Desert", options: ["Desert", "Rainforest", "Ocean"] }
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
