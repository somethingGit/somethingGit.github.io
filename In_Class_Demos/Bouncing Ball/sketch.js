// Bouncing Balls
// Jason
// 10/24/2022

let circles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(200);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function moveBall() {
  for(let i = 0; i < circles.length; i++) {
    circles[i].x += circles[i].dx;
    circles[i].y += circles[i].dy;
    for(let j=0;j<circles.length;j++) {
      if(checkCollision(circles[i], circles[j]) === true && i !== j) {
        let tempDx = circles[i].dx;
        let tempDy = circles[i].dy;
        circles[i].dx = circles[j].dx;
        circles[i].dy = circles[j].dy;
        circles[j].dx = tempDx;
        circles[j].dy = tempDy;
      }
    }
    if(circles[i].x >= width - circles[i].diameter / 2 || circles[i].x <= circles[i].diameter / 2) {
      circles[i].dx *= -1;
    }
    if(circles[i].y >= height - circles[i].diameter / 2 || circles[i].y <= circles[i].diameter / 2) {
      circles[i].dy *= -1;
    }
  }
}

function displayBall() {
  for (let thisCircle of circles) {
    fill(thisCircle.circleColor);
    circle(thisCircle.x, thisCircle.y, thisCircle.diameter);
  }
}

let checkCollision = (ball1, ball2) => dist(ball1.x, ball1.y, ball2.x, ball2.y) < ball1.diameter/2 + ball2.diameter/2; 


function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX, 
    y: tempY, 
    diameter: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5,5),
    circleColor: color(random(255), random(255), random(255), random(255))
  };
  return newBall;
}

function mouseClicked() {
  circles.push(spawnBall(mouseX, mouseY));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}