let score = 0;
let correctAnswer;

function newQuestion() {
  let type = Math.floor(Math.random() * 3); // 0 = speed, 1 = distance, 2 = time
  let distance = Math.floor(Math.random() * 200) + 50; // 50-250 km
  let time = Math.floor(Math.random() * 9) + 2;       // 2-10 hrs
  let speed = Math.floor(Math.random() * 90) + 10;    // 10-100 km/h

  let questionText = "";

  if (type === 0) { // speed
    correctAnswer = (distance / time).toFixed(1);
    questionText = `A car covers ${distance} km in ${time} hours. What is its speed (km/h)?`;
  } 
  else if (type === 1) { // distance
    correctAnswer = (speed * time).toFixed(1);
    questionText = `A bus runs at ${speed} km/h for ${time} hours. What distance (km) does it cover?`;
  } 
  else { // time
    correctAnswer = (distance / speed).toFixed(1);
    questionText = `A bike travels ${distance} km at a speed of ${speed} km/h. How long (hours) does it take?`;
  }

  document.getElementById("question").innerText = questionText;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value;

  if (userAnswer === "") {
    document.getElementById("feedback").innerText = "⚠️ Please enter an answer!";
    return;
  }

  if (parseFloat(userAnswer).toFixed(1) == correctAnswer) {
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
