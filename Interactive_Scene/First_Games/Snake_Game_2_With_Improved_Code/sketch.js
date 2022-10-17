// Snake Game
// Jason
// Sept 04 2022
//
// Extra for Experts:
// - I added the ability to resize the canvas based off the window size. I also made my own collision system. 
// Notes:
//Snake AI does not work at this current moment and will not be a part of my assignment. I am hpoing to continue this project even when over school
//Declares global let and const
let savedSnakeLocationX, savedSnakeLocationY, headPosition, goX, goY, fixTurn, lastDirectionX, lastDirectionY, hasMoved, fruitX, fruitY, thereIsFruit, totalSquaresWidth, totalSquaresHeight, snakeLength, score = 0, gamePause, sideBarX, sideBarY, fr, oddOrEven, lastTime, gridWidth, gridHeight;
const waitTime = 100000;
//let snakeHasMoved, snakeInPattern, ai, aiGoAround = false;
//Setup function sets up canvas and sets the global variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  totalSquaresWidth = 50, totalSquaresHeight = 50;
  fr = 5;
  frameRate(fr);
  goX = 1, goY = 0;
  //ai = false, snakeInPattern = false;
  savedSnakeLocationX = [totalSquaresWidth / 2 - 1, totalSquaresWidth / 2 - 2], savedSnakeLocationY = [totalSquaresHeight / 2, totalSquaresHeight / 2], headPosition = [totalSquaresWidth / 2, totalSquaresHeight / 2], headPosition = [2, 0];
  lastDirectionX = 1, lastDirectionY = 0;
  hasMoved = true;
  snakeLength = 0;
  thereIsFruit = false;
  score = 0;
  gamePause = false;
}
//This is the draw loop which sets background color and then calls the main function
function draw() {
  background(220);
  mainFunc();
}
//This is the main function where it will call all functions that display something to screen.
let mainFunc = () => {
  sideBarX = windowWidth / 5;
  gridWidth = (width - sideBarX) / totalSquaresWidth;
  gridHeight = height / totalSquaresHeight;
  snakeLength = savedSnakeLocationX.length + 1;
  gridWidth = (windowWidth - sideBarX) / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  //This will also be added in the future.
  /*
  if(snakeLength - 1 === totalSquaresHeight * totalSquaresWidth) {
    gamePause = true;
    gameWin();
  }
  */
  drawSidebar();
  makeGrid();
  addScore();
  makeSnake();
  addFruit();
  /*
  if(!gamePause) {
    addFruit();
  }
  if(ai === false) {
    falseAi();
  }
  else if(ai === true) {
    trueAi();
  }
  */
};
/*
let falseAi = () => {
  moveSnake();
};

let trueAi = () => {
  isSnakeOnItsWay();
};

let gameWin = () => {
  text("You Win!", width / sideBarX / 2, height / 2);
};
*/
//This draws a sidebar which holds the current player score.
let drawSidebar = () => {
  fill("white");
  rect(width - sideBarX, 0, sideBarX, height);
};
//Makes a grid.
let makeGrid = () => {
  for(let x = 0; x < width - sideBarX; x += gridWidth) {
    for(let y = 0; y <= height; y += gridHeight) {
      strokeWeight(1);
      stroke(160);
      fill(255);
      rect(x, y, gridWidth, gridHeight);
    }
  }
};
//Shows score in sidebar.
let addScore = () => {
  let textPx = 32;
  fill("black");
  textSize(textPx);
  text(score, width - sideBarX / 2 + textPx / 2, 50);
};
//Makes a snake.
let makeSnake = () => {
  fill("green");
  rect(headPosition[0] * gridWidth, headPosition[1] * gridHeight, gridWidth, gridHeight);
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    rect(savedSnakeLocationX[i] * gridWidth, savedSnakeLocationY[i] * gridHeight, gridWidth, gridHeight);
  }
};
//Adds a fruit
function addFruit() {
  if(thereIsFruit === false) {
    randomFruitLocation();
  }
  else {
    drawFruit();
  }
}
//Draws the fruit
let drawFruit = () => {
  //Sets fruit color to red
  fill("red");
  //Checks if the fruit position will be out of bounds.
  if(fruitX * gridWidth > width || fruitY * gridHeight > height) {
    thereIsFruit = false;
    addFruit();
  }
  //Makes the fruit
  rect(fruitX * gridWidth, fruitY * gridHeight, gridWidth, gridHeight);
  moveSnake();
};
/*
let isSnakeOnItsWay = () => {
  if(snakeInPattern === true) {
    aiMove();
  }
  else if(snakeInPattern === false) {
    snakeIsOnItsWay();
  }
};

let snakeIsOnItsWay = () => {
  if(goX === 0 || goX === -1) {
    goY = -1;
    goX = 0;
  }
  if(goY === -1 && goX === 0) {
    goY = 0;
    goX = -1;
  }
  if(headPosition[0] === 0) {
    goX = 0;
    goY = -1;
  }
  moveSnake();
};

let aiMove = () => {
  if(oddOrEven) {
    if(headPosition[1] === totalSquaresHeight - 1 && headPosition[0] === 1) {
      aiGoAround = true;
    }
    if(aiGoAround === false) {
      if(totalSquaresWidth - 1 === headPosition[0] && goX === 1 && goY === 0) {
        goX = 0;
        goY = -1;
      }
      else if(goX === 0 && goY === -1 && headPosition[0] === totalSquaresWidth - 1) {
        goX = -1;
        goY = 0;
      }
      else if(headPosition[0] === 1 && goX === -1) {
        goX = 0;
        goY = -1;
      }
      else if(goX === 0 && goY === -1 && headPosition[0] === 1) {
        goX = 1; 
        goY = 0;
      }
    }
    else if(aiGoAround === true && headPosition[0] === 0) {
      if(headPosition[0] === 0 && headPosition[1] === 0) {
        goX = 1;
        goY = 0;
        aiGoAround = false;
      }
      else {
        goX = 0;
        goY = 1;
      }
    }
  }
  else if(!oddOrEven) {
    if(headPosition[1] === totalSquaresHeight - 1 && totalSquaresWidth - 1 === headPosition[0]) {
      aiGoAround = true;
    }
    if(aiGoAround === false) {
      if(totalSquaresWidth - 2 === headPosition[0] && goX === 1 && goY === 0) {
        goX = 0;
        goY = -1;
      }
      else if(goX === 0 && goY === -1 && headPosition[0] === totalSquaresWidth - 2) {
        goX = -1;
        goY = 0;
      }
      else if(headPosition[0] === 0 && goX === -1) {
        goX = 0;
        goY = -1;
      }
      else if(goX === 0 && goY === -1 && headPosition[0] === 0) {
        goX = 1; 
        goY = 0;
      }
    }/*
    else if(aiGoAround === true && headPosition[0] === totalSquaresWidth - 1) {
      if(headPosition[0] > 0 && headPosition[1] === 0 && headPosition[0] !== 0) {
        goX = 1;
        goY = 0;
        aiGoAround = false;
      }
      else if(aiGoAround === true && headPosition[0] === totalSquaresWidth - 1 && headPosition[1] === totalSquaresHeight - 1){
        goX = 0;
        goY = 1;
      }
      else {
        goX = 1;
        goY = 0;
      }
    }
  }
};
*/
//Moves the snake based of keyboard input.
let moveSnake = () => {
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
  snakeEatFruit();
};
//Checks if snake eats fruit. If snake is eating fruit, then the fruit will appear elsewhere.
let snakeEatFruit = () => {
  if(headPosition[0] === fruitX && headPosition[1] === fruitY) {
    thereIsFruit = false;
    reverse(savedSnakeLocationX);
    append(savedSnakeLocationX, savedSnakeLocationX[savedSnakeLocationX.length] - gridWidth);
    reverse(savedSnakeLocationX);
    reverse(savedSnakeLocationY);
    append(savedSnakeLocationY, savedSnakeLocationY[savedSnakeLocationY.length] - gridHeight);
    reverse(savedSnakeLocationY);
    score++;
  }
  isSnakeOutOfBounds();
};
//Checks if the snakes head is out of bounds. 
let isSnakeOutOfBounds = () => {
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    if(headPosition[0] === savedSnakeLocationX[i] && headPosition[1] === savedSnakeLocationY[i]) {
      backToBeginning();
    }
  }
  if(headPosition[0] > totalSquaresWidth || headPosition[0] < 0 || headPosition[1] > totalSquaresHeight - 1 || headPosition[1] < 0) {
    backToBeginning();
  }
};
//Sends the snake back to the beginning if snake bumps into itself or a wall
let backToBeginning = () => {
  headPosition = [totalSquaresWidth / 2, totalSquaresHeight / 2];
  savedSnakeLocationX = [totalSquaresWidth / 2 - 1, totalSquaresWidth / 2 - 2];
  savedSnakeLocationY = [totalSquaresHeight / 2, totalSquaresHeight / 2];
  goX = 1;
  goY = 0;
  score = 0;
  thereIsFruit = false;
  //aiGoAround = false;
};
//Sets a random fruit position. If it is inside of the snake position, then it will get a new fruit position.
function randomFruitLocation() {
  fruitX = floor(random(totalSquaresWidth));
  fruitY = floor(random(totalSquaresHeight));
  if(fruitX < 0) {
    fruitX *= -1;
  }
  if(fruitY < 0) {
    fruitY *= -1;
  }
  for(let i = 0; i < snakeLength; i++) {
    if(fruitX === savedSnakeLocationX[i] && fruitY === savedSnakeLocationY[i] || headPosition[0] === fruitX && headPosition[1] === fruitY) {
      randomFruitLocation();
    }
  }
  thereIsFruit = true;
}
//Checks for key pressed and then sets the direction of snake. This is then locked in.
function keyPressed() {
  /*
  if(ai === false) {
  }
  */
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
  default:
    break;
  }
}
//This function will resize the canvas when it detects a resizing of the window.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}