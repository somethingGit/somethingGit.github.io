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
    this.transparency -= random(1);
    this.color = color(this.r,this.g,this.b,this.transparency);
    if(this.transparency < 0 || this.x < 0 - this.diameter || this.x > width + this.diameter || this.y < 0 - this.diameter || this.y > height + this.diameter) {
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
  background(255);
  for(let i = 0; i < fireWorkArray.length; i++) {
    fireWorkArray[i].move();
    fireWorkArray[i].display();
    fireWorkArray[i].colorUpdate();
  }
  console.log(fireWorkArray);
}

function mouseReleased() {
  makeFireWorks();
}

function makeFireWorks() {
  for(let i = 0; i < 125; i++) {
    let particles = new Fireworks(mouseX, mouseY, i);
    fireWorkArray.push(particles);
  }
}
