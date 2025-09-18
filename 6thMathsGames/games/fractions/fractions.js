let score = 0;
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let feedbackEl = document.getElementById("feedback");
let scoreEl = document.getElementById("score");

let questions = [
  { q: "1/2 of 12 = ?", options: [6, 4, 3, 8], ans: 6 },
  { q: "3/4 of 20 = ?", options: [15, 10, 5, 12], ans: 15 },
  { q: "2/3 of 18 = ?", options: [12, 6, 9, 10], ans: 12 },
  { q: "1/5 of 25 = ?", options: [5, 10, 15, 20], ans: 5 }
];

let current = 0;

function loadQuestion() {
  let q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    let div = document.createElement("div");
    div.textContent = opt;
    div.onclick = () => checkAnswer(opt, q.ans);
    optionsEl.appendChild(div);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = "❌ Wrong! Correct answer: " + correct;
  }
  scoreEl.textContent = "Score: " + score;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    feedbackEl.textContent = "";
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Game Over! Final Score: " + score;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
  }
}

loadQuestion();
