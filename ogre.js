var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
    //Add game title
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");

    //Add game info
    $("body").append("<p>Ogres are attacking your villlage! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>");

    //add stats
    //TODO: Add stat values
    $("body").append("<h3>STATS<h3><p id='stats'></p>");

    //Add attack button
    $("body").append("<Button onclick='attack()'>Attack the Ogre!</button>");

    $("body").append("<div id='ogres'></div>")

    updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + " | Gold: " + gold + " | Ogres Slain: " + numberDefeated)
}

function attack() {
    if (hp > 0) { //Player is still alive
        if (Math.random() * 100 > gold) {
            gold += 10; // gold = gold + 10
            numberDefeated++;
            $("#ogres").prepend("<p>You won! + 10 gold.<p>");
        } else {
            gold--; //gold = gold - 1
            hp--;
            $("#ogres").prepend("<p>You lost! - 1 gold.<p>");
        }
        spawnOgre()
        updateStats()
    }
}
function spawnOgre() {
    $("#ogres").prepend("<img src='https://thumb1.shutterstock.com/display_pic_with_logo/100254/180520877/stock-vector-cartoon-ogre-with-a-big-axe-isolated-180520877.jpg'>")
}




$(Document).ready(setup);

//Add the game title
//Add game info
//Add the stats
//Add ogre image
//When the player clicks the button
//  If the player has HP
//      Add paragraph saying "you win"
//      +Gold to player
//      +Num of ogres defeated
//  Else
//      Add paragrapgh saying "you lost"
//      -Gold from player
//      -HP
//  update stats
//  add another ogre image
//  Else
//      Add paragraph saying "game over"