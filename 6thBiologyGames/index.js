document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "0.6s";
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
    }, i * 200);
  });
});
