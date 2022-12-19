// Local Storage Game
// Jason
// 12/5/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfClicks = 0;
let highScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(getItem("highscore") !== null) {
    highScore = getItem("highscore");
  }
  else {
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220); 
  textSize(50);
  fill("black");
  text(numberOfClicks, width / 2 - textWidth(numberOfClicks) / 2, height / 2);
  fill("red");
  text(highScore, width / 2 - textWidth(highScore) / 2, height / 2 + 100);
}

function mousePressed() {
  numberOfClicks++;  
  if(numberOfClicks > getItem("highscore")) {
    storeItem("highscore", numberOfClicks);
    highScore = numberOfClicks;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
