// Terrain Generation
// Jason
// October 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let zArray = [];
let totalHeights = 2000;
let startLocation = 0; 
let zTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  zTime = random(10000);
  makeZCoordinates(width * 2);
}

function makeZCoordinates(totalHeights) {
  for(let i = 0; i < totalHeights; i++) {
    zArray.push(noise(zTime) * 500);
    zTime += 0.0005;
  }
}

function draw() {
  background(220);
  for(let i = startLocation - width; i < startLocation + width; i++) {
    drawTerrain(i - startLocation, zArray[i], 1);
  }

  startLocation += 100;

  if(zArray.length - startLocation < width * 2) {
    makeZCoordinates(width * 2);
  }
}

function drawTerrain(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}