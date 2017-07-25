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
//The loop will change the from the one by one text into the 5 letter text. Combines 5 letters together to signal the call. Once the call is created then the text may be activated to the code.
