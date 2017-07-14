var CharizardArray = ["Blaze", 266, false, ["Fire", "Flying"]]
var CharizardObject = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

var YeezyBoost350 = ["Adidas", "Yeezy Boost 350","Turtledove", 9, 3200]
    brand: "Adidas"
    shoes: "Yeezy Boost 350"
    color: "Turtle Dove"
    size: 9
    cost: 3200

function shoe(brand, model) {
    this.brand = brand;
    this.model = model;
    this.talk = function() {
        consol.log("Hey, Im" + heroname + "; Just your friendly neighborhood Spiderman")
    }
}

var boosts = new shoe("Adidas", "Yeezy Boost 350");
var stans = new shoe("Adidas", "Stan Smiths");

function Superhero(heroname, realname, superpower) {
    this.heroname = heroname;
    this.realname = realname;
    this.superpower = superpower;
}

var superman = new Superhero("Superman", "Clark Kent", ["Flying", "Super Stength"])
var spiderman = new Superhero("Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climbing", "Super Strength"])