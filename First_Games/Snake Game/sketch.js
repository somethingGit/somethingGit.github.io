// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

var savedSnakeLocationX = [];
var savedSnakeLocationY = [];

//var snakeX = 0;
//var snakeY = 0;

var goX = 1;
var goY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //snakeX = windowWidth / 2 - width / 2;
  //snakeY = windowHeight / 2 - height / 2;
  frameRate(1);
  savedSnakeLocationX = [2,1,0];
  savedSnakeLocationY = [0,0,0];
}

function draw() {
  background(220);
  let totalSquaresWidth = 20;//prompt("Please input width: ");
  let totalSquaresHeight = 20;//prompt("Please input height: ");
  let gridWidth = windowWidth / totalSquaresWidth;
  let gridHeight = windowHeight / totalSquaresHeight;
  let snakeLength = 3;
  gridWidth = windowWidth / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  for(let x = 0; x < width; x += gridWidth) {
    for(let y = 0; y < height; y += gridHeight) {
      strokeWeight(1);
      stroke(160)
      fill(255);
      rect(x, y, gridWidth, gridHeight);
    }
  }
  //for(let x = snakeX; x < snakeX + snakeLength * gridWidth; x += gridWidth) {
  makeSnake(gridWidth, gridHeight);
  //}
  //snakeOutOfBounds(snakeX, snakeY);
}

function makeSnake(gridWidth, gridHeight) {
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    fill("green");
    rect(savedSnakeLocationX[i] * gridWidth, savedSnakeLocationY[i] * gridHeight, gridWidth, gridHeight);
  }
  normalMove(gridWidth, gridHeight);
}

function normalMove(gridWidth, gridHeight) {
  
  if(goX === 1) {
    //snakeX += gridWidth;
    for(let i = 0; i < savedSnakeLocationX.length; i++) {
      //savedSnakeLocationX[i] = savedSnakeLocationX[i -= 1];
      //savedSnakeLocationY[i] = savedSnakeLocationY[i -= 1];
      savedSnakeLocationX[i] = savedSnakeLocationX[i] + 1;
    }
    //savedSnakeLocationX[0] = (savedSnakeLocationX[savedSnakeLocationX.length] += gridWidth);
  }
  else if(goX === -1) {
    //snakeX += (gridWidth * -1);
    for(let i = 0; i < savedSnakeLocationX.length; i++) {
      //savedSnakeLocationX[i] = savedSnakeLocationX[i -= 1];
      //savedSnakeLocationY[i] = savedSnakeLocationY[i -= 1];
      savedSnakeLocationX[i] = savedSnakeLocationX[i] - 1;
      console.log(savedSnakeLocationX[i]);
    }
    //savedSnakeLocationX[0] = (savedSnakeLocationX[savedSnakeLocationX.length] += gridWidth * -1);
  }
  else if(goY === 1) {
    //snakeY += gridHeight;
    for(let i = 0; i < savedSnakeLocationY.length; i++) {
      //savedSnakeLocationX[i] = savedSnakeLocationX[i -= 1];
      //savedSnakeLocationY[i] = savedSnakeLocationY[i -= 1];
      savedSnakeLocationY[i] = savedSnakeLocationY[i] - 1;
    }
    //savedSnakeLocationY[0] = (savedSnakeLocationY[savedSnakeLocationY.length] += gridHeight);
  }
  else if(goY === -1) {
    //snakeY += (gridHeight * -1);
    for(let i = 0; i < savedSnakeLocationY.length; i++) {
      //savedSnakeLocationX[i] = savedSnakeLocationX[i -= 1];
      //savedSnakeLocationY[i] = savedSnakeLocationY[i -= 1];
      savedSnakeLocationY[i] = savedSnakeLocationY[i] + 1;
    }
    //savedSnakeLocationY[0] = (savedSnakeLocationY[savedSnakeLocationY.length] += gridHeight * -1);
  }
}

/*
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
  snakeX = windowWidth/2 - width / 2;
  snakeY = windowHeight / 2 - height / 2;
} */

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    if(goX !== -1) {
      goX = 1;
      goY = 0;
    }
  } 
  else if(keyCode === LEFT_ARROW) {
    if(goX !== 1) {
      goX = -1;
      goY = 0;
    }
  }
  else if(keyCode === UP_ARROW) {
    if(goY !== -1) {
      goX = 0;
      goY = 1;
    }
  }
  else if(keyCode === DOWN_ARROW) {
    if(goY !== 1) {
      goX = 0;
      goY = -1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
