function randLetter(){
var Alphabet = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomABC = Alphabet[Math.floor(Math.random()*Alphabet.length)];
    return randomABC;
}
console.log(randLetter())

function randWord(){
    var word = "";
    //create a loop to pick 5 random letters
    for (var i = 0; i < 5; i++){
        //Pick a letter
        console.log(randLetter());
        word = word + randLetter();

    }   
    return word;   
}
