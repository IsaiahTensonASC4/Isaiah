function setup(){
    createCanvas(500,300);   
}
//var x = 0;
//function draw(){
//    ellipse(x, 150, 100);
//    x++;
//}

var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var typed = ("")


function draw(){
    background(0,255,239);
    fill(233, 125, 12);
    textSize(16);
    text("Please Type the letters that you see.", 125, 30);
}

function keyTyped() {
  console.log(typed);
  typed = typed + key;


}
