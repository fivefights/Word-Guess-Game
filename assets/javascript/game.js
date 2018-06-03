// targeting guessed letters in letter bank
$('#guessedLetters').text("target");

// targeting game letters
$('#gameLetters').text("target");

// declare variables and set baseline for guesses and scoring
var guessesLeft = 20;
guessesLeft = $('#guessesLeft').text(guessesLeft);

var wonScore = 0;
wonScore = $('#wonScore').text(wonScore);

var lostScore = 0;
lostScore = $('#lostScore').text(lostScore);
