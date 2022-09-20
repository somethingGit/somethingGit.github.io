// Chess Board
// Jason Tse
// Sept 19


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawChessBoard();
}

function drawChessBoard() {
  let lengthX = width / 8;
  let lengthY = height / 8;
  let color = "black";
  for(let x = 0; x < width; x += lengthX) {
    for(let y = 0; y < height; y += lengthY) {
      if(color === "black") {
        fill(color);
        rect(x, y, lengthX, lengthY);
        color = "white";
      }
      else if(color === "white") {
        fill(color);
        rect(x, y, lengthX, lengthY);
        color = "black";
      }
    }
    if(color === "black") {
      color = "white";
    }
    else {
      color = "black";
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
