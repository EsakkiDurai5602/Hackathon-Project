let score = 0;
let correctX;

function newRound() {
  let a = Math.floor(Math.random() * 5) + 1; // coefficient
  let x = Math.floor(Math.random() * 10) + 1; // solution
  let b = Math.floor(Math.random() * 10); // constant

  let c = a * x + b; // result of equation

  correctX = x;

  document.getElementById("equation").innerText =
    `Solve: ${a}x + ${b} = ${c}`;

  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("chest").innerText = "🧳";
  document.getElementById("chest").classList.remove("unlocked");
}

function checkAnswer() {
  let userAns = parseInt(document.getElementById("answer").value);

  if (userAns === correctX) {
    document.getElementById("feedback").innerText = "✅ Correct! Treasure unlocked!";
    score++;
    let chest = document.getElementById("chest");
    chest.innerText = "💰";
    chest.classList.add("unlocked");
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong! Try again.";
    score--;
  }

  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "index.html";
}

window.onload = newRound;
