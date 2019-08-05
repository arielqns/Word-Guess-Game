//global variables
//==================================
//arrays and variables for holding data
var wordOptions = ["jimmy", "carlos", "daisy", "manny"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ _ _
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//functions (called when needed)
//===================================
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.lenght)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
    
    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanksAndSuccessess w correct number of  blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerText = lossCount

    //Testing / Debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //check if letter exist in code at all
    var isletterInword = false;
    for (var i=0; isletterInword; i++){
        if(selectedWord[i] == letter) {
            isletterInword = true;
        }
    }
    //check where in the word letter exists, then populate theb array
    if(isletterInword){
            for (var i=0; isletterInword; i++){
                if(selectedWord[i] == letter) {
                    blanksAndSuccesses[i] = letter;
            }        
        }
    }

        //letter wasnt found
    else {
        wrongLetters.push(letter);
        guessesLeft++
    }
        //testing + Debugging
        console.log(blanksAndSuccesses)
}

function roundComplete(){
    console.log("Win Count: * + winCount + ! Loss Count: * + lossCount + ! Guesses Left: * + numGuesses")

    // Update HTML ro reflect most recent count info
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");

    //check is user won
    if (lettersinWord.toString[] == blanksAndSuccesses.toString[]){
        winCount++;
        alert("You Won!");

        //Update counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;
       
        startGame();
    }

    //check if user loss
    else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost");

        //update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;
    
        startGame();
    }
}
//Main Process
//===================================

//initiate code the first time
startGame();

//register key clicks
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete;

    //Testing/Debugging
    console.log(letterGuessed);
}