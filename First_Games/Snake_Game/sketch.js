// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// eslint-disable-next-line no-var
var savedSnakeLocationX = [];
// eslint-disable-next-line no-var
var savedSnakeLocationY = [];

// eslint-disable-next-line no-var
var goX = 1;
// eslint-disable-next-line no-var
var goY = 0;
// eslint-disable-next-line no-var
var fixTurn;
// eslint-disable-next-line no-var
var lastDirectionX = 1;
// eslint-disable-next-line no-var
var lastDirectionY = 0;

let headPosition = [7, 0];

let hasMoved = true;

let fruitX;

let fruitY;

let thereIsFruit = false;

let gridCoordinatesX = [];

let gridCoordinatesY = [];

let totalSquaresWidth = 20;//prompt("Please input width: ");
let totalSquaresHeight = 20;//prompt("Please input height: ");

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  savedSnakeLocationX = [0,1,2,3,4,5,6];
  savedSnakeLocationY = [0,0,0,0,0,0,0];
  fixTurn = savedSnakeLocationX.length;
}

function draw() {
  background(220);
  makeGrid();
  console.log(thereIsFruit);
}

function makeGrid() {
  let gridWidth = windowWidth / totalSquaresWidth;
  let gridHeight = windowHeight / totalSquaresHeight;
  let snakeLength = savedSnakeLocationX.length + 1;
  gridWidth = windowWidth / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  gridCoordinatesX = [];
  gridCoordinatesY = [];
  for(let x = 0; x < width; x += gridWidth) {
    for(let y = 0; y < height; y += gridHeight) {
      strokeWeight(1);
      stroke(160);
      fill(255);
      rect(x, y, gridWidth, gridHeight);
      append(gridCoordinatesX, x);
      append(gridCoordinatesY, y);
    }
  }
  //makeSnake(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight);
  snakeOutOfBounds(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight);
}

function snakeOutOfBounds(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight) {
  for(let i = -1; i < savedSnakeLocationX.length + 1; i++) {
    if(headPosition[0] > gridCoordinatesX.length || headPosition[0] < 0 || headPosition[1]  > gridCoordinatesY.length - 2 || headPosition[1] < 0 || headPosition[0] === savedSnakeLocationX[i] && headPosition[1] === savedSnakeLocationY[i]) {
      backToBeginning();
    }
  }
  makeSnake(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight);
}

function makeSnake(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight) {
  fill("green");
  rect(headPosition[0] * gridWidth, headPosition[1] * gridHeight, gridWidth, gridHeight);
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    fill("green");
    rect(savedSnakeLocationX[i] * gridWidth, savedSnakeLocationY[i] * gridHeight, gridWidth, gridHeight);
  }
  addFruit(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight);
}

function addFruit(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight) {
  if(thereIsFruit === false) {
    fruitX = round(random(totalSquaresWidth));
    fruitY = round(random(totalSquaresHeight));
    thereIsFruit = true;
  }
  drawFruit(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight);
}


function drawFruit(gridWidth, gridHeight) {
  fill("red");
  rect(fruitX * gridWidth, fruitY * gridHeight, gridWidth, gridHeight);
  normalMove(gridWidth, gridHeight);
}

function normalMove(gridWidth, gridHeight) {
  append(savedSnakeLocationX, headPosition[0]);
  reverse(savedSnakeLocationX);
  shorten(savedSnakeLocationX);
  reverse(savedSnakeLocationX);
  append(savedSnakeLocationY, headPosition[1]);
  reverse(savedSnakeLocationY);
  shorten(savedSnakeLocationY, 0, 1);
  reverse(savedSnakeLocationY);
  if(goX === 1) {
    headPosition[0] = headPosition[0] + 1;
    hasMoved = true;
  }
  else if(goX === -1) {
    headPosition[0] = headPosition[0] - 1;
    hasMoved = true;
  }
  else if(goY === 1) {
    headPosition[1] = headPosition[1] - 1;
    hasMoved = true;
  }
  else if(goY === -1) {
    headPosition[1] = headPosition[1] + 1;
    hasMoved = true;
  }
  snakeEatFruit(gridWidth, gridHeight);
}

function snakeEatFruit(gridWidth, gridHeight, totalSquaresWidth, totalSquaresHeight) {
  if(headPosition[0] === fruitX && headPosition[1] === fruitY) {
    thereIsFruit = false;
    console.log(thereIsFruit);
    reverse(savedSnakeLocationX);
    append(savedSnakeLocationX, savedSnakeLocationX[savedSnakeLocationX.length] - gridWidth);
    reverse(savedSnakeLocationX);
    reverse(savedSnakeLocationY);
    append(savedSnakeLocationY, savedSnakeLocationY[savedSnakeLocationY.length] - gridHeight);
    reverse(savedSnakeLocationY);
  }
}

function backToBeginning() {
  savedSnakeLocationX = [0,1,2,3,4,5,6];
  savedSnakeLocationY = [0,0,0,0,0,0,0];
  headPosition = [7, 0];
  goX = 1;
  goY = 0;
  thereIsFruit = false;
}

function between(x, min, max) {
  return x >= min && x <= max;
}

function keyPressed() {
  switch(keyCode) {
  case RIGHT_ARROW:
    if(goX !== -1 && hasMoved) {
      goX = 1;
      goY = 0;
      fixTurn = 0;
      hasMoved = false;
    }
    break;
  case LEFT_ARROW:
    if(goX !== 1 && hasMoved) {
      goX = -1;
      goY = 0;
      fixTurn = 0;
      hasMoved = false;
    }
    break;
  case UP_ARROW:
    if(goY !== -1 && hasMoved) {
      goX = 0;
      goY = 1;
      fixTurn = 0;
      hasMoved = false;
    }
    break;
  case DOWN_ARROW:
    if(goY !== 1 && hasMoved) {
      goX = 0;
      goY = -1;
      fixTurn = 0;
      hasMoved = false;
    }
    break;
  case 32:
    frameRate(1/20);
    break;
  default:
    break;
  }
}

function windowResized() {
  let gridCoordinatesX = [];
  let gridCoordinatesY = [];
  resizeCanvas(windowWidth, windowHeight);
}
