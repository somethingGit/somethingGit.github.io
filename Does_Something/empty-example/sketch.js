let fr = 144;
let squareX = 10;
let squareY = 10;
let dx = 5;
let squareLength = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
}

function draw() {
  background(200);
  circle(mouseX, mouseY, 50);
  fill(color(100, 255, 100));
  square(squareX, squareY, squareLength);
  fill(color(190, 255, 255));
  squareX += dx; 
  if(squareX >= width - squareLength) {
    dx *= -1;
    fr = 1080;
  }
  else if(squareX == 0) {
    dx *= -1;
    fr = 1920;
  }
  frameRate(fr);
}
