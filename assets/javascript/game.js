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

    // wrong user guess
    var wrongGuess = [];

    // letter guessed by user
    var guess = "";

    // scoring
    var guessesLeft = 10;
    var wonScore = 0;
    var lostScore = 0;

    // hide you win / lose divs on default
    $('.youWin').addClass('hide');
    $('.youLose').addClass('hide');

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
        wrongGuess = [];

        for (var i = 0; i < solutionBlanks; i++) {
            numMix.push("_");
          }
          console.log(numMix);
          // reset guesses left to 10 and display
          $('#guessesLeft').text(guessesLeft);
          // adding blanks when game resets
          $('#gameLetters').text(numMix.join(" "));
          // deleting previous guesses when game starts
          $('#wrongLetters').text(wrongGuess.join(" "));
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
            wrongGuess.push(letter);
            guessesLeft--;
        } 
    // close matchy function below
    }

    function endRound() {
        console.log("wins: " + wonScore + " | losses: " + lostScore + " | guesses: " + guessesLeft);

        $('#guessesLeft').text(guessesLeft);
        $('#gameLetters').text(numMix.join(" "));
        $('#wrongLetters').text(wrongGuess.join(" "));

        // if the solution word is guessed
        if (solutionLetters.toString() === numMix.toString()) {
            // increase wins and display score
            wonScore++;
            $('#wonScore').text(wonScore);
            // change default gif to winning pizza gif
            $('#tmntImage').css('background-image','url(https://bit.ly/2sEp0Bc)');
            // hide wrong letters div
            $('.wrongLetterBank').addClass('hide');
            // show you win
            $('.youWin').addClass('show');

            
            // listen for enter, then restart game
            start();
        }

        // if guesses left = 0
        if (guessesLeft === 0) {
            // add to losses and display score
            lostScore++;
            $('#lostScore').text(lostScore);
            // change default gif to loser gif
            $('#tmntImage').css('background-image','url(https://i.gifer.com/7ilT.gif)');
            // hide wrong letters div
            $('.wrongLetterBank').addClass('hide');
            // show you lose
            $('.youLose').addClass('show');
        }
    // close endRound function below    
    }

    // RUN IT ALL!
    start();

    document.onkeyup = function(event) {
        // make all keys lowercase
        guess = String.fromCharCode(event.which).toLowerCase();
        // Runs the code to check for correct guesses.
        matchy(guess)
        // Runs the code that ends each round.
        endRound();
      };

// closing ready document function below
});



    
