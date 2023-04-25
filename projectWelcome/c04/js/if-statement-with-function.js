/** If the condition is met then: 1. The first statement in the code block calls the congratulate() function.
2. The code within the congratulate() function runs. 3. The second line within the if statement's code block runs.**/

var score = 85; //Score
var msg = '';   // Message

function congratulate() {
    msg += 'Congratulations! ';
}

if (score >= 50) { // If score is 50 or more
    congratulate();
    msg += 'Proceed to the next round.';
}
var el = document.getElementById('answer');
el.innerHTML = msg;