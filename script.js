const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const colors = document.querySelectorAll(".color");
const gridSizes = document.querySelectorAll(".size");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");

let sketchEnabled = false;
let shadingEnabled = true;
let currentColor = "#1C1C1E"

function color(square) {
  if (sketchEnabled) {
    if (shadingEnabled === false) {
      square.style.backgroundColor = currentColor;
    } else if (shadingEnabled === true) {
      square.style.backgroundColor = currentColor;
    }
  } else {
    return;
  }
}

function colorFirst(square) {
  square.style.backgroundColor = currentColor;
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#F5F5DC"
  })
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
      square.addEventListener('mousedown', function() {colorFirst(square)});
      square.addEventListener('mouseover', function() {color(square)});
    }
    grid.appendChild(row);
  }
}

body.addEventListener('mousedown', () => {
  sketchEnabled = true;
})

body.addEventListener('mouseup', () => {
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

clear.addEventListener('click', clearGrid);

eraser.addEventListener('click', () => {
  currentColor = '#F5F5DC'
})

createGrid(12);