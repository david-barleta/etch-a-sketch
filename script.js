const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const colors = document.querySelectorAll(".color");
const gridSizes = document.querySelectorAll(".size");
const gradient = document.querySelector("#gradient");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");

let sketchEnabled = false;
let gradientEnabled = false;
let currentColor = "#1C1C1E"

function color(square) {
  if (sketchEnabled) {
    if (gradientEnabled === false) {
      square.style.backgroundColor = currentColor;
      square.style.opacity = 1;
    } else if (gradientEnabled === true) {
      square.style.backgroundColor = currentColor;
      let opacity = parseFloat(square.style.opacity);
      console.log(opacity);
      if(opacity <= 0.9) {
        square.style.opacity = opacity + 0.30;
        console.log(square.style.opacity);
      }
    }
  } else {
    return;
  }
}

function colorFirst(square) {
  if (gradientEnabled === false) {
    square.style.backgroundColor = currentColor;
    square.style.opacity = 1;
  } else if (gradientEnabled === true) {
    square.style.backgroundColor = currentColor;
    let opacity = parseFloat(square.style.opacity);
    console.log(opacity);
    if(opacity <= 0.9) {
      square.style.opacity = opacity + 0.2;
      console.log(square.style.opacity);
    }
  }
}

function toggleGradient() {
  if (gradientEnabled === false) {
    gradientEnabled = true;
    gradient.textContent = "Gradient:On";
  } else {
    gradientEnabled = false;
    gradient.textContent = "Gradient:Off";
  }
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#f5f5dc";
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
      const div = document.createElement('div');
      div.setAttribute(`style`, `height: 100%; width: 100%; opacity: 0;`);
      square.appendChild(div);
      div.addEventListener('mousedown', function() {colorFirst(div)});
      div.addEventListener('mouseover', function() {color(div)});
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

gradient.addEventListener('click', toggleGradient);

clear.addEventListener('click', clearGrid);

eraser.addEventListener('click', () => {
  currentColor = '#F5F5DC'
})

createGrid(12);