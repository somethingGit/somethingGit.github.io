// Fireworks
// Jason
// November 15 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireWorkArray = [];

class Fireworks {
  constructor(x, y, arrayLength) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.diameter = random(1, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.transparency = 255;
    this.color = color(this.r,this.g,this.b,this.transparency);
    this.arrayLocation = arrayLength;
  }
  
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
  
  colorUpdate() {
    this.transparency-=0.5;
    this.color = color(this.r,this.g,this.b,this.transparency);
    if(this.transparency === 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      fireWorkArray.pop(this.arrayLocation);
    }
  }
  
  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(let i = 0; i < fireWorkArray.length; i++) {
    fireWorkArray[i].move();
    fireWorkArray[i].display();
    fireWorkArray[i].colorUpdate();
  }
}

function mousePressed() {
  makeFireWorks();
}

function makeFireWorks() {
  for(let i = 0; i < 150; i++) {
    let particles = new Fireworks(mouseX, mouseY, fireWorkArray.length);
    fireWorkArray.push(particles);
  }
}