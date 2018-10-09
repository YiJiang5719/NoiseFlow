var inc = 0.1;
var scl = 10;
var cols , rows;

var zoff = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  cols = floor (width / scl);
  rows = floor (height / scl);
}

function draw() {

  background(255);
  var yoff = 0;
  for(var y = 0; y < rows ; y ++ ){
    var xoff = 0;
    for(var x = 0 ; x < cols; x ++){
      var index = (x + y * width) * 4;
      var angle = noise(xoff,yoff,zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);

      xoff += inc;
      noStroke();
      var r = noise(xoff) * width ;
      var g = noise(yoff) * height;
      var diameter = noise(xoff) * 10;

      push();
      translate(x * scl,y *scl);
      rotate(v.heading());
      fill(r, g, 255);
      rectMode(CENTER);
      ellipse(10,10,diameter,diameter);
      pop();
    }
    yoff += inc;
    zoff += 0.001;

  }

}
