/* Using Do While Loops.
The key difference between a while loop and a do while loop is that the statements in the code block come
before the condition. This means that those statements are run once whether or not the condition is met.
If you take a look at the condition, it is checking that the value of the variable called is less than 1, 
but that variable has already been set to a value of 1. Therefore, in this example, the result is that the 
5 times table is written out once, even though the counter is not less than 1.  */

var i = 1;  // Set counter to 1
var msg = ''; // Message

// Store 5 times table in a variable
do {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
}
while (i<1);
// Note how this is already 1 and it still runs
document.getElementById('answer').innerHTML = msg;