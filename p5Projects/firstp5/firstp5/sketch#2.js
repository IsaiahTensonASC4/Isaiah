function setup(){
    createCanvas(300,300);
    background(225);
    //stroke() sets the color of the stroke (the outline).
    stroke("black");
    //strokeWeight() sets the width of the stroke in pixels.
    strokeWeight(6);
    //
    arc(width / 2, height / 2, 80, 80, 0, PI + QUARTER_PI, CHORD);

}

function setup(){
    createCanvas(300, 300);
    background(130, 20, 10);
    ellipse(190, 50, 70, 70);
    ellipse(120, 50, 70, 70);
    ellipse(155, 120, 100, 100);
}