// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle();
}

function drawCircle() {
  for(let x = 0; x < mouseX; x++) {
    circle(x, 50, 50);
    x = mouseX / width;
  }
}
