// Final Programming Challenge - Ball OOP
// Jason Tse
// 01/27/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

/*
class Explosion {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(10);
    this.dx = random(50);
    this.dy = random(50);
  }
  
  display() {
    circle(this.x, this.y, this.diameter);  
  }
  
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
*/

class Ball {
  constructor(x, y, diameter) {
    this.x = x; 
    this.y = y;
    this.diameter = diameter;
    this.dx = random(-2, 2);
    this.dy = random(-2, 2);
    this.color = color(random(255), random(255), random(255), random(255));
    if(this.dx === 0) {
      this.dx++;
    }
    if(this.dy === 0) {
      this.dy++;
    }
  }
  
  display() {
    fill(this.color);
    circle(this.x, this.y, 50);
  }
  
  move() {
    this.x += this.dx;
    this.y += this.dy;
    if(this.x >= width - this.diameter / 2) {
      this.dx *= -1;
      this.x = width - this.diameter / 2 - 1;
    }
    if(this.x <= 0 + this.diameter / 2) {
      this.dx *= -1;
      this.x = 0 + this.diameter / 2 + 1;
    }
    if(this.y >= height - this.diameter / 2) {
      this.dy *= -1;
      this.y = height - this.diameter / 2 - 1;
    }
    if(this.y <= 0 + this.diameter / 2) {
      this.dy *= -1;
      this.y = 0 + this.diameter / 2 + 1;
    }
  }
  
  isPressed() {
    return dist(mouseX, mouseY, this.x, this.y) < this.diameter / 2 ? true : false;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 5; i++) {
    ballArray.push(new Ball(random(width), random(height), random(50)))
  }
}

function draw() {
  background(220);
  for(let i = 0; i < ballArray.length; i++) {
    ballArray[i].display();
    ballArray[i].move();
  }
}

function keyPressed() {
  ballArray.push(new Ball(random(width), random(height), random(50)));  
}

function mousePressed() {
  for(let i = 0; i < ballArray.length; i++) {
    if(ballArray[i].isPressed()) {
      ballArray.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
