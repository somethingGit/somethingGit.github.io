// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
}

function mouseClicked() {
  if(mouseIsPressed) {
    location.replace("somethingGit.github.io/First_Games/Snake_Game/index.html");
  }
}

let windowResized = () => resizeCanvas(windowWidth, windowHeight);
