// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bubble = {
  x : 130, y : 100, diameter : 100, color : "red", xMove : 1, yMove : 1
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  makeBubble();
  moveBubble();
}

let makeBubble = () => {
  fill(bubble.color);
  circle(bubble.x, bubble.y, bubble.diameter);
};

let moveBubble = () => {
  bubble.x += random(-5, 5);
  bubble.y += random(-5, 5);
};