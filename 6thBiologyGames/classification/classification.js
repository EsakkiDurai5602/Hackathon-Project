let score = 0;
let current = 0;
const feedbackEl = document.getElementById("feedback");

let questions = [
  { q: "Lion is a?", options: ["Mammal", "Reptile", "Bird"], ans: "Mammal" },
  { q: "Rose is a?", options: ["Tree", "Flowering Plant", "Grass"], ans: "Flowering Plant" },
  { q: "Crocodile is a?", options: ["Reptile", "Amphibian", "Mammal"], ans: "Reptile" },
  { q: "Eagle is a?", options: ["Bird", "Mammal", "Fish"], ans: "Bird" }
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
  if(selected === correct){
    feedbackEl.textContent = "✅ Correct!";
    score++;
    feedbackEl.classList.add("correct");
    feedbackEl.classList.remove("wrong");
  } else {
    feedbackEl.textContent = "❌ Wrong! Correct: " + correct;
    feedbackEl.classList.add("wrong");
    feedbackEl.classList.remove("correct");
  }
  document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
  current++;
  if(current < questions.length){
    feedbackEl.textContent = "";
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 Quiz Over! Final Score: " + score;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();
