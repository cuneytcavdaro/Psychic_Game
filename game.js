var wins = 0,
    losses = 0,
    guessLeft = 9;
    guesses = [];

var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
document.onkeyup = function(event){
var userGuess = event.key;
guessLeft--;
var guess = function(){
    document.getElementById("guessLeft").innerHTML="Guesses left: " + guessLeft; 
};
var 

var guessL = function(){
    document.getElementById("userGuess").innerHTML = "User guesses so far: " + userGuess.join(",");
};


if(guessLeft > 0){
    if(userGuess === computerGuess){
        wins++;
        document.getElementById("wins").innerText = "Wins: " + wins;

    }else{
        guessLeft--;
    }
    }else if(guessLeft == 0){
        losses++;
        document.getElementById("losses").innerText = "Losses: " + losses;
}

    document.getElementById("wins").innerHTML=wins;
    document.getElementById("losses").innerHTML=losses;
    document.getElementById("guessLeft").innerHTML=guessLeft;
    
 
var newGame = function () {
    computerGuess;
    userGuess = [];
    guess();
    guesses = 9;
    guessesLeft = 9;
    guessL;

};

}