let score = 0;
let timeLeft = 30;
let timer;
let correctAnswer;

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 20) + 1;
  correctAnswer = num1 + num2;
  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
  let userAns = parseInt(document.getElementById("answer").value);
  if (userAns === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = "❌ Wrong!";
  }
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("answer").value = "";
  generateQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("question").textContent = "⏰ Time's up!";
      document.getElementById("answer").disabled = true;
    }
  }, 1000);
}

generateQuestion();
startTimer();
