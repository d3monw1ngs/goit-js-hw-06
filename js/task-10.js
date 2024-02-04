function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const boxCount = document.getElementById('boxCount').value;
  const boxesContainer = document.getElementById('boxes');

  
}