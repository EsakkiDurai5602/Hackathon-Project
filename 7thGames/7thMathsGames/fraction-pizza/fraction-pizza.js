let score = 0;
let correctAnswer;

function newRound() {
  // Generate denominator (slices)
  let denominator = [2, 3, 4, 6, 8][Math.floor(Math.random() * 5)];
  // Pick numerator (random fraction)
  let numerator = Math.floor(Math.random() * (denominator - 1)) + 1;

  correctAnswer = `${numerator}/${denominator}`;
  document.getElementById("question").innerText =
    `🍕 Select the pizza showing ${numerator}/${denominator}`;

  const pizzaBoard = document.getElementById("pizza-board");
  pizzaBoard.innerHTML = "";

  // Create 3 options (1 correct + 2 random wrong fractions)
  let options = [correctAnswer];

  while (options.length < 3) {
    let randNum = Math.floor(Math.random() * denominator) + 1;
    let randFrac = `${randNum}/${denominator}`;
    if (!options.includes(randFrac)) {
      options.push(randFrac);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Create pizza slices
  options.forEach(opt => {
    let [num, den] = opt.split("/").map(Number);
    let percent = (num / den) * 100;
    let slice = document.createElement("div");
    slice.className = "slice";
    slice.style.background = `conic-gradient(#e17055 0% ${percent}%, #ffeaa7 ${percent}% 100%)`;
    slice.innerText = opt;

    slice.onclick = () => checkAnswer(opt);
    pizzaBoard.appendChild(slice);
  });

  document.getElementById("feedback").innerText = "";
}

function checkAnswer(choice) {
  if (choice === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Correct! You made the right pizza!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong! That’s not the right pizza.";
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "index.html";
}

window.onload = newRound;
