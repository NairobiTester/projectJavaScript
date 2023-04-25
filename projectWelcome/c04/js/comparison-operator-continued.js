/* Decision and Loops: COMPARING TWO EXPRESSIONS. In the following, there are two rounds to the test and the code will 
check if the user has achieved a new high score, beating the previous record. */

var score1 = 90;    // Round 1 score
var score2 = 95;    // Round 2 score
var highScore1 = 75; //Round 1 high score
var highScore2 = 90; //Round 2 high score

// Check if scores are higher than current high scores
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;

