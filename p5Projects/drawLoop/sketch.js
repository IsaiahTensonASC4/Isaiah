function setup(){
    createCanvas(500,300);   
}
//var x = 0;
//function draw(){
//    ellipse(x, 150, 100);
//    x++;
//}

var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var sentence = ["dude","dog","hello"];
var typed = "";
var Score = 0;
var i = 0;
function draw() {
    background(0,255,239);
    fill(233, 125, 12);
    textSize(16);
    text(sentence[i], 155, 120);
    textSize(20);
    text("Score:", 40, 250);
    textSize(20);
    text(Score, 105, 250);
    textSize(16);
    text("Write Here:" + typed, 50, 190);
}

function keyTyped(){
  typed = typed + key;
  if(typed == sentence[i] ){
    i++;
    text(sentence[i], 155, 120);
    Score++;
    typed="";
  }
}

// function keyPressed(){
//   if (keyCode === ENTER){
//   }
//   console.log(sentence[i]);
//   console.log(typed);
// }

