function checkAnswer(a,b,c){
  const feedback = document.getElementById("feedback");
  if(a==="CO2" && b==="H2O" && c==="O2"){
    feedback.textContent = "✅ Correct! Plants make Glucose and Oxygen!";
    feedback.classList.add("correct");
  } else {
    feedback.textContent = "❌ Wrong! Try again!";
    feedback.classList.add("wrong");
  }
}
