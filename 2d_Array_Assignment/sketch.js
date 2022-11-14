// Reversi
// Jason
// October 31 2022
// 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// These are all of the global variables in my game. They will
// determine the place of the grid, the square size, the total
// amount of square, the current plyer, the grid that was clicked
// the side bar width, and the 
let grid = [], squaresSize, totalSquares, player, gridClicked, whoWins, sideBarWidth, endScreenColor = [] /*, buttons = []*/;

// A test variable for the make button function.
// let checkVariable = false;

// This is the setup function. It will create a canvas as large
// as the window width and window height. It will then set the 
// values of the global variables and will setup the starting
// tokens. 
function setup() {
  createCanvas(windowWidth, windowHeight);
  totalSquares = 64;
  player = 1;
  squaresSize = height / sqrt(totalSquares);
  sideBarWidth = squaresSize * 2;
  whoWins = 0;
  makeGrid(totalSquares, squaresSize);
  grid[27][2] = 1;
  grid[28][2] = -1;
  grid[35][2] = -1;
  grid[36][2] = 1;
  endScreenColor.push(255);
  endScreenColor.push(255);
  endScreenColor.push(255);
  
  // This also has to do with my want to build a make button 
  // function. 
  //sideBarWidth = width - sqrt(totalSquares) * squaresSize;
}

// This function sets up the grid on game start. 
function makeGrid(totalSquares, squaresSize) {
  for(let x = 0; x < sqrt(totalSquares); x++) {
    for(let y = 0; y < sqrt(totalSquares); y++) {
      grid.push([x * squaresSize, y * squaresSize, 0]);
    }
  }
}

// Draw loop checks if window is too small. Then it calls other
// functions that will display a grid and determine if it should
// display a token.
function draw() {
  
  // Attempted to make a function that would make a button. 
  // if(checkVariable === true) {
  //   background(color(255,0,255));
  // }
  // else if(checkVariable === false) {
  //   background(220);
  // }
  // makeButton(width - 100, height - 100, 100, 100, checkVariable);
  
  if(height + sideBarWidth < width && !checkForWin()) {
    displayGrid();
    currentPlayer();
    if(shouldShowToken() && mouseX > 0 && mouseY > 0 && mouseX < sqrt(totalSquares) * squaresSize && mouseY < sqrt(totalSquares) * squaresSize) {
      tokenDisplay();
    }
  }
  else if (checkForWin()) {
    frameRate(1);
    background(color(random(100, 255),random(100, 255),random(100, 255)));
    fill(0);
    textSize(20);
    if(whoWins === 1) {
      text("Player One has Won!", width / 2 - textWidth("Player One has Won!") / 2, height / 2 - (textAscent("Player One has Won!") + textDescent("Player One has Won!")) / 2);
    }
    else if(whoWins === -1) {
      text("Player One has Won!", width / 2 - textWidth("Player Two has Won!") / 2, height / 2 - (textAscent("Player Two has Won!") + textDescent("Player Two has Won!")) / 2);
    } 
    else if(whoWins === "No Win") {
      text("There is a tie", width / 2 - textWidth("There is a tie") / 2, height / 2 - (textAscent("There is a tie") + textDescent("There is a tie")) / 2);
    }
  }
  else {
    background(255);
    fill(0);
    text("Please make your window width larger", width / 2 - textWidth("Please make your window width larger") / 2, height / 2 - (textAscent("Please make your window width larger") + textDescent("Please make your window width larger")) / 2);
  }
  winner();
}

//Checks if token should be shown.
let shouldShowToken = () => mouseX > grid[8][0] && mouseY > grid[8][1] && mouseX < grid[grid.length - 1][0] + squaresSize && mouseY < grid[grid.length - 1][1] + squaresSize;

// Sets up the grid.
function displayGrid() {
  for(let i = 0; i < grid.length; i++) {
    fill(255);
    square(grid[i][0], grid[i][1], squaresSize);
    if(grid[i][2] === 1) {
      fill("red");
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
    else if(grid[i][2] === -1) {
      fill(0);
      circle(grid[i][0] + squaresSize / 2, grid[i][1] + squaresSize / 2, squaresSize / 2);
    }
  }
}

function currentPlayer() {
  if(player === 1) {
    fill("red");
  }
  else if(player === -1) {
    fill(0);
  }
  circle(grid[grid.length - 1][0] + squaresSize + sideBarWidth / 2, grid[0][1] + squaresSize / 2, squaresSize / 2);
}

// This function diplays a token if it should.
function tokenDisplay() {
  for(let i = grid.length - 2; i > 0; i--) {
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

// Checks if a token should be displayed where the mouse is
// hovering over. 
let shouldDisplay = (i) => whichGridIsMouse(i) && mouseInPlayers(i) && (isVertical(i) && touchingOtherPlayerToken("Vertical", i) || isHorizontal(i) && touchingOtherPlayerToken("Horizontal", i) || isDiagonal(i) && touchingOtherPlayerToken("Diagonal", i));

// Return true; if mouse is currently in the array[i] of the
// grid array.
let whichGridIsMouse = (i) => mouseX >= grid[i][0] && mouseY >= grid[i][1] && mouseX < grid[i][0] + squaresSize && mouseY < grid[i][1] + squaresSize;

// Returns true if mouse is not on a player. Else it will return
// false. 
let mouseInPlayers = (i) => grid[i][2] !== player && grid[i][2] !== player * -1;

// Checks if place in grid is touching another player's token.
function touchingOtherPlayerToken(whichOption, i) {
  try {
    if(whichOption === "Vertical") {
      if(grid[i - 1][2] === player * - 1 || grid[i + 1][2] === player * -1) {
        return true;
      }
    }
    else if(whichOption === "Horizontal") {
      if(grid[i - 8][2] === player * -1 || grid[i + 8][2] === player * -1) {
        return true;
      }
    }
    else if(whichOption === "Diagonal") {
      if(grid[i - 7][2] === player * -1 || grid[i + 7][2] === player * -1) {
        return true;
      }
    }
    return false;
  }
  catch (err) {
    return false;
  }
}

// Looks for token in the same column.
function isVertical(x) {
  for(let i = lowestMultipleOfEight(x); i < lowestMultipleOfEight(x) + sqrt(totalSquares); i++) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

// Gets the lowest multiple of eight.
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

// Finds if there is a token in the same row as mouse click.
function isHorizontal(x) {
  for(let i = lowestPossible(x); i < totalSquares; i+=8) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

// Finds the lowest x can go without becoming negative.
function lowestPossible(x) {
  while(x >= 8) {
    x -= 8;
    if(x < 8) {
      return x;
    }
  }
  return x;
}

// Finds if there is another of the player's token diagonal
function isDiagonal(startNum) {
  try {
    for(let i = smallestDiagonal(startNum); i < grid.length - sqrt(totalSquares); i += 7) { 
      if(grid[i][2] === player) { 
        return true; 
      } 
    } 
    for(let i = largestDiagonal(startNum); i > grid.length; i -= 7) {
      if(grid[i][2] === player) {
        return true;
      }
    }
  } 
  catch (error) {
    return false;
  }
  return false;
}

// Goes to the lowest diagonal place
function smallestDiagonal(startNum) {
  let num = startNum;
  while (num > 0) {
    num -= 7;
    if (num < 0) {
      return num + 7;
    }
  }
  return num;
}

// Goes to the largest diagonal
function largestDiagonal(startNum) {
  //
  let num = startNum; 
  while(num < grid.length - 1) {
    num += 7;
    if (num > grid.length -1) {
      return num + 7;
    }
  }
  return num;
}

// This function on mouse click will check if it should
// call the activate move function which will place
// down the tokens.
function mouseClicked() {
  if(mouseInPlayers(gridClicked) && shouldShowToken()) {
    activateMove();
  }
  // for(let i = 0; i < buttons.length; i++) {
  //   if(checkForButtonClick(i)) {
  //     if(buttons[i][5] === false) {
  //       buttons[i][5] = true;
  //     }
  //     else if(buttons[i][5] === true) {
  //       buttons[i][5] = false;
  //     }
  //   }
  // }
}

function winner() {
  if(checkForWin()) {
    let playerOne = 0; 
    let playerTwo = 0; 
    for(let i = 0; i < grid.length; i++) {
      if(grid[i][2] === 1) {
        playerOne++;
      } 
      else if(grid[i][2] === -1) {
        playerTwo++;
      }
    }
    if(playerOne > playerTwo) {
      whoWins = 1;
    }
    else if(playerOne < playerTwo) {
      whoWins = -1;
    }
    else if(playerOne === playerTwo) {
      whoWins = "No Win";
    }
  }
}

// Checks if a token may be placed, then places the token/tokens.
// Lastly, it will change the player. 
function activateMove() {
  if(isVertical(gridClicked)) {
    if(!isItBelow() && grid[gridClicked - 1][2] === player * -1) {
      let count = gridClicked;
      while(grid[count][2] !== player) {
        grid[count][2] = player;
        count--;
      }
      player *= -1;
    }
    if(isItBelow() && grid[gridClicked + 1][2] === player * -1) {
      let count = gridClicked;
      while(grid[count][2] !== player) {
        grid[count][2] = player;
        count++;
      }
      player *= -1;
    }
  }
  if(isHorizontal(gridClicked)) {
    if(isClickRight() && grid[gridClicked + 8][2] === player * -1) {
      let count = gridClicked;
      while(grid[count][2] !== player) {
        grid[count][2] = player;
        count += 8;
      }
      player *= -1;
    }
    if(!isClickRight() && grid[gridClicked - 8][2] === player * -1) {
      let count = gridClicked;
      while(grid[count][2] !== player) {
        grid[count][2] = player;
        count -= 8;
      }
      player *= -1;
    }
  }
  //if(isDiagonal(gridClicked) && ) {
    
  //}
}



// Checks if the square the mouse clicked and the next
// token is above or below.
function isItBelow() {
  for(let i = gridClicked; i < nextMultipleOfEight(gridClicked); i++) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

// Finds the next multiple of eight.
function nextMultipleOfEight(x) {
  let count = x + sqrt(totalSquares);
  while (x < count) {
    x++;
    if(x % 8 === 0) {
      return x;
    }
  }
}

// Checks if the place the mouse clicked and the
// horizontal token is right or left. 
function isClickRight() {
  for(let i = gridClicked; i < grid.length - sqrt(totalSquares); i += sqrt(totalSquares)) {
    if(grid[i][2] === player) {
      return true;
    }
  }
  return false;
}

function checkForWin() {
  for(let i = 0; i < grid.length; i++) {
    if(grid[i][2] === 0) {
      return false;
    }
  }
  return true;
}

// This function was inteded to check if mouse is inside
// of a rectangle like a button. I don't have enough time
// to finish this function so in order to save the code
// for future use, I will comment it out. 
// function checkForButtonClick(i) {
//   if(buttons[i][0] < mouseX && buttons[i][0] + buttons[i][2] > mouseX && buttons[i][1] < mouseY && buttons[i][1] + buttons[i][3] > mouseY) {
//     return buttons[i][4];
//   }
// }

//This function resizes the canvas, then calls another 
//function that will resize the grid. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if(height < width) {
    repairOnWindowSizeChange();
  }
}

// Fixes the grid when the size of the windown is
// changed. 
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

//Remember to delete this debug code when finished with project
function getCurrentSquare() {
  for(let i = grid.length - 1; i > 0; i--) {
    if(mouseX >= grid[i][0] && mouseY >= grid[i][1] && mouseX <= grid[i][0] + squaresSize && mouseY <= grid[i][1] + squaresSize) {
      return i;
    }
  }
}

// This is the make button function that makes a button
// and then saves the results into an array as a 2d
// array. 
// function makeButton(x,y,w,h,changeVariable) {
//   buttons.push([x,y,w,h,buttons.length, changeVariable]);
//   rect(x,y,w,h);
// }
