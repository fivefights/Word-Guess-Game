// making sure html is loaded before trying to execute
$(document).ready(function() {

    // defining global variables ====================================================================

    var wordBank = ["pizza", "pepperoni", "cheese", "cowabunga", "donatello", "raphael", "michaelangelo", "leonardo", "master splinter", "shredder", "krang", "rocksteady", "bebop", "april"]

    // randomly selected solution word to be guessed
    var solution = "";

    // letters of chosen word to be guessed
    var solutionLetters = [];

    // number of blanks in solution word
    var numSolutionBlanks = 0;

    // solution blanks and guessed letters
    var numMix = [];

    // number of wrong user guesses
    var wrongGuesses = [];

    // letter guessed by user
    var guessedLetter = "";

    // scoring
    var guessesLeft = 10;
    // var showGuessesLeft = $('#guessesLeft').text(guessesLeft);
    var wonScore = 0;
    // wonScore = $('#wonScore').text(wonScore);
    var lostScore = 0;
    // lostScore = $('#lostScore').text(lostScore);

    // defining functions ====================================================================

    function start() {
        // reset number of guesses left
        guessesLeft = 10;
        // select random solution work to be guessed
        solution = wordBank[Math.floor(Math.random() * wordBank.length)];    
        // split solution word into its individual letters
        solutionLetters = solution.split("");
        // count the number of letters in the solution
        numSolutionBlanks = solutionLetters.length;
        console.log(solution);
   
    // close start function below
    }



// targeting guessed letters in letter bank
$('#guessesLeft').text(guessesLeft);

// targeting game letters
// $('#gameLetters').text("target");

// on default, show letterBank & hide the classes for youWin and youLose
$('.letterBank').addClass('show');
$('.youLose').addClass('hide');
$('.youWin').addClass('hide');

// targeting gif
$('#tmntImage').css("background-image", "url(https://bit.ly/2LjZFnW)");

// closing ready document function below
});



    
