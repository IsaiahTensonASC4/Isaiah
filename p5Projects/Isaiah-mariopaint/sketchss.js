function setup(){
    createCanvas(500, 500);
    background(245); //0, 225, 220
    nostroke();

    fill("black")
    rect(0, 0, 500, 30);
    fill("red")
    rect(0, 0, 500, 30);
    fill("yellow")
    rect(0, 0, 500, 30);
}

function mouseDragged() {
  fill(random(255), random(255), random(255), random(255))
  ellipse(mouseX, mouseY, random(60),60);
  fill(random(255), random(255), random(255), random(255))
  rect(mouseX, mouseY, random(60),60);
  fill(random(255), random(255), random(255), random(255))
  tri(mouseX, mouseY, random(60),60);
  // prevent default
  return false;
}

function mousePresed() {
  if (mouseY < 31) {
    col = "green"
  }else if (mouseY > 30 && mouseY < 61) {
    col = "blue" 
  }else if (mouseY > 90 && mouseY < 91) {
    col = "yellow"
  }
}

