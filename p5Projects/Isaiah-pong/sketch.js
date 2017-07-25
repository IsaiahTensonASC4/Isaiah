var x = 180;
var y = 180;
var xspeed = 3;
var yspeed = 3;
var lel = 0
var gameText = "Score: "+lel
console.log(text)
function setup() {
  createCanvas(500, 400);
  background(25);

}

function draw() {
  noStroke();
  background(165);
  //distance from center of the screen
  var d = dist(30, 30, 40, 40);
  fill(0, 0, 0, 190, 200, 250);
  ellipse(x, y, d, d);
  //bouncing horizontally
  x = x + xspeed;
  text(gameText,200,100)

  if (x > 493 || x < 8) {
    xspeed = -xspeed;
  }

  //bouncing veritcally
  y = y + yspeed;

  if ( y < 10) {
    yspeed = -yspeed;
  }
  // makes the ball hit the paddle
  else if ( y > 400 - 17.5 && x > mouseX && x < mouseX + 120) {
   yspeed = -yspeed
   lel = lel + 1
   gameText= "Score: "+ lel
   
  } 
  // if the ball goes under the paddle you lose.
  else if ( y > 400){
    textStyle(BOLD)
    fill("Red")
    textSize(25)
    gameText = "You Lose"
  }
  
  var g = dist()
  fill(0, 0, 0, 190, 200, 250)
  rect(mouseX, 390, 120, 20);

}
