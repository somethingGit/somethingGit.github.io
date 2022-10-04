// Snake
// Jason
// October 03, 2022
//
// Extra for Experts:
// I added sound to this project.

let savedSnakeLocationX = [], savedSnakeLocationY = [];
let goX = 1, goY = 0;
let fixTurn;
let lastDirectionX = 1, lastDirectionY = 0;
let headPosition = [2, 0];
let hasMoved = true;
let fruitX, fruitY;
let thereIsFruit = false;
let totalSquaresWidth = 50, totalSquaresHeight = 50;
let snakeLength = 0;
let score = 0;
let ai = false;
let gamePause = false;
let sideBarX, sideBarY;
let fr = 3;
let aiGoAround = false;
let oddOrEven;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  savedSnakeLocationX = [0,1];
  savedSnakeLocationY = [0,0];
  fixTurn = savedSnakeLocationX.length;
  sideBarX = windowWidth / 5;
  sideBarY = 0;
  if(totalSquaresHeight % 2 === 0) {
    oddOrEven = true;
  }
  else if(totalSquaresHeight % 2 === 1) {
    oddOrEven = false;
  }
}

function draw() {
  background(220);
  isGameDone();
}

let isGameDone = () => {
  if(snakeLength - 1 === totalSquaresHeight * totalSquaresWidth) {
    gamePause = true;
    drawSidebar();
  }
  else {
    drawSidebar();
  }
  drawSidebar();
};

let gameWin = () => {
  text();
};

let drawSidebar = () => {
  fill("white");
  rect(width - sideBarX, 0, sideBarX, height);
  makeGrid();
};

let makeGrid = () => {
  sideBarX = windowWidth / 5;
  let gridWidth = (width - sideBarX) / totalSquaresWidth;
  let gridHeight = height / totalSquaresHeight;
  snakeLength = savedSnakeLocationX.length + 1;
  gridWidth = (windowWidth - sideBarX) / totalSquaresWidth;
  gridHeight = windowHeight / totalSquaresHeight;
  for(let x = 0; x < width - sideBarX; x += gridWidth) {
    for(let y = 0; y <= height; y += gridHeight) {
      strokeWeight(1);
      stroke(160);
      fill(255);
      rect(x, y, gridWidth, gridHeight);
    }
  }
  addScore(gridWidth, gridHeight);
};

let addScore = (gridWidth, gridHeight) => {
  let textPx = 32;
  fill("black");
  textSize(textPx);
  text(score - 1, width - sideBarX / 2 + textPx / 2);
  makeSnake(gridWidth, gridHeight);
};

let makeSnake = (gridWidth, gridHeight) => {
  fill("black");
  rect(headPosition[0] * gridWidth, headPosition[1] * gridHeight, gridWidth, gridHeight);
  for(let i = 0; i < savedSnakeLocationX.length; i++) {
    fill("orange");
    rect(savedSnakeLocationX[i] * gridWidth, savedSnakeLocationY[i] * gridHeight, gridWidth, gridHeight);
  }
  if(gamePause === false) {
    addFruit(gridWidth, gridHeight);
  }
  else if(gamePause === true) {
    addFruit(gridWidth, gridHeight);
  }
};

function addFruit(gridWidth, gridHeight) {
  if(thereIsFruit === false) {
    randomFruitLocation();
  }
  drawFruit(gridWidth, gridHeight);
}


let drawFruit = (gridWidth, gridHeight) => {
  fill("red");
  if(fruitX * gridWidth > width || fruitY * gridHeight > height) {
    addFruit();
  }
  rect(fruitX * gridWidth, fruitY * gridHeight, gridWidth, gridHeight);
  if(ai === false) {
    normalMove(gridWidth, gridHeight);
  }
  else if(ai === true) {
    aiMove(gridWidth, gridHeight);
  }
};

function aiMove(gridWidth, gridHeight) {
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
    }*/
  }
  normalMove(gridWidth, gridHeight);
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
    storeItem("snakeScore", score - 1);
    
  }
  console.log("I am called", headPosition[0], headPosition[1], aiGoAround);
  snakeOutOfBounds(gridWidth, gridHeight);
}

function snakeOutOfBounds(gridWidth, gridHeight) {
  if(headPosition[0] > totalSquaresWidth || headPosition[0] < 0 || headPosition[1] > totalSquaresHeight || headPosition[1] < 0) {
    backToBeginning();
  }
  for(let i = -1; i < savedSnakeLocationX.length + 1; i++) {
    if(headPosition[0] === savedSnakeLocationX[i] && headPosition[1] === savedSnakeLocationY[i]) {
      backToBeginning();
    }
  }
}

function backToBeginning() {
  console.log(headPosition);
  savedSnakeLocationX = [0,1];
  savedSnakeLocationY = [0,0];
  headPosition = [2, 0];
  goX = -1;
  goY = 0;
  score = 0;
  thereIsFruit = false;
  aiGoAround = false;
}

function randomFruitLocation() {
  fruitX = floor(random(totalSquaresWidth));
  fruitY = floor(random(totalSquaresHeight));
  if(fruitX < 0) {
    fruitX *= -1;
  }
  if(fruitY < 0) {
    fruitY *= -1;
  }
  score++;
  for(let i = 0; i < snakeLength; i++) {
    if(fruitX === savedSnakeLocationX[i] && fruitY === savedSnakeLocationY[i] || headPosition[0] === fruitX && headPosition[1] === fruitY) {
      randomFruitLocation();
    }
  }
  thereIsFruit = true;
}

function keyPressed() {
  if(ai === false) {
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
      if(gamePause === true) {
        gamePause = false;
      }
      else if(gamePause === false) {
        gamePause = true;
      }
      console.log(gamePause);
      break;
    default:
      break;
    }
  }
}

let windowResized = () => resizeCanvas(windowWidth, windowHeight);
