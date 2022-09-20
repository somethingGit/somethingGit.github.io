// Project Title
// Your Name
// Date
//
// Extra for Experts:
//I decided to add the mouse wheel as a way of zooming in and zooming out.


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
}

function mouseClicked() {
  square(mouseX - 50 / 2, mouseY - 50 / 2, 50);
}