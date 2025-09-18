let score = 0;
let correctAnswer;

const shapesData = [
  { name: "Square", sides: 4, area: "side × side", perimeter: "4 × side" },
  { name: "Triangle", sides: 3, area: "½ × base × height", perimeter: "a+b+c" },
  { name: "Rectangle", sides: 4, area: "length × width", perimeter: "2(l+w)" },
  { name: "Circle", sides: 0, area: "πr²", perimeter: "2πr" }
];

function newRound() {
  let propertyTypes = ["sides", "area", "perimeter"];
  let chosenProperty = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

  let randomShape = shapesData[Math.floor(Math.random() * shapesData.length)];
  correctAnswer = randomShape.name;

  let questionText;
  if (chosenProperty === "sides") {
    questionText = `Which shape has ${randomShape.sides} sides?`;
  } else if (chosenProperty === "area") {
    questionText = `Which shape has area formula: ${randomShape.area}?`;
  } else {
    questionText = `Which shape has perimeter formula: ${randomShape.perimeter}?`;
  }

  document.getElementById("question").innerText = questionText;

  const shapesContainer = document.getElementById("shapes");
  shapesContainer.innerHTML = "";

  // shuffle shapes
  let shuffled = [...shapesData].sort(() => Math.random() - 0.5);

  shuffled.forEach(shape => {
    let div = document.createElement("div");
    div.className = "shape";
    div.innerText = shape.name;
    div.onclick = () => checkAnswer(shape.name);
    shapesContainer.appendChild(div);
  });

  document.getElementById("feedback").innerText = "";
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

window.onload = newRound;
