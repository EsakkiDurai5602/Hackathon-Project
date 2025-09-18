let score = 0;
let currentCompound;

const compounds = [
  { formula: "H2O", elements: ["H", "O"] },
  { formula: "CO2", elements: ["C", "O"] },
  { formula: "NaCl", elements: ["Na", "Cl"] },
  { formula: "CH4", elements: ["C", "H"] }
];

function newCompound() {
  const randomIndex = Math.floor(Math.random() * compounds.length);
  currentCompound = compounds[randomIndex];

  const elementsDiv = document.getElementById("elements");
  elementsDiv.innerHTML = "";
  currentCompound.elements.forEach(el => {
    let btn = document.createElement("button");
    btn.className = "element-btn";
    btn.innerText = el;
    btn.onclick = () => addElement(el);
    elementsDiv.appendChild(btn);
  });

  document.getElementById("compoundInput").value = "";
  document.getElementById("feedback").innerText = "";
}

function addElement(el) {
  const input = document.getElementById("compoundInput");
  input.value += el;
}

function checkCompound() {
  const input = document.getElementById("compoundInput").value.trim();
  if (input === currentCompound.formula) {
    document.getElementById("feedback").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").innerText = `❌ Wrong! Correct: ${currentCompound.formula}`;
    score--;
  }
  document.getElementById("score").innerText = score;
}

function goBack() {
  window.location.href = "../index.html"; // Because the game is in its own folder
}

window.onload = newCompound;
