let score = 0;
let correctAnswer;

function newRound() {
  let num1 = Math.floor(Math.random() * 41) - 20; // random integer -20 to 20
  let num2 = Math.floor(Math.random() * 41) - 20;

  while (num1 === num2) {
    num2 = Math.floor(Math.random() * 41) - 20;
  }

  document.getElementById("question").innerText = `Which number is greater?`;
  document.getElementById("choice1").innerText = num1;
  document.getElementById("choice2").innerText = num2;

  correctAnswer = num1 > num2 ? 1 : 2;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(choice) {
  if (choice === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Correct! You won the battle!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong! Try again!";
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "index.html";
}

// start the first round
window.onload = newRound;
