// Project Title
// Your Name
// Date
//
// Extra for Experts:
//I decided to add the mouse wheel as a way of zooming in and zooming out.

let scrollbutton = 0;
let diameter = 50;
let x = windowWidth()/2;
let y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  fill("yellow");
  circle(windowWidth / 2, windowHeight / 2, diameter + scrollbutton);
  if(mouseIsPressed === true) {
    fill(0);
    square(mouseX - 5 / 2, mouseY - 5 / 2, 5);
  }
}

function mouseClicked() {
  
}

function mouseWheel(event) {
  scrollbutton += event.delta;
}