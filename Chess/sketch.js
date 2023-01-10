// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const chessSquares = 8;
let chessBoardLength;
let boardArray = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width > height) {
    chessBoardLength = height / chessSquares;
  }  
  else {
    chessBoardLength = width / chessSquares;
  }
  for(let x = 0; x < chessSquares * chessBoardLength; x += chessBoardLength) {
    for(let y = 0; y < chessSquares * chessBoardLength; y += chessBoardLength) {
      fill(0);
      square(x, y, chessBoardLength);
      if(boardColor === 0) {
        boardColor = 255;
      }
      else {
        boardColor = 0;
      }
    }
  }
}

function draw() {
  background(220);
  if(width > height) {
    chessBoardLength = height / chessSquares;
  }  
  else {
    chessBoardLength = width / chessSquares;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
