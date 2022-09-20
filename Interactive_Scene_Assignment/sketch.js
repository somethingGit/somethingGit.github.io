// Project Title
// Your Name
// Date
//
// Extra for Experts:
//I decided to add the mouse wheel as a way of zooming in and zooming out.

let scrollbutton = 0;
let diameter = 50;
let x = windowWidth()/2;
let y = windowHeight()/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circle(x, y, diameter + scrollbutton);
}

function mouseClicked() {
  square(mouseX - 50 / 2, mouseY - 50 / 2, 50 + scrollbutton);
}

function mouseWheel(event) {
  scrollbutton += event;
}