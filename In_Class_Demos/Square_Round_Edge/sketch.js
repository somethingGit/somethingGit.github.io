// Square Round Edge
// Jason
// 09/26/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0, y = 0, squareWidth = 50, squareHeight = 50, goX = 0, goY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(144);
}

function draw() {
  background(220);
  getSquarePosition();
}

function getSquarePosition() {
  if(x <= 0 && y <= 0) {
    goX = 1;
    goY = 0;
  }
  else if(x > width - squareWidth && y <= 0) {
    goX = 0;
    goY = 1;
  }
  else if(x > width - squareWidth - 1 && y > height - squareHeight - 1) {
    goX = -1;
    goY = 0;
  }
  else if(x <= 0 && y > height - squareHeight - 1) {
    goX = 0;
    goY = -1;
  }
  moveSquare();
}

function moveSquare() {
  if(goX === 1) {
    x += 10;
    y = 0;
  }
  else if(goX === -1) {
    x += -10;
    y = height - squareHeight;
  }
  else if(goY === 1) {
    y += 10;
    x = width - squareWidth;
  }
  else if(goY === -1) {
    y += -10;
    x = 0;
  }
  makeSquare();
}

function makeSquare() {
  stroke(5);
  fill("blue");
  rect(x, y, squareWidth, squareHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}