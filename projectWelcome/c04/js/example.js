/* Decision and Loops - Example.
If you read the comments in the code, you can see how this example works. The script starts by
declaring four variables and setting values for them. Then, an if statement checks whether the value of
the variable called operator is addition. If it is, it uses a while loop to perform the calculations and store 
the results in a variable called msg.  */

var table = 3; // Unit of table
var operator = 'addition';  // Type of calculation (defaults to addition)
var i = 1;  // Set counter to 1
var msg = '';   // Message

if (operator === 'addition') {  // If the operator variable says addition
    while (i < 11) {            // While counter is less than 11
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; // Calculation
        i++;        // Add 1 to counter
    }
} else {
    while (i < 11) {
        msg +=  i + 'x' + table + ' = ' + (i * table) + '<br />'; // Calculation
        i++;            // Add 1 to the counter
    }
}

// write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;