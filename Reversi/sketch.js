function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(1)
  const BOARDSQUARE = 8;
  background(255);
  createBoard(min(width, height), BOARDSQUARE); 
}

function createBoard(winSize, BOARDSQUARE) {
  fill("#093a0d");
  let squareSize = winSize / (BOARDSQUARE + 1);
  boardSize = squareSize * BOARDSQUARE;
  sideBar = width - boardSize;
  for (let i = 0; i < BOARDSQUARE; i++){
    for (let j = 0; j < BOARDSQUARE; j++){
      rect(squareSize * i + boardSize / 2, j * squareSize + (height - boardSize) / 2, squareSize, squareSize);
    }
  }
  console.log(squareSize * BOARDSQUARE + boardSize / 2 === width);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}