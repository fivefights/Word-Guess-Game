// targeting guessed letters in letter bank
$('#guessedLetters').text("target");

// targeting game letters
// $('#gameLetters').text("target");

// targeting background gif
// $('.tmntImage').css("background-image") === "url(../images/lost.gif)";

$(".tmntImage").filter(function() {
    return $(this).css("background-image") === "url(../images/lost.gif)"; 
});

// on default, show letterBank & hide the classes for youWin and youLose
$('.letterBank').addClass('show');
$('.youLose').addClass('hide');
$('.youWin').addClass('hide');

// declare variables and set baseline for guesses and scoring
var guessesLeft = 0;
guessesLeft = $('#guessesLeft').text(guessesLeft);

var wonScore = 0;
wonScore = $('#wonScore').text(wonScore);

var lostScore = 0;
lostScore = $('#lostScore').text(lostScore);

// create array to hold game words to be guessed
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

// create variable for letter blanks
var blank = "_";

// listen for keystroke and print it
$("#gameLetters").keypress(function() {
    $("#gameLetters").text(key);
  });



    
