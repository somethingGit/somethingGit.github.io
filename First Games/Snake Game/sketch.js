// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function start() {
  prompt("Please input area")
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

}

function snakeOutOfBounds() {
  if(snakeX > windowWidth || snakeY > windowHeight || snakeX < 0 || snakeY < 0) {
    backToBeginning();
  }
}

function backToBeginning() {
  snakeX = windowWidth/2 - width / 2
}
