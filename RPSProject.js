var PlayerChoice = "Rock";

var Choice = ["Rock" , "Paper" , "Scissors"];
var CompChoice = Choice[Math.floor(Math.random()*3)];
//Tie
if (CompChoice == PlayerChoice){
    console.log("It's a tie")
}
//Computer= Paper and Player= Rock
else if (CompChoice == "Paper" && PlayerChoice == "Rock"){
    console.log("You Lose")
}
//Computer= Scissors and Player= Paper
else if (CompChoice == "Scissors" && PlayerChoice == "Paper"){
    console.log("You Lose")
}
//Computer= Rock and Player= Scissors
else if (CompChoice == "Rock" && PlayerChoice == "Scissors"){
    console.log("You Lose")
}
//Computer=Rock and Player=Paper
else if (CompChoice == "Rock" && PlayerChoice == "Paper"){
    console.log("You Win")
}
//Computer= Scissors and Player= Rock
else if (CompChoice == "Scissors" && PlayerChoice == "Rock"){
    console.log("You Win")
}
