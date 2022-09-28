// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let savedSnakeLocationX = [], savedSnakeLocationY = [];
let goX = 1, goY = 0;
let fixTurn;
let lastDirectionX = 1, lastDirectionY = 0;
let headPosition = [2, 0];
let hasMoved = true;
let fruitX, fruitY;
let thereIsFruit = false;
let gridCoordinatesX = [], gridCoordinatesY = [];
let totalSquaresWidth = 40, totalSquaresHeight = 40;
let snakeLength = 0;
let score = 0;
let ai = false;
let pause = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  savedSnakeLocationX = [0,1];
  savedSnakeLocationY = [0,0];
  fixTurn = savedSnakeLocationX.length;
}

function draw() {
  background(220);
  if(pause === false) {
    makeGrid();
  }
}

function makeGrid() {
  let gridWidth = windowWidth / totalSquaresWidth;
  let gridHeight = windowHeight / totalSquaresHeight;
  snakeLength = savedSnakeLocationX.length + 1;
  gridWidth = windowWidth / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  gridCoordinatesX = [];
  gridCoordinatesY = [];
  for(let x = 0; x < width - gridWidth * 2; x += gridWidth) {
    for(let y = 0; y < height - gridHeight * 2; y += gridHeight) {
      strokeWeight(1);
      stroke(160);
      fill(255);
      rect(x, y, gridWidth, gridHeight);
      gridCoordinatesX.push(x);
      gridCoordinatesY.push(y);
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
    randomFruitLocation();
  }
  drawFruit(gridWidth, gridHeight);
}


function drawFruit(gridWidth, gridHeight) {
  fill("red");
  if(fruitX * gridWidth > width || fruitY * gridHeight > height) {
    addFruit();
  }
  rect(fruitX * gridWidth, fruitY * gridHeight, gridWidth, gridHeight);
  normalMove(gridWidth, gridHeight);
  console.log(fruitX * gridWidth, width, fruitY * gridHeight, height);
}

function normalMove(gridWidth, gridHeight) {
  savedSnakeLocationX.push(headPosition[0]);
  savedSnakeLocationX.shift();
  savedSnakeLocationY.push(headPosition[1]);
  savedSnakeLocationY.shift();
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
  addScore(gridWidth, gridHeight);
}

function addScore(gridWidth, gridHeight) {
  let textPx = 32;
  textSize(textPx);
  text(score - 1, headPosition[0] * gridWidth + textPx / 2, headPosition[1] * gridHeight + textPx / 2);
  snakeEatFruit(gridWidth, gridHeight);
}

function snakeEatFruit(gridWidth, gridHeight) {
  if(headPosition[0] === fruitX && headPosition[1] === fruitY) {
    thereIsFruit = false;
    reverse(savedSnakeLocationX);
    append(savedSnakeLocationX, savedSnakeLocationX[savedSnakeLocationX.length] - gridWidth);
    reverse(savedSnakeLocationX);
    reverse(savedSnakeLocationY);
    append(savedSnakeLocationY, savedSnakeLocationY[savedSnakeLocationY.length] - gridHeight);
    reverse(savedSnakeLocationY);
  }
  snakeOutOfBounds(gridWidth, gridHeight);
}

function snakeOutOfBounds(gridWidth, gridHeight) {
  for(let i = -1; i < savedSnakeLocationX.length + 1; i++) {
    if(headPosition[0] * gridWidth > width || headPosition[0] < 0 || headPosition[1] * gridHeight > height || headPosition[1] < 0 || headPosition[0] === savedSnakeLocationX[i] && headPosition[1] === savedSnakeLocationY[i]) {
      backToBeginning();
    }
  }
  console.log("Position of the head", headPosition[0] * gridWidth, width);
}

function backToBeginning() {
  savedSnakeLocationX = [0,1];
  savedSnakeLocationY = [0,0];
  headPosition = [2, 0];
  goX = 1;
  goY = 0;
  score = 0;
  thereIsFruit = false;
}

function randomFruitLocation() {
  fruitX = round(random(totalSquaresWidth)) - 3;
  fruitY = round(random(totalSquaresHeight)) - 3;
  if(fruitX < 0) {
    fruitX *= -1;
  }
  if(fruitY < 0) {
    fruitY *= -1;
  }
  score++;
  for(let i = 0; i < snakeLength; i++) {
    if(fruitX === headPosition[i]) {
      randomFruitLocation();
    }
  }
  thereIsFruit = true;
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
  case 192:
    pause = true;
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
