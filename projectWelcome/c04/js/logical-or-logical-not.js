/* Using Logical Or and Logical Not.  
Example: using the logical OR operator to find out if the user has passed at least one of the two rounds.
If they pass just one round, they do not need to retake the test. Look at the numbers stored in the four 
variables at the start of the example. The user has passed both rounds, so the minPass variable will hold
the Boolean value of true. Next, the message is stored in a variable called msg. At the end of the message, 
the logical NOT will invert the result of the Boolean variable so it is false. It is then written into the page. */


var score1 = 7; // Round 1 score
var score2 = 8; // Round 2 score
var pass1 = 6; // Round 1 pass mark
var pass2 = 6; // Round 2 pass mark

// Check whether user passed one of the two rounds, store result in variable
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//Create message
var msg = 'Resit required: ' + !(minPass);

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;

