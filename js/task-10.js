function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function createBoxes() {
//   let boxCount = document.getElementById('boxCount').value;
//   let boxesContainer = document.getElementById('boxes');

//   boxesContainer.innerHTML = "";

//   let baseSize = 30;
//   for(let i = 1; i <= boxCount; i++) {
//     let box = document.createElement("div");
//     box.className = "box";
//     box.style.width = baseSize + "px";
//     box.style.height = baseSize + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);

//     baseSize += 10;
//   }
// }

// function destroyBoxes() {
//   let boxesContainer = document.getElementById("boxes");
//   boxesContainer.innerHTML = "";
// }