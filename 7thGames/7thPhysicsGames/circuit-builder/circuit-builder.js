let score = 0;
let correctAnswer;

const questions = [
  { q: "A bulb glows when the circuit is?", a: "Closed", options: ["Open", "Closed", "Broken"] },
  { q: "Which material is a conductor?", a: "Copper", options: ["Wood", "Plastic", "Copper"] },
  { q: "Which material is an insulator?", a: "Rubber", options: ["Iron", "Rubber", "Silver"] },
  { q: "Battery provides?", a: "Electrical energy", options: ["Heat energy", "Electrical energy", "Light energy"] }
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
