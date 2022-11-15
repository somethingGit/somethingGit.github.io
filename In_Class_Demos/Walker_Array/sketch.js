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

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeWalker();
  if(mouseIsPressed) {
    makeWalker();
  }
}

function draw() {
  for(let i = 0; i < walkerArray.length; i++) {
    walkerArray[i].move();
    walkerArray[i].display();
  }
}

function makeWalker() {
  let walker = new Walker(random(width), random(height), 2, random(-5, 5), color(random(255), random(255), random(255)));
  // let kathrine = new Walker(200, 300, 2, random(5, -5), "orange");
  // let greenWalker = new Walker(width / 2 + width / 4 - 2 / 2, height / 2 + height / 4 - 2 / 2, 2, random(5,-5), "green");
  walkerArray.push(walker);
  // walkerArray.push(kathrine);
  // walkerArray.push(greenWalker);
}

function keyPressed() {
  makeWalker();
}

function mousePressed() {
  makeWalker();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  makeWalker();
}
