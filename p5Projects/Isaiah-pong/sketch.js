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
    background(165);
    //distance from center of the screen
    var d = dist(30, 30, 40, 40);
     fill (0, 0, 0, 190, 200, 250);
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
    
   var g = dist()
   rect(mouseX, 390, 120, 20);

}
