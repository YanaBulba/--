function windowResized() {
  console.log("resized");
  let width = document.querySelector("#sketch-div").clientWidth;
  console.log(width);
  let height = document.querySelector("#sketch-div").clientHeight;
  console.log(height);
 
  resizeCanvas(width, windowHeight);
  
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('sketch-div')
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  angleMode(DEGREES);
  background(30, 30, 60); 

  for (let i = 0; i < 20; i++) {
    let squareColor = color(random(255), random(255), random(255));
    fill(squareColor);
    noStroke();
    let x = random(width);
    let y = random(height);
    let size = random(30, 100);
    rect(x, y, size, size); 

    let circleColor = color(random(255), random(255), random(255));
    fill(circleColor);
    let cx = random(width);
    let cy = random(height);
    let radius = random(30, 100);
    ellipse(cx, cy, radius, radius);
  }
}
