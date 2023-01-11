const grid = document.querySelector(".grid");
const colors = document.querySelectorAll(".color");

let sketchEnabled = false;

function color(square) {
  if (sketchEnabled) {
    square.style.backgroundColor = "black";
  } else {
    return;
  }
}

function changeColor () {

}

function createGrid(gridSize) {
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
  console.log("mouse down");
  sketchEnabled = true;
})

grid.addEventListener('mouseup', () => {
  console.log("mouse up");
  sketchEnabled = false;
})

createGrid(12);