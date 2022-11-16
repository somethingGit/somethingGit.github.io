// Flying Bullets
// Jason
// November 16 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const bulletSpeed = 30;

class Bullets {
  constructor(y) {
    this.diameter = 15;
    this.y = y;
    this.x = 0 - this.diameter + 1;
    this.dx = bulletSpeed;
  }
  
  move() {
    this.x+=this.dx;
  }
  
  display() {
    fill("yellow");
    circle(this.x, this.y, this.diameter);
  }
  
  remove() {
    return this.x > width + this.diameter;
  }
}

let bulletArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayBullets();
}

function displayBullets() {
  for(let i = 0; i < bulletArray.length; i++) {
    bulletArray[i].display();
    bulletArray[i].move();
  }
  for(let i = bulletArray.length - 1; i >= 0; i--) {
    if(bulletArray[i].remove()) {
      bulletArray.splice(i,1);
    }
  }
}

function mouseReleased() {
  let bullet = new Bullets(mouseY);
  bulletArray.push(bullet);
}

function keyPressed() {
  let bullet = new Bullets(mouseY);
  bulletArray.push(bullet);
}

