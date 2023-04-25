/*Decision and Loops - USING COMPARISON OPERATORS. At the most basic level, you can evaluate two variables using 
a comparison operator to return a true or false value. In this example, a user is taking a test, and the script 
tells the user whether they have passed this round of the test.  */

var pass = 40; // Pass mark
var score = 80; //Score

//Check if the user has passed
var hasPassed = score >= pass;

//write the message into the page
var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;