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

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  savedSnakeLocationX = [2,1,0];
  savedSnakeLocationY = [0,0,0];
  fixTurn = savedSnakeLocationX.length;
}

function draw() {
  background(220);
  makeGrid();
}

function makeGrid() {
  let totalSquaresWidth = 20;//prompt("Please input width: ");
  let totalSquaresHeight = 20;//prompt("Please input height: ");
  let gridWidth = windowWidth / totalSquaresWidth;
  let gridHeight = windowHeight / totalSquaresHeight;
  let snakeLength = savedSnakeLocationX.length;
  gridWidth = windowWidth / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  for(let x = 0; x < width; x += gridWidth) {
    for(let y = 0; y < height; y += gridHeight) {
      strokeWeight(1);
      stroke(160);
      fill(255);
      rect(x, y, gridWidth, gridHeight);
    }
  }
  makeSnake(gridWidth, gridHeight);
}

function makeSnake(gridWidth, gridHeight) {
  fill("green");
  rect(headPosition * gridWidth)
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    fill("green");
    rect(savedSnakeLocationX[i] * gridWidth, savedSnakeLocationY[i] * gridHeight, gridWidth, gridHeight);
  }
  normalMove(gridWidth, gridHeight);
}

function normalMove(gridWidth, gridHeight) {
  /*
  if(goX === 1) {
    for(let i = 0; i < fixTurn; i++) {
      savedSnakeLocationX[i] = savedSnakeLocationX[i] + 1;
    }
  }
  else if(goX === -1) {
    for(let i = 0; i < fixTurn; i++) {
      savedSnakeLocationX[i] = savedSnakeLocationX[i] - 1;
      console.log(savedSnakeLocationX[i]);
    }
  }
  else if(goY === 1) {
    for(let i = 0; i < fixTurn; i++) {
      savedSnakeLocationY[i] = savedSnakeLocationY[i] - 1;
    }
  }
  else if(goY === -1) {
    for(let i = 0; i < fixTurn; i++) {
      savedSnakeLocationY[i] = savedSnakeLocationY[i] + 1;
    }
  }
  
  
  if(lastDirectionX === 1 && fixTurn < savedSnakeLocationX.length) {
    for(let i = 0; i < savedSnakeLocationX.length - fixTurn; i++) {
      savedSnakeLocationX[savedSnakeLocationX - i] = savedSnakeLocationX[savedSnakeLocationX - i] + 1;
    }
  }
  else if(lastDirectionX === -1 && fixTurn < savedSnakeLocationX.length) {
    for(let i = 0; i < savedSnakeLocationX.length - fixTurn; i++) {
      savedSnakeLocationX[savedSnakeLocationX - i] = savedSnakeLocationX[savedSnakeLocationX - i] - 1;
    }
  }
  else if(lastDirectionY === 1 && fixTurn < savedSnakeLocationX.length) {
    for(let i = 0; i < savedSnakeLocationX.length - fixTurn; i++) {
      savedSnakeLocationY[savedSnakeLocationX - i] = savedSnakeLocationY[savedSnakeLocationX - i] + 1;
    }
  }
  else if(lastDirectionY === -1 && fixTurn < savedSnakeLocationX.length) {
    for(let i = 0; i < savedSnakeLocationX.length - fixTurn; i++) {
      savedSnakeLocationY[savedSnakeLocationX - i] = savedSnakeLocationY[savedSnakeLocationX - i] - 1;
    }
  }

  if(fixTurn < savedSnakeLocationX.length) {
    fixTurn++;
  }
  else if(fixTurn === savedSnakeLocationX.length) {
    lastDirectionX = goX;
    lastDirectionY = goY;
  }
  console.log(fixTurn);
  */
 lastDirectionX.push(headPosition);
}

function snakeOutOfBounds(snakeX, snakeY) {
  if(snakeX > windowWidth || snakeY > windowHeight || snakeX < 0 || snakeY < 0) {
    backToBeginning(snakeX);
  }
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    backToBeginning(snakeX);
  }
  for(let i = 0; i < savedSnakeLocationY.length; i++) {
    backToBeginning(snakeX);
  }
}

function backToBeginning(snakeX) {
  savedSnakeLocationX = [2,1,0];
  savedSnakeLocationY = [0,0,0];
}

function keyPressed() {
  switch(keyCode) {
  case RIGHT_ARROW:
    if(goX !== -1) {
      goX = 1;
      goY = 0;
      fixTurn = 0;
    }
    break;
  case LEFT_ARROW:
    if(goX !== 1) {
      goX = -1;
      goY = 0;
      fixTurn = 0;
    }
    break;
  case UP_ARROW:
    if(goY !== -1) {
      goX = 0;
      goY = 1;
      fixTurn = 0;
    }
    break;
  case DOWN_ARROW:
    if(goY !== 1) {
      goX = 0;
      goY = -1;
      fixTurn = 0;
    }
    break;
  default:
    break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
