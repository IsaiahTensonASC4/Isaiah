var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(500, 400);
  background (25);

}

function draw() {
    noStroke();
    background(228);
    //distance from center of the screen
    var d = dist(90, 90, 40, 40);

     fill (0, 250, 250, 100, 200, 250);
      ellipse (x, y, d, d);

     //bouncing horizontally
      x = x + xspeed;
      
      if (x > 480 || x < 10)  {
         xspeed = -xspeed;
      }

     //bouncing veritcally
      y = y + yspeed;

     if (y > 380 || y < 10) {
           yspeed = -yspeed;
      }

}