// 2d Array
// Jason
// Oct 25 2022

let twoDArray = [[],[],[]];

let cellHeight;
let cellWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  twoDArray = [[color(255), color(255), color(255)], [color(255), color(255), color(255)], [color(255), color(255), color(255)]];
}

function draw() {
  background(220);
  displayGrid(twoDArray);
}

function displayGrid(grid) {
  cellHeight = height / grid.length;
  for (let y = 0; y < grid.length; y++) {
    cellWidth = width / grid[y].length;
    for(let x = 0; x < grid[y].length; x++) {
      fill(grid[y][x]);
      
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  twoDArray[y][x] = ranColor;
}

function ranColor() {
  return color(random(255), random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}