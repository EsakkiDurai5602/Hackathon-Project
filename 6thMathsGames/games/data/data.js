let score = 0;
let current = 0;

let questions = [
  { q: "How many apples are there?", options: [3, 4, 5, 6], ans: 5 },
  { q: "Which fruit has the least count?", options: ["Apples", "Bananas", "Grapes"], ans: "Bananas" },
  { q: "How many more grapes than bananas?", options: [1, 2, 3, 4], ans: 1 },
  { q: "Total number of fruits?", options: [10, 12, 13, 14], ans: 12 }
];

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").textContent = q.q;
  let optionsEl = document.getElementById("options");
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
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = "❌ Wrong! Correct: " + correct;
  }
  document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    document.getElementById("feedback").textContent = "";
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 Game Over! Final Score: " + score;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();
