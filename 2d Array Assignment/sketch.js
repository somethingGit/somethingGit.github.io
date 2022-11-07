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
  for(let x = 0; x < sqrt(totalSquares); x++) {
    for(let y = 0; y < sqrt(totalSquares); y++) {
      grid.push([x * squaresSize, y * squaresSize, 0]);
    }
  }
}

function draw() {
  background(220);
  displayGrid();
  if(shouldCheck()) {
    tokenDisplay();
  }
}

let shouldCheck = () => mouseX >= grid[8][0] && mouseY >= grid[8][1] && mouseX < grid[grid.length-1 - 8][0] && mouseY < grid[grid.length - 1 - 8][0];

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

function tokenDisplay() {
  for(let i = grid.length - 1; i > 0; i--) {
    if(shouldDisplay(i) && playerIsThere(i)) {
      fill("red");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

let shouldDisplay = (i) => mouseX >= grid[i][0] && mouseY >= grid[i][1] && mouseX <= grid[i][0] + squaresSize && mouseY <= grid[i][1] + squaresSize && (grid[i - 1][2] === player * -1 && grid[i][2] !== player || grid[i - 8][2] === player * -1 && grid[i][2] !== player || grid[i + 8][2] === player * -1 && grid[i][2] !== player || grid[i + 1][2] === player * -1 && grid[i][2] !== player);

function playerIsThere(x) {
  let num = multipleOfEight(x);
  for(let i = num; i < num + sqrt(totalSquares); i++) {
    if(grid[i] === player) {
      return true;
    }
    console.log(grid[i] === player);
  }
  return false;
}

function multipleOfEight(x) {
  while(x % 8 !== 0) {
    x--;
    if(x % 8 === 0) {
      return x;
    }
  }
  return x;
}

function repairOnWindowSizeChange() {
  let i = 0;
  squaresSize = height / sqrt(totalSquares);
  for(let x = 0; x < sqrt(totalSquares); x++) {
    for(let y = 0; y < sqrt(totalSquares); y++) {
      grid.push([x * squaresSize, y * squaresSize, grid[i][2]]);
      i++;
    }
  }
  grid.reverse();
  for(let j = 0; j < totalSquares; j++) {
    grid.pop();
  }
  grid.reverse();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repairOnWindowSizeChange();
}
