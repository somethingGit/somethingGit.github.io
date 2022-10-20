// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circleArray = [];

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    diameter: random(50,100), 
    time: random(500),
    randomColor: color(random(255), random(255), random(255), random(255))
  };
  circleArray.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  makeCircles();
}

function makeCircles() {
  for(let i = 0; i < circleArray; i++) {
    circle(circleArray[i.x], circleArray[i.y], circleArray[i.diameter]);
    noise(circleArray.time) * width;
    circleArray.time += 0.1;
    fill(circleArray[i.randomColor]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}