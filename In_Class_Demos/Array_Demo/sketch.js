// Array Demo
// Your Name
// 10/18/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let twoNumbers = [1, -1];
let circleArray = [];
let diameter = 50;
let setDeltaTime;
let fr = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  // eslint-disable-next-line no-undef
  setDeltaTime = deltaTime;
}

function draw() {
  background(220);
  console.log(fr);
  if(setDeltaTime < deltaTime && fr > 1) {
    fr--;
    console.log(`Framerate has slown ${fr}`);
  }
  else if(setDeltaTime > deltaTime) {
    fr++;
  }
  makeCircle();
}

function makeCircle() {
  if(circleArray.length > 0) {
    for(let i = 0; i < circleArray.length; i += 8) {
      fill(circleArray[i + 2], circleArray[i + 3], circleArray[i + 4], circleArray[i + 5]);
      circle(circleArray[i], circleArray[i + 1], diameter);
      circleArray[i] += circleArray[i + 6];
      circleArray[i+1] += circleArray[i + 7];
      if(circleArray[i] >= width - diameter / 2 || circleArray[i] <= 0 + diameter / 2 || circleArray[i] === mouseX) {
        circleArray[i+6] *= -1;
      }
      if(circleArray[i+1] >= height - diameter / 2 || circleArray[i + 1] <= 0 + diameter / 2 || circleArray[i+1] === mouseY) {
        circleArray[i + 7] *= -1;
      }
    }
  }
  if(mouseIsPressed) {
    circleArray.push(mouseX);
    circleArray.push(mouseY);
    circleArray.push(random(255), random(255), random(255), random(255));
    circleArray.push(random(twoNumbers));
    circleArray.push(random(twoNumbers));
  }
  makeMouseOverCircle();
}

let makeMouseOverCircle = () => circle(mouseX, mouseY, 30);

function mousePressed() {
  circleArray.push(mouseX);
  circleArray.push(mouseY);
  circleArray.push(random(255), random(255), random(255), random(255));
  circleArray.push(random(twoNumbers));
  circleArray.push(random(twoNumbers));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}