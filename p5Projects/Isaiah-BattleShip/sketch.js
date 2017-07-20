//First create a border
//Then create rectangles that fit in the border
//After the gird is created. Create codes that pinpoint each rectangle so it activates
//Once that is setup then create the attack system to make sure that once you hit the target you get the points/win.
var value = 0

function setup() {
	createCanvas(400, 400);
	fill(0);
}


function draw() {
	background(240);
	fill(33, 228, 137);
    var array = [
//ever square in the grid    
	rect(0, 0, 40, 40),
    rect(40, 0, 40, 40),
    rect(80, 0, 40, 40),
    rect(120, 0, 40, 40),
    rect(160, 0, 40, 40),
    rect(200, 0, 40, 40),
    rect(240, 0, 40, 40),
    rect(280, 0, 40, 40),
    rect(320, 0, 40, 40),
    rect(360, 0, 40, 40),
    rect(0, 40, 40, 40),
    rect(40, 40, 40, 40),
    rect(40, 40, 40, 40),
    rect(80, 40, 40, 40),
    rect(120, 40, 40, 40),
    rect(160, 40, 40, 40),
    rect(200, 40, 40, 40),
    rect(240, 40, 40, 40),
    rect(280, 40, 40, 40),
    rect(320, 40, 40, 40),
    rect(360, 40, 40, 40),
    rect(0, 80, 40, 40),
    rect(40, 80, 40, 40),
    rect(80, 80, 40, 40),
    rect(120, 80, 40, 40),
    rect(160, 80, 40, 40),
    rect(200, 80, 40, 40),
    rect(240, 80, 40, 40),
    rect(280, 80, 40, 40),
    rect(320, 80, 40, 40),
    rect(360, 80, 40, 40),
    rect(0, 120, 40, 40),
    rect(40, 120, 40, 40),
    rect(80, 120, 40, 40),
    rect(120, 120, 40, 40),
    rect(160, 120, 40, 40),
    rect(200, 120, 40, 40),
    rect(240, 120, 40, 40),
    rect(280, 120, 40, 40),
    rect(320, 120, 40, 40),
    rect(360, 120, 40, 40),
    rect(0, 160, 40, 40),
    rect(40, 160, 40, 40),
    rect(80, 160, 40, 40),
    rect(120, 160, 40, 40),
    rect(160, 160, 40, 40),
    rect(200, 160, 40, 40),
    rect(240, 160, 40, 40),
    rect(280, 160, 40, 40),
    rect(320, 160, 40, 40),
    rect(360, 160, 40, 40),
    rect(0, 200, 40, 40),
    rect(40, 200, 40, 40),
    rect(80, 200, 40, 40),
    rect(80, 200, 40, 40),
    rect(120, 200, 40, 40),
    rect(160, 200, 40, 40),
    rect(200, 200, 40, 40),
    rect(240, 200, 40, 40),
    rect(280, 200, 40, 40),
    rect(320, 200, 40, 40),
    rect(360, 200, 40, 40),
    rect(0, 240, 40, 40),
    rect(40, 240, 40, 40),
    rect(80, 240, 40, 40),
    rect(120, 240, 40, 40),
    rect(160, 240, 40, 40),
    rect(200, 240, 40, 40),
    rect(240, 240, 40, 40),
    rect(280, 240, 40, 40),
    rect(320, 240, 40, 40),
    rect(360, 240, 40, 40),
    rect(0, 280, 40, 40),
    rect(40, 280, 40, 40),
    rect(80, 280, 40, 40),
    rect(120, 280, 40, 40),
    rect(160, 280, 40, 40),
    rect(200, 280, 40, 40),
    rect(240, 280, 40, 40),
    rect(280, 280, 40, 40),
    rect(320, 280, 40, 40),
    rect(360, 280, 40, 40),
    rect(0, 320, 40, 40),
    rect(40, 320, 40, 40),
    rect(80, 320, 40, 40),
    rect(120, 320, 40, 40),
    rect(160, 320, 40, 40),
    rect(200, 320, 40, 40),
    rect(240, 320, 40, 40),
    rect(280, 320, 40, 40),
    rect(320, 320, 40, 40),
    rect(360, 320, 40, 40),
    rect(0, 360, 40, 40),
    rect(40, 360, 40, 40),
    rect(80, 360, 40, 40),
    rect(120, 360, 40, 40),
    rect(160, 360, 40, 40),
    rect(200, 360, 40, 40),
    rect(240, 360, 40, 40),
    rect(280, 360, 40, 40),
    rect(320, 360, 40, 40),
    rect(360, 360, 40, 40),
    
    ]
}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0; 
  }
console.log(mouseX,mouseY);
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}

  var X = mouseX;  
    //gives index
    X = Math.floor(X / 40);
    var Y = mouseY;
    Y = Math.floor(Y / 40);
    var newXCoordinate = X * 40;
    var newYCoordinate = Y * 40;
    rectMode(CORNER);
    console.log("I made it", Y, X);
    if (array[Y][X] == false) {
        fill(255, 0, 0);
        rect(newXCoordinate, newYCoordinate, 40, 40);
    } else {
        fill(0, 0, 255);
        rect(newXCoordinate, newYCoordinate, 40, 40);

   }
}
