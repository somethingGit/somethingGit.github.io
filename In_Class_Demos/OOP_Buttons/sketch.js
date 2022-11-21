// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttons = [];

class Button {
  constructor(x,y,w,h,color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h; 
    this.color = color;
    this.value = false;
  }
  
  display() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
  
  buttonClicked() {
    if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) this.value = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeButton();
}

function makeButton() {
  let makeButton;
  for(let i = 0; i < 100; i++) {
    makeButton = new Button(random(width - 100), random(height - 100), random(100), random(100), color(random(255), random(255), random(255), random(255)));
    buttons.push(makeButton);
  }
}

function draw() {
  background(220);
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].display();
    if(buttons[i].value) {
      background(100);
      buttons.splice(i,1);
    }
    else background(220);
  }
}

function mouseClicked() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].buttonClicked();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
