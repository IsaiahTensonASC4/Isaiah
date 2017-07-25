var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    sc = loadImage("ship.png");
    ship = new Ship();
    drop = new Drop(width / 2, height / 2);
    for (var i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background("black");
   //image(invader, mouseX, 500, invader.width / 10, invader.height / 10)
    ship.show();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    }
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
    }
}
function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move();
    } else if (keyCode === LEFT_ARROW) {
        ship.move();
    }
}


//ship object with show function
function Ship() {
    this.x = width / 2;

    this.show = function () {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 30, 20, 60);
    }
    this.move = function (dir) {
        this.x += dir * 15;
    }
}

//flower object
function Flower(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(255, 0, 200);
        ellipse(this.x, this.y, 60, 60);
    }
}

//water drop
function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(150, 0, 255);
        ellipse(this.x, this.y, 16, 16);
    }
    this.move = function () {
        this.y = this.y - 5;
    }
}
