$(document).ready(function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wordBank = [
        "PIZZA",
        "PEPPERONI",
        "KOWABUNGA DUDE",
        "DONATELLO",
        "RAPHAEL",
        "MICHAELANGELO",
        "LEONARDO",
        "MASTER SPLINTER",
        "SHREDDER",
        "KRANG",
        "ROCKSTEADY",
        "BEBOP",
        "CHEESE"
    ]

    // selected word
    var word;

    // guessed letter
    var guess;

    // stored guesses
    var guesses = [ ];

    var guessesLeft;

    // count correct guesses
    var counter;

    // spaces in word "-"
    var space;

    // get elements
    var guessesLeft = 0;
    var showGuessesLeft = $('#guessesLeft').text(guessesLeft);
    var wonScore = 0;
    wonScore = $('#wonScore').text(wonScore);
    var lostScore = 0;
    lostScore = $('#lostScore').text(lostScore);

    // for (var i = 0; i < )




// targeting guessed letters in letter bank
$('#guessedLetters').text("target");

// targeting game letters
// $('#gameLetters').text("target");

// on default, show letterBank & hide the classes for youWin and youLose
$('.letterBank').addClass('show');
$('.youLose').addClass('hide');
$('.youWin').addClass('hide');

// targeting gif
$('#tmntImage').css("background-image", "url(https://bit.ly/2LjZFnW)");

// listen for keystroke and print it
$("#gameLetters").keypress(function() {
    $("#gameLetters").text(key);
  });

// closing ready document function below
});



    
