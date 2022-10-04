// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let num = 0;

let setup = () => createCanvas(windowWidth, windowHeight);

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  let length = windowWidth / 8;
  let squareColor = 0;
  let currentY = 0;
  background(220);
  for (let y = 0; y < height; y += length) {
    for (let x = 0; x < width; x += length) {
      if (squareColor === 0) {
        squareColor = 255;
      } 
      else if(squareColor === 255) {
        squareColor = 0;
      }
      
      fill(squareColor);
      square(x, y, length);
    }
    if(currentY < y && num === 2) {
      if (squareColor === 0) {
        squareColor = 255;
      } 
      else if(squareColor === 255) {
        squareColor = 0;
      }
    }
  }
}
