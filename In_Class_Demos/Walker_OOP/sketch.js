// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x,y, diameter, speed, color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.speed = speed;
  }
  
  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
  move() {
    let choice = random(100);
    this.speed = random(-1,1);
    
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if(choice < 50) {
      this.y -= this.speed;
    }
    else if(choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x -= this.speed;
    }
  }
}

let walker, kathrine, greenWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(width / 2, height / 2, 2, random(-5, 5), "red");
  kathrine = new Walker(200, 300, 2, random(5, -5), "orange");
  greenWalker = new Walker(width / 2 + width / 4 - 2 / 2, height / 2 + height / 4 - 2 / 2, 2, random(5,-5), "green");
}

function draw() {
  walker.display();
  walker.move();
  kathrine.display();
  kathrine.move();
  greenWalker.display();
  greenWalker.move();
}
