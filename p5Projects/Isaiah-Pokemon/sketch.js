function setup() {
    createCanvas(900,500);
    background(150);
}
var PokemonX = ("Rhyhorn","Moltres","Dragonite","Seaking","Hitmonchan","Marowak");
//USE NESTED ARRAYS FOR DEFINING THE POKEMON
var PokemonY = ("Venasaur","Voltorb", "Steelix","Exeggutor","Kangaskhan","Porygon");

var PokemonXhp = ("");

var friendlyHP = 150;
var enemyHP = 175;

var text

function draw() {
    background(100);
    //HP Area for Friendly Pokemon
    fill("white");
    rect(50, 50, 350, 60);
    //HP Area for Enemy Pokemon
    fill("white");
    rect(500, 50, 350, 60);
    //HP Outline Box Friendly Pokemon
    fill("white");
    rect(175, 75, 200, 10);
    //HP Outline Box Enemy Pokemon
    fill("white");
    rect(625, 75, 200, 10);
    //HP Indicator (Friendly)
    fill("green");
    rect(175, 75, friendlyHP, 10);
    //HP Indicator (Enemy)
    fill("green");
    rect(625, 75, enemyHP, 10);
    //Prompt Box
    fill("white")
    var A1 = rect(50, 400, 800, 75);
    //ATTACK BUTTON
    fill("white");
    rect(50, 400, 400, 37.5);
    fill("black");
    textSize(20);
    textStyle(ITALIC);
    text("ATTACK", 200, 430);
    //POTIONS
    fill("white");
    rect(50, 437.5, 400, 37.5);
    fill("black");
    text("POTIONS", 200, 465);
    //RUN
    fill("white");
    rect(450, 400, 400, 37.5);
    fill("black");
    text("RUN", 600, 430);
    //POKEMON
    fill("white");
    rect(450, 437.5, 400, 37.5);
    fill("black");
    text("POKEMON", 600, 465);
    //Friendly Pokemon Sprite
    fill("blue");
    ellipse(250, 250, 260, 275);
    fill("grey");  
    ellipse();
   //Enemy Pokemon Sprite
    fill("red");
    ellipse(700, 250, 200);
    
}

var potions;

for (var potions = 0; potions < 4; potions++);

function mouseClicked() {
   if (mouseX > 50 && mouseX < 450 && mouseY > 400 && mouseY < 437.5);

}

var 
friendlyHP