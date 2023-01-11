const grid = document.querySelector(".grid");
const colors = document.querySelectorAll(".color");
const gridSizes = document.querySelectorAll(".size");

let sketchEnabled = false;
let currentColor = "#1C1C1E"

function color(square) {
  if (sketchEnabled) {
    square.style.backgroundColor = currentColor;
  } else {
    return;
  }
}

function createGrid(gridSize) {
  grid.innerHTML = "";
  for (g = 0; g < gridSize; g++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (i = 0; i < gridSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute(`style`, `height: ${500/gridSize}px; width: ${500/gridSize}px`);
      row.appendChild(square);
      square.addEventListener('mouseover', function() {color(square)});
    }
    grid.appendChild(row);
  }
}

grid.addEventListener('mousedown', () => {
  sketchEnabled = true;
})

grid.addEventListener('mouseup', () => {
  sketchEnabled = false;
})

colors.forEach((color) => {
  color.addEventListener('click', () => {
    currentColor = color.id;
  })
})

gridSizes.forEach((size) => {
  size.addEventListener('click', function() {createGrid(size.id)});
})

createGrid(12);