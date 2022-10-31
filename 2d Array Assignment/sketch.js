// Minesweeper
// Jason
// October 31 2022
// Game that uses 2d Arrray to get location.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let squaresSize;
let totalSquares;

function setup() {
  createCanvas(windowWidth, windowHeight);
  totalSquares = 100;
  squaresSize = 5000 / totalSquares;
  makeGrid(totalSquares, squaresSize);
}

function makeGrid(totalSquares, squaresSize) {
  for(let x = 0; x < totalSquares; x += squaresSize) {
    for(let y = 0; y < totalSquares; y += squaresSize) {
      grid.push([x,y]);
    }
  }
}

function draw() {
  background(220);
  squaresSize = 5000 / totalSquares;
  for(let i = 0; i < grid.length; i++) {
    square(grid[i][0], grid[i][1], squaresSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  grid = [];
  for(let x = 0; x < totalSquares; x += squaresSize) {
    for(let y = 0; y < totalSquares; y += squaresSize) {
      grid.push([x,y]);
    }
  }
}