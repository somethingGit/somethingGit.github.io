let grid = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 
];

let gridLength = grid.length;
console.log(gridLength);

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;

let player = 0;

let w, x, y, diameter, dif, column1, column2, column3, column4, column5, column6, row1, row2, row3, row4, row5, row6;

function playerColor() {
  if(player === 1) {
    return color(255, 255, 0);
  }
  else if(player === -1) {
    return color(255, 0, 0);
  }
  else {
    return color(255, 255, 0);
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
  resizeCanvas(windowWidth, windowHeight);
  
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

  fill(color(0, 0, 225));
  square(x, y, w);

  for(let x1 = x + dif; x1 < width - x - dif; x1+= dif) {
    for(let y1 = y + dif; y1 <= height - y - dif; y1 += dif) {
      if(grid === 1) {
        fill("yellow");
        circle(x1, y1, diameter);
      }
      else if(grid === -1) {
        fill(0);
        circle(x1, y1, diameter);
      }
      else {
        fill(255);
        circle(x1, y1, diameter);
      }
    }
  }

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

function mouseReleased() {
  connectFourPlay(column1, column2, column3, column4, column5, column6);
}

function connectFourPlay(column1, column2, column3, column4, column5, column6) {
  if(player === 1) {
    player = -1;
  }
  else if(player === -1) {
    player = 1;
  }
  else {
    player = 1;
  }
  placeToken(column1, column2, column3, column4, column5, column6);
}

function placeToken(column1, column2, column3, column4, column5, column6) {
  if(mouseX <= column1) {
    let gridCoordinates = 0;
    if(gridCoordinates + a < gridLength) {
      grid[gridCoordinates + a * 6];
      a++;
      tokenDrop(column1);
    }
  }
  else if(mouseX <= column2) {
    let gridCoordinates = 1;
    if(gridCoordinates + b < gridLength) {
      grid[gridCoordinates + b * 6];
      b++;
      tokenDrop(column2);
    }
  }
  else if(mouseX <= column3) {
    let gridCoordinates = 2;
    if(gridCoordinates + c < gridLength) {
      grid[gridCoordinates + c * 6];
      c++;
      tokenDrop(column3);
    }
  }
  else if(mouseX <= column4) {
    let gridCoordinates = 3;
    if(gridCoordinates + d < gridLength) {
      grid[gridCoordinates + d * 6];
      d++;
      tokenDrop(column4);
    }
  }
  if(mouseX <= column5) {
    let gridCoordinates = 4;
    if(gridCoordinates + e < gridLength) {
      grid[gridCoordinates + e * 6];
      e++;
      tokenDrop(column5);
    }
  }
  else if(mouseX <= column6) {
    let gridCoordinates = 5;
    if(gridCoordinates + f < gridLength) {
      grid[gridCoordinates + f * 6];
      f++;
      tokenDrop(column6);
    }
  }
  else {
    if(player === 1) {
      player = -1;
    }
    else if(player === -1) {
      player = 1;
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
  draw();
}
