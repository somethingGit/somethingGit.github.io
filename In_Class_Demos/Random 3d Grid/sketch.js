// Randomized 2d Grid
// Schellenberg
// Oct 26, 2022

const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0; 
let playerY = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  //Place player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW && grid[playerY][playerX+1] === 0) {
    grid[playerY][playerX] = 0;
    playerX++;
    grid[playerY][playerX] = 9;
  }
  else if(keyCode === LEFT_ARROW && grid[playerY][playerX-1] === 0) {
    grid[playerY][playerX] = 0;
    playerX--;
    grid[playerY][playerX] = 9;
  }
  if(keyCode === DOWN_ARROW && grid[playerY+1][playerX] === 0) {
    grid[playerY][playerX] = 0;
    playerY++;
    grid[playerY][playerX] = 9;
  }
  else if(keyCode === UP_ARROW && grid[playerY-1][playerX] === 0) {
    grid[playerY][playerX] = 0;
    playerY--;
    grid[playerY][playerX] = 9;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if(grid[y][x] === 9) {
        fill("red");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}