/*** Global Objects: Math Object
 * 
 * The Math object has properties and methods for mathematical constants and functions. 
 * The Math.PI property returns pi (approximately 3.14159265359).
 * Math.round() - Rounds number to the nearest integer 
 * Math.sqrt(n) - Returns square root of positive number, e.g., Math.sqrt(9) returns 3 
 * Math.ceil() - Rounds number up to the nearest integer
 * Math.floor() -  Rounds number down to the nearest integer
   Math.random() - Generates a random number between 0 (inclusive) and 1 (not inclusive) 

   Because it is known as a global object, you can just use the name of the Math object followed 
   by the property or method you want to access. 
   
   Typically you will then store the resulting number in a variable. This object also has many trigonometric 
   functions such as sin(), cos(), and tan(). The trigonometric functions return angles in radians which 
   can then be converted into degrees if you divide the number by (pi/ 180). 
   
   Example: Math Object to Create Random Numbers: This example is designed to generate a random whole number between 
   1 and 10. The Math object's random() method generates a random number between 0 and 1 (with many decimal places).
To get a random whole number between 1 and 10, you need to multiply the randomly generated number by 10. This number 
will still have many decimal places, so you can round it down to the nearest integer. The floor() method is used
to specifically round a number down (rather than up or down). This will give you a value between 0 and 9. You 
then add 1 to make it a number between 1 and 10. ****/

var randomNum = Math.floor ((Math.random() * 10) + 1);

var el = document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';