// Connect Four with six columns
// Jason
// Sept 04 2022
//
// Extra for Experts:
// - There is not extra for experts in this project.

//The below are the global variables. 
let grid = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
];

let gridLength = grid.length;

let a, b, c, d, e, f, fr, w, x, y, diameter, dif, column1, column2, column3, column4, column5, column6, row1, row2, row3, row4, row5, row6, player, win;
const gridHeight = 6;

//Setup function sets up canvas, framerate, and variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  setStartGlobalVariables();
  frameRate(fr);
}

function setStartGlobalVariables() {
  //Sets the shape parameters
  w = height / 1.5;
  diameter = w / 10;
  dif = w / 14 * 2;
  x = width / 2 - w / 2;
  y = height / 2 - w / 2;
  
  //Sets up the graphic columns and rows.
  a = 5, b = 5, c = 5, d = 5, e = 5, f = 5, win = false;
  column1 = x + dif, column2 = column1 + dif, column3 = column2 + dif;
  column4 = column3 + dif;
  column5 = column4 + dif; 
  column6 = column5 + dif;
  row1 = y + dif;
  row2 = row1 + dif;
  row3 = row2 + dif;
  row4 = row3 + dif;
  row5 = row4 + dif;
  row6 = row5 + dif;
}
//Draw loop sets background and calls start function.
function draw() {
  // put drawing code here
  background(220);
  start();
}
//Start function
function start() {
  //Checks if someone has won yet.
  makeGrid(); 
  makeMouseHover();
}
//Makes a grid
function makeGrid() {
  x = width / 2 - w / 2;
  y = height / 2 - w / 2;
  //sets iterable variable
  let i = 0;
  //Sets colors of main shape
  fill(color(0, 0, 225));
  square(x, y, w);
  //Uses a loop to find the color based off the number of list grid and then sets a circle position.
  for(let y1 = y + dif; y1 < y + w; y1 += dif) {
    for(let x1 = x + dif; x1 < x + w; x1 += dif) {
      if(grid[i] === 0) {
        fill("white");
      }
      else if(grid[i] === 1) {
        fill("yellow");
      }
      else if(grid[i] === -1) {
        fill("red");
      }
      i++;
      circle(x1, y1, diameter);
    }
  }
}
//Finds the current mouse position and then displays where the token will go based off that mouse position. It also uses the current player color.
function makeMouseHover() {
  if(mouseX > x && mouseX < x + w && mouseY < y + w) {
    let c = playerColor();
    
    if(mouseX < column1 + dif / 2) {
      fill(c);
      circle(column1, y - 50, diameter);
    }
    else if(mouseX < column2 + dif / 2) {
      fill(c);
      circle(column2, y - 50, diameter);
    }
    else if(mouseX < column3 + dif / 2) {
      fill(c);
      circle(column3, y - 50, diameter);
    }
    else if(mouseX < column4 + dif / 2) {
      fill(c);
      circle(column4, y - 50, diameter);
    }
    else if(mouseX < column5 + dif / 2) {
      fill(c);
      circle(column5, y - 50, diameter);
    }
    else if(mouseX < column6 + dif / 2) {
      fill(c);
      circle(column6, y - 50, diameter);
    }
  }
}
//Check for if mouse is clicked and if there is room for a token in the column you have clicked.
function mouseClicked() {
  if(win !== true && notTokenOverflow() === false) {
      console.log(a,b,c,d,e,f);
      connectFourPlay();
      placeToken();
      checkForHorizontalWin();
  }
  console.log(notTokenOverflow());
  console.log(grid);
}
//This one line function returns true if token is not overflowing
let notTokenOverflow = () => {return mouseX < column1 + dif / 2 && a < 0 || mouseX < column2 + dif / 2 && mouseX >= column2 + dif / 2 && b < 0 || mouseX < column3 + dif / 2 && mouseX >= column3 + dif / 2 && c < 0 || mouseX < column4 + dif / 2 && mouseX >= column4 + dif / 2 && d < 0 || mouseX < column5 + dif / 2 && mouseX >= column5 + dif / 2 && e < 0 || mouseX < column6 + dif / 2 && mouseX >= column6 + dif / 2 && f < 0};
//Changes the current player based upon the last player.
function connectFourPlay() {
  if(player === 1) {
    player = -1;
  }
  else if(player === -1) {
    player = 1;
  }
  else {
    player = 1;
  }
}
//Places a token in the column you have clicked on
function placeToken() {
  let gridCoordinates;
  if(mouseX < column1 + dif / 2) {
    gridCoordinates = 0;
    if(gridCoordinates + a < gridLength) {
      grid[gridCoordinates + a * 6] = player;
      a--;
    }
  }
  else if(mouseX < column2 + dif / 2) {
    gridCoordinates = 1;
    if(gridCoordinates + b < gridLength) {
      grid[gridCoordinates + b * 6] = player;
      b--;
    }
  }
  else if(mouseX < column3 + dif / 2) {
    gridCoordinates = 2;
    if(gridCoordinates + c < gridLength) {
      grid[gridCoordinates + c * 6] = player;
      c--;
    }
  }
  else if(mouseX < column4 + dif / 2) {
    gridCoordinates = 3;
    if(gridCoordinates + d < gridLength) {
      grid[gridCoordinates + d * 6] = player;
      d--;
    }
  }
  else if(mouseX < column5 + dif / 2) {
    gridCoordinates = 4;
    if(gridCoordinates + e < gridLength) {
      grid[gridCoordinates + e * 6] = player;
      e--;
    }
  }
  else if(mouseX < column6 + dif / 2) {
    gridCoordinates = 5;
    if(gridCoordinates + f < gridLength) {
      grid[gridCoordinates + f * 6] = player;
      f--;
    }
  }
}
//Code that will no be included in the final version. May be included in a future version upon improvement of code.
/*
function checkForHorizontalWin() {
  let player1Win = 0;
  let player2Win = 0;
  for(let row = 0; row < (gridLength - 1) / 6; row++) {
    if(grid[row] === 1) {
      player1Win++;
      player2Win = 0;
    }
    else if(grid[row] === -1) {
      player2Win++;
      player1Win = 0;
    }
    if(player1Win === 4 || player2Win === 4) {
      win = true;
      break;
    }
  }
}
*/
//This function sets the color of player.
function playerColor() {
  if(player === -1) {
    return color("yellow");
  }
  else if(player === 1) {
    return color("red");
  }
  else {
    return color("yellow");
  }
}