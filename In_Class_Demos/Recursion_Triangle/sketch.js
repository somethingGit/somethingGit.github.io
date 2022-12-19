// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let iterAmount = 0;
let colorArray = [];
const maxDepth = 9;

let triangleVertices = [
  {x: 500, y: 100}, 
  {x: 100, y: 600}, 
  {x: 900, y: 600}
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < maxDepth + 2; i++) {
    colorArray.push(color(random(255), random(255), random(255), random(255)));
  }
}

function draw() {
  background(220);
  noStroke();
  sierpinski(triangleVertices, iterAmount);
}

let sierpinski = (points, depth) => {
  fill(colorArray[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y); 
  if (depth > 0 && depth < maxDepth) {
    fill(colorArray[depth]);
    sierpinski([points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2])], depth - 1);
    sierpinski([points[1], getMidPoint(points[0], points[1]), getMidPoint(points[1], points[2])], depth - 1);
    sierpinski([points[2], getMidPoint(points[0], points[2]), getMidPoint(points[1], points[2])], depth - 1);
  }
  else if(depth > maxDepth) {
    iterAmount = 0;
    colorArray = [];
    for(let i = 0; i < maxDepth + 2; i++) {
      colorArray.push(color(random(255), random(255), random(255), random(255)));
    }
  }
}

let getMidPoint = (point1, point2) => {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  return {x: xDiff/2, y: yDiff / 2};  
}

function mousePressed() {
  iterAmount++;
}
