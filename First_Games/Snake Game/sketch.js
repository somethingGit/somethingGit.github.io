// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let totalSquaresWidth = prompt("Please input width: ");
let totalSquaresHeight = prompt("Please input height: ");
let gridWidth = windowWidth / totalSquaresWidth;
let gridHeight = windowHeight / totalSquaresHeight;

function start() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

}

function snakeOutOfBounds() {
  let snakeX = windowWidth/2 - width / 2;
  let snakeY = 0;
  if(snakeX > windowWidth || snakeY > windowHeight || snakeX < 0 || snakeY < 0) {
    backToBeginning(snakeX);
  }
}

function backToBeginning(snakeX) {
  snakeX = windowWidth/2 - width / 2;
}
