let score = 0;
let correctAnswer;
let chart;

const questions = [
  {
    type: "bar",
    data: { labels: ["A", "B", "C"], values: [5, 10, 15] },
    question: "Which category has the highest value?",
    options: ["A", "B", "C"],
    answer: "C"
  },
  {
    type: "pie",
    data: { labels: ["Maths", "Science", "English"], values: [40, 30, 30] },
    question: "Which subject has the highest score?",
    options: ["Maths", "Science", "English"],
    answer: "Maths"
  },
  {
    type: "line",
    data: { labels: ["Jan", "Feb", "Mar", "Apr"], values: [5, 7, 3, 9] },
    question: "In which month is the value highest?",
    options: ["Jan", "Feb", "Mar", "Apr"],
    answer: "Apr"
  }
];

function newQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerText = q.question;
  correctAnswer = q.answer;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  renderChart(q);
  document.getElementById("feedback").innerText = "";
}

function renderChart(q) {
  const ctx = document.createElement("canvas");
  const graphArea = document.getElementById("graph-area");
  graphArea.innerHTML = "";
  graphArea.appendChild(ctx);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: q.type,
    data: {
      labels: q.data.labels,
      datasets: [{
        label: "Values",
        data: q.data.values,
        backgroundColor: ["#fd79a8", "#74b9ff", "#55efc4", "#ffeaa7"]
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
}

function checkAnswer(choice) {
  if (choice === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "index.html";
}

window.onload = newQuestion;
