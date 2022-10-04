// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let x, y, w, h;
let img;

function preload() {
  img = loadImage("images/Fall_Photo.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 4;
  y = height / 4;
  w = width / 2;
  h = height / 2;
}

function draw() {
  background(220);
  if(state === "start") {
    fill("black");
    startScreen();
  }
  else if(state === "main") {
    fill("white");
    startScreen();
    image(img, 0, 0, width, height);
  }
}

function startScreen() {
  rect(x, y, w, h);
}

function mousePressed() {
  if(state === "start" || state === "main" && buttonIsClicked(x, x + w, y, y + h)) {
    if(state === "start") {
      state = "main";
    }
    else if(state === "main") {
      state = "start";
    }
  }
}

buttonIsClicked = (left, right, top, bottom) =>mouseX <= right && mouseX >= left && mouseY <= bottom && mouseY >= top;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
