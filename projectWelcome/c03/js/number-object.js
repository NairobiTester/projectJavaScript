/* Global Objects: Number Object.
Whenever you have a value that is a number, you can use the methods and properties of the Number 
object on it.  Methods:
    isNaN() - checks if the value is not a number
    toFixed() - Rounds to specified number of decimal places (returns a string)
    toPrecision() - Rounds to total number of places (returns a string)
    toExponential() - Returns a string representing the number in exponential notation 
If a variable or property of an object stores a number, you can use the properties and
methods of the Number object on it. **/

/** In this example, a number is stored in a variable called originalNumber, and it is then
rounded up or down using two different techniques. In both cases, you need to indicate how many digits
you want to round to. This is provided as a parameter in the parentheses for that method.  */

var originalNumber = 10.23456;
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>toFixed()</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>toPrecision()</h2><p>' + originalNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;