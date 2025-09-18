let score = 0;
let correctAnswer;

const questions = [
  { q: "Light travels in?", a: "Straight lines", options: ["Curves", "Straight lines", "Zig-zag"] },
  { q: "Mirror forms?", a: "Reflection", options: ["Absorption", "Reflection", "Refraction"] },
  { q: "Bending of light in water is?", a: "Refraction", options: ["Reflection", "Diffusion", "Refraction"] },
  { q: "Shadow is formed when?", a: "Light is blocked", options: ["Light bends", "Light is blocked", "Light reflects"] }
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
  window.location.href = "../index.html";
}

window.onload = newQuestion;
