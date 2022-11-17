// Flying Bullets
// Jason
// November 16 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bulletImg;
const bulletSpeed = 30;
let bulletWidth = 25;
let bulletHeight = 15;

class Bullets {
  constructor() {
    this.y = height / 2 - bulletHeight  / 2;
    this.x = 0 - bulletWidth + 1;
    this.dx = bulletSpeed;
  }
  
  move() {
    this.x+=this.dx;
  }
  
  display() {
    fill("yellow");
    image(bulletImg, this.x, this.y);
  }
  
  remove() {
    return this.x > width;
  }
}

let bulletArray = [];

function preload() {
  bulletImg = loadImage("Assets/bullet.png");
}

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
  let bullet = new Bullets();
  bulletArray.push(bullet);
}

function keyPressed() {
  let bullet = new Bullets();
  bulletArray.push(bullet);
}

