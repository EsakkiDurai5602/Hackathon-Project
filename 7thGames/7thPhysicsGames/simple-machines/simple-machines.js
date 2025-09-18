let score = 0;
let correctAnswer;

const machines = [
  { name: "Lever", function: "Helps lift heavy loads using a fulcrum" },
  { name: "Pulley", function: "Used to lift objects with ropes and wheels" },
  { name: "Inclined Plane", function: "Sloped surface to move objects easily" },
  { name: "Wedge", function: "Used to split or cut objects" },
  { name: "Screw", function: "Converts rotational force into linear motion" },
  { name: "Wheel & Axle", function: "Reduces friction, helps move objects" }
];

function newQuestion() {
  const question = machines[Math.floor(Math.random() * machines.length)];
  correctAnswer = question.name;

  document.getElementById("question").innerText = `Which machine is described: "${question.function}"?`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // Shuffle options
  let shuffled = [...machines].sort(() => Math.random() - 0.5);

  shuffled.forEach(m => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = m.name;
    btn.onclick = () => checkAnswer(m.name);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
}

function checkAnswer(choice) {
  if (choice === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").innerText = `❌ Wrong! Correct answer: ${correctAnswer}`;
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "../index.html";
}

window.onload = newQuestion;
