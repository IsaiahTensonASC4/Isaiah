function setup(){
    createCanvas(500,300);   
}
//var x = 0;
//function draw(){
//    ellipse(x, 150, 100);
//    x++;
//}

var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var sentence = ("How you doing Dude")
var typed = ("")
var Score = 0

function draw(){
    background(0,255,239);
    fill(233, 125, 12);
    textSize(16);
    text(sentence, 155, 120);
    textSize(20)
    text("Score:", 40, 250)
    textSize(20)
    text(Score, 105, 250)
    textSize(16)
    text("Write Here:", 50, 190)
}

function keyTyped() {
  console.log(typed);
  typed = typed + key;
  if(typed == sentence){
    Score = Score + 1
  }
}



