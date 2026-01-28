const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');
let gridSize = 16; // default 16x16 grid

function createGrid(size) {
  // Clear existing squares
  container.innerHTML = '';

  // Calculate square size
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.darkness = 0; // for progressive darkening

    // Hover effect
    square.addEventListener('mouseenter', () => {
      // Extra credit: random RGB & progressive darkening
      let darkness = parseFloat(square.dataset.darkness);
      if (darkness < 1) {
        darkness += 0.1; // darken by 10% per hover
        square.dataset.darkness = darkness;
        // Random pinkish RGB
        const r = Math.floor(255 - 255 * darkness);
        const g = Math.floor(182 - 182 * darkness);
        const b = Math.floor(193 - 193 * darkness);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    });

    container.appendChild(square);
  }
}

// Resize grid button
resizeBtn.addEventListener('click', () => {
  let newSize = prompt("Enter number of squares per side (max 100):", 16);
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100!");
    return;
  }
  gridSize = newSize;
  createGrid(gridSize);
});

// Initialize default grid
createGrid(gridSize);

