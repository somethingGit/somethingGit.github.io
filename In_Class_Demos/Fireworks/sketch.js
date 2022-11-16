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
  }
  
  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }
  
  removeParticle() {
    if(this.transparency <= 0 || this.x < 0 - this.diameter || this.x > width + this.diameter || this.y < 0 - this.diameter || this.y > height + this.diameter) {
      return true;
    }
    else {
      return false;
    }
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let i = fireWorkArray.length; i > 0; i--) {
    if(fireWorkArray[i].removeParticle()) {
      fireWorkArray.splice(1,1);
    }
    else {
      fireWorkArray[i].move();
      fireWorkArray[i].display();
      fireWorkArray[i].colorUpdate();
    }
  }
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

function keyPressed() {
  makeRandomFireWorks();
}

function makeRandomFireWorks() {
  let randomWidth = random(width);
  let randomHeight = random(height);
  for(let i = 0; i < 125; i++) {
    let particles = new Fireworks(randomWidth, randomHeight, i);
    fireWorkArray.push(particles);
  }
}
