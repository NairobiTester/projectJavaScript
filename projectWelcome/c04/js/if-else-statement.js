/** Using If/Else statements ***/
var pass = 50; // Pass mark
var score = 85; // Current score
var msg;    // Message

// Select message to write based on score
if (score >= pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;