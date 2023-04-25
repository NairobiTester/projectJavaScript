/** In this example, a math test has two rounds. For each round there are two variables: one holds the user's score for 
 that round; the other holds the pass mark for that round. The logical AND is used to see if the user's score is greater
than or equal to the pass mark in both of the rounds of the test. The result is stored in a variable called passBoth.
The example finishes off by letting the user know whether or not they have passed both rounds. */

var score1 = 8; // Round 1 score
var score2 = 7; // Round 2 score
var pass1 = 6;  // Round 1 pass mark
var pass2 = 7;  // Round 2 pass mark

// Check whether user passed both rounds, store result in variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// Create message
var msg = 'Both rounds passed: ' + passBoth;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;