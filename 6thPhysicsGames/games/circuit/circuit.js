let battery = document.getElementById("battery");
let bulb = document.getElementById("bulb");

battery.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text", "battery");
});

bulb.addEventListener("dragover", e => e.preventDefault());
bulb.addEventListener("drop", e => {
  let data = e.dataTransfer.getData("text");
  if (data === "battery") {
    document.getElementById("feedback").textContent = "💡 Bulb Glows! Circuit Complete!";
    bulb.src = "https://img.icons8.com/emoji/96/000000/light-bulb.png"; // glowing bulb
  }
});
