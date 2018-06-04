// making sure html is loaded before trying to execute
$(document).ready(function() {

    // defining global variables ====================================================================

    var solutionBank = ["pizza", "pepperoni", "cheese", "cowabunga", "donatello", "raphael", "michaelangelo", "leonardo", "master splinter", "shredder", "krang", "rocksteady", "bebop", "april"]

    // randomly selected solution word to be guessed
    var solution = "";

    // letters of chosen word to be guessed
    var solutionLetters = [];

    // number of blanks in solution word
    var solutionBlanks = 0;

    // solution blanks and guessed letters
    var numMix = [];

    // number of wrong user guesses
    var numWrongGuesses = [];

    // letter guessed by user
    var guess = "";

    // scoring
    var guessesLeft = 10;
    var wonScore = 0;
    var lostScore = 0;

    // defining functions ====================================================================

    function start() {
        // reset number of guesses left
        guessesLeft = 10;
        // select random solution work to be guessed
        solution = solutionBank[Math.floor(Math.random() * solutionBank.length)];    
        // split solution word into its individual letters
        solutionLetters = solution.split("");
        // count the number of letters in the solution
        solutionBlanks = solutionLetters.length;
        console.log(solution);

        // reset game area
        numMix = [];
        // reset guesses
        numWrongGuesses = [];

        for (var i = 0; i < solutionBlanks; i++) {
            numMix.push("_");
          }
          console.log(numMix);
          // reset guesses left to 10 and display
          $('#guessesLeft').text(guessesLeft);
          // adding blanks when game resets
          $('#gameLetters').text(numMix).join(" ");
          // deleting previous guesses when game starts
          $('#wrongLetters').text(numWrongGuesses).join(" ");
    // close start function below
    }

    // matchy matchy function for checking inputs against solution
    function matchy(letter) {
        // toggle based guessed letter existing in solution
        var letterInSolution = false;
        for (var i = 0; i < solutionBlanks; i++) {
            // check soultion array for guessed letter
            if (solution[i] === letter) {
                letterInSolution = true;
            }
          }

          if (letterInSolution) {
          // loop thru solution
          for (var j = 0; j < solutionBlanks; j++) {
            // display a blank for each solution letter
            if (solution[j] === letter) {
                numMix[j] = letter;
            }
          }
          console.log(numMix);
        }
        else {
            // display wrong guess & subtract from guesses left
            wrongGuesses.push(letter);
            guessesLeft--;
        } 
    // close matchy function below
    }



// targeting game letters
// $('#gameLetters').text("target");

// again, this shit is not working inside the fucking for loop
$('#guessesLeft').text(guessesLeft);

// on default, show letterBank & hide the classes for youWin and youLose
$('.letterBank').addClass('show');
$('.youLose').addClass('hide');
$('.youWin').addClass('hide');

// targeting gif
$('#tmntImage').css("background-image", "url(https://bit.ly/2LjZFnW)");

// closing ready document function below
});



    
