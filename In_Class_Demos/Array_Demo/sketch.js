// Array Demo
// Your Name
// 10/18/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circleArray = [];
let diameter = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  makeCircle();
}

function makeCircle() {
  if(circleArray.length > 0) {
    for(let i = 0; i < circleArray.length; i += 6) {
      fill(circleArray[i + 2], circleArray[i + 3], circleArray[i + 4], circleArray[i + 5]);
      circle(circleArray[i], circleArray[i + 1], diameter);
    }
  }
}

function mousePressed() {
  circleArray.push(mouseX);
  circleArray.push(mouseY);
  circleArray.push(random(255), random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}