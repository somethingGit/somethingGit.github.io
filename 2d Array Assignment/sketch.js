// Reversi
// Jason
// October 31 2022
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let squaresSize;
let totalSquares = 8*8;
let player = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squaresSize = height / sqrt(totalSquares);
  makeGrid(totalSquares, squaresSize);
  grid[27][2] = 1;
  grid[28][2] = -1;
  grid[35][2] = -1;
  grid[36][2] = 1;
}

function makeGrid(totalSquares, squaresSize) {
  for(let x = 0; x <= height - squaresSize; x += squaresSize) {
    for(let y = 0; y <= height - squaresSize; y += squaresSize) {
      grid.push([x, y, 0]);
    }
  }
}

function draw() {
  background(220);
  displayGrid();
  mouseMove();
}

function displayGrid() {
  for(let i = 0; i < grid.length; i++) {
    fill("white");
    square(grid[i][0], grid[i][1], squaresSize);
    if(grid[i][2] === 1) {
      fill("red");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
    else if(grid[i][2] === -1) {
      fill("black");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

function mouseMove() {
  for(let i = 0; i < grid.length; i++) {
    if(mouseX > grid[i][0] && mouseY > grid[i][1] && mouseX < grid[i+1][0] && mouseY < grid[i+1][1]) {
      fill("red");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}