// Creating an array using a constructor
//Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array('white', 
                       'black',
                       'custom');

// Show the first item from the array.
var el = document.getElementById('colors');
el.textContent = colors[2];
