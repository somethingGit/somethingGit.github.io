// Reversi
// Jason
// October 31 2022
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let squaresSize;
let totalSquares = 8*8;
let player = 1;
let gridClicked;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squaresSize = height / sqrt(totalSquares);
  makeGrid(totalSquares, squaresSize);
  grid[27][2] = 1;
  grid[28][2] = -1;
  grid[35][2] = -1;
  grid[36][2] = 1;
}

function makeGrid(totalSquares, squaresSize) {
  for(let x = 0; x < sqrt(totalSquares); x++) {
    for(let y = 0; y < sqrt(totalSquares); y++) {
      grid.push([x * squaresSize, y * squaresSize, 0]);
    }
  }
}

function draw() {
  background(220);
  if(height < width) {
    displayGrid();
    if(shouldShowToken()) {
      tokenDisplay();
    }
  }
  else {
    fill("black");
    text("Please make your window width larger", width / 2 - textWidth("Please make your window width larger") / 2, height / 2 - (textAscent("Please make your window width larger") + textDescent("Please make your window width larger")) / 2);
  }
}

let shouldShowToken = () => mouseX >= grid[8][0] && mouseY >= grid[8][1] && mouseX < grid[grid.length-1 - 8][0] && mouseY < grid[grid.length - 1 - 8][0];

function displayGrid() {
  for(let i = 0; i < grid.length; i++) {
    fill("white");
    square(grid[i][0], grid[i][1], squaresSize);
    if(grid[i][2] === 1) {
      fill("red");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
    else if(grid[i][2] === -1) {
      fill("black");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

function tokenDisplay() {
  for(let i = grid.length - 1; i > 0; i--) {
    if(shouldDisplay(i)) {
      if(player === 1) {
        fill("red");
      }
      else if(player === -1) {
        fill("black");
      }
      gridClicked = i;
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

let shouldDisplay = (i) => whichGridIsMouse(i) && isThereToken(i) && mouseInPlayers(i) && (isVertical(i) || isHorizontal(i));

let whichGridIsMouse = (i) => mouseX >= grid[i][0] && mouseY >= grid[i][1] && mouseX <= grid[i][0] + squaresSize && mouseY <= grid[i][1] + squaresSize;

let isThereToken = (i) => grid[i - 1][2] === player * -1 || grid[i - 8][2] === player * -1 || grid[i + 8][2] === player * -1 || grid[i + 1][2] === player * -1;

let mouseInPlayers = (i) => grid[i][2] !== player && grid[i][2] !== player * -1;

function isVertical(x) {
  for(let i = lowestMultipleOfEight(x); i < lowestMultipleOfEight(x) + sqrt(totalSquares); i++) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

function lowestMultipleOfEight(x) {
  x = floor(x);
  while(x % 8 !== 0) {
    x--;
    if(x % 8 === 0) {
      return x;
    }
  }
  return x;
}

function isHorizontal(x) {
  for(let i = lowestPossible(x); i < totalSquares; i+=8) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

function lowestPossible(x) {
  while(x >= 8) {
    x -= 8;
    if(x < 8) {
      return x;
    }
  }
  return x;
}

function repairOnWindowSizeChange() {
  let i = 0;
  squaresSize = height / sqrt(totalSquares);
  for(let x = 0; x < sqrt(totalSquares); x++) {
    for(let y = 0; y < sqrt(totalSquares); y++) {
      grid.push([x * squaresSize, y * squaresSize, grid[i][2]]);
      i++;
    }
  }
  grid.reverse();
  for(let j = 0; j < totalSquares; j++) {
    grid.pop();
  }
  grid.reverse();
}

function mouseClicked() {
  if(mouseInPlayers(gridClicked) && isThereToken(gridClicked)) {
    if(isItBelow()) {
      let count = gridClicked;
      while(grid[count][2] !== player) {
        grid[count][2] = player;
        count++;
      }
    }
    else if(isVertical(gridClicked)) {
      if(!isItBelow()) {
        let count = gridClicked;
        while(grid[count][2] !== player) {
          grid[count][2] = player;
          count--;
        }
      }
    }
    else if(isHorizontal(gridClicked)) {
      if(isClickRight()) {
        let count = gridClicked;
        while(grid[count][2] !== player) {
          grid[count][2] = player;
          count += 8;
        }
      }
      else if(!isClickRight()) {
        let count = gridClicked;
        while(grid[count][2] !== player) {
          grid[count][2] = player;
          count -= 8;
        }
      }
    }
    player *= -1;
  }
}

function isItBelow() {
  for(let i = gridClicked; i < nextMultipleOfEight(gridClicked); i++) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

function nextMultipleOfEight(x) {
  let count = x + sqrt(totalSquares);
  while (x < count) {
    x++;
    if(x % 8 === 0) {
      return x;
    }
  }
}

function isClickRight() {
  for(let i = gridClicked; i < grid.length - sqrt(totalSquares); i += sqrt(totalSquares)) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repairOnWindowSizeChange();
}
