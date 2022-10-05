let grid = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
];

let gridLength = grid.length;

let a = 5, b = 5, c = 5, d = 5, e = 5, f = 5;
let w, x, y, diameter, dif, column1, column2, column3, column4, column5, column6, row1, row2, row3, row4, row5, row6;
let player;

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

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  /*
  frameRate(fr);
  */
}

function draw() {
  // put drawing code here
  background(220);
  makeGrid();
}

function makeGrid() {
  //Sets the shape parameters
  w = height / 1.5;
  x = width / 2 - w / 2;
  y = height / 2 - w / 2;
  diameter = w / 10;
  dif = w / 14 * 2;
 
  //Sets up the graphic columns and rows.
  column1 = x + dif;
  column2 = column1 + dif;
  column3 = column2 + dif;
  column4 = column3 + dif;
  column5 = column4 + dif; 
  column6 = column5 + dif;
 
  row1 = y + dif;
  row2 = row1 + dif;
  row3 = row2 + dif;
  row4 = row3 + dif;
  row5 = row4 + dif;
  row6 = row5 + dif;
 
  let i = 0;

  fill(color(0, 0, 225));
  square(x, y, w);
 
  for(let y1 = y + dif; y1 <= y + w - dif; y1 += dif) {
    for(let x1 = x + dif; x1 <= x + w - dif; x1 += dif) {
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
  makeMouseHover();
}

function makeMouseHover() {
  if(mouseX > x && mouseX < x + w && mouseY < y + w) {
    let c = playerColor();

    if(mouseX <= column1 + dif / 2) {
      fill(c);
      circle(column1, y - 30, diameter);
    }
    else if(mouseX <= column2 + dif / 2) {
      fill(c);
      circle(column2, y - 30, diameter);
    }
    else if(mouseX <= column3 + dif / 2) {
      fill(c);
      circle(column3, y - 30, diameter);
    }
    else if(mouseX <= column4 + dif / 2) {
      fill(c);
      circle(column4, y - 30, diameter);
    }
    else if(mouseX <= column5 + dif / 2) {
      fill(c);
      circle(column5, y - 30, diameter);
    }
    else if(mouseX <= column6 + dif /2) {
      fill(c);
      circle(column6, y - 30, diameter);
    }
  }
}







function mouseClicked() {
  connectFourPlay();
}

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
  placeToken();
}

function placeToken() {
  if(mouseX <= column1 + diameter && mouseX >= column1 - dif) {
    let gridCoordinates = 0;
    if(gridCoordinates + a < gridLength) {
      grid[gridCoordinates + a * 6] = player;
      a--;
      console.log("Column 1");
      //tokenDrop(column1);
    }
  }
  else if(mouseX <= column2 + diameter + dif / 4 && mouseX >= column2 - dif / 2) {
    let gridCoordinates = 1;
    if(gridCoordinates + b < gridLength) {
      grid[gridCoordinates + b * 6] = player;
      b--;
      //tokenDrop(column2);
    }
  }
  else if(mouseX <= column3 + diameter + dif / 4 && mouseX >= column3 - dif / 2) {
    let gridCoordinates = 2;
    if(gridCoordinates + c < gridLength) {
      grid[gridCoordinates + c * 6] = player;
      c--;
      //tokenDrop(column3);
    }
  }
  else if(mouseX <= column4 + diameter + dif / 4 && mouseX >= column4 - dif / 2) {
    let gridCoordinates = 3;
    if(gridCoordinates + d < gridLength) {
      grid[gridCoordinates + d * 6] = player;
      d--;
      //tokenDrop(column4);
    }
  }
  if(mouseX <= column5 + diameter + dif / 4 && mouseX >= column5 - dif / 2) {
    let gridCoordinates = 4;
    if(gridCoordinates + e < gridLength) {
      grid[gridCoordinates + e * 6] = player;
      e--;
      console.log("Played");
      //tokenDrop(column5);
    }
  }
  else if(mouseX <= column6 + diameter + dif / 4 && mouseX >= column6 - dif / 2) {
    let gridCoordinates = 5;
    if(gridCoordinates + f < gridLength) {
      grid[gridCoordinates + f * 6] = player;
      f--;
      //tokenDrop(column6);
    }
  }
  checkForHorizontalWin();
  console.log(grid);
}

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
  }
}

function tokenDrop(column, row) {
  let y = height / 2 - w / 2;
  let startDropLocation = y + 30;
  while(startDropLocation >= row) {
    fill(playerColor());
    circle(column, startDropLocation, diameter);
    startDropLocation--;
  }
  makeTokens();
}

function makeTokens() {

}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}