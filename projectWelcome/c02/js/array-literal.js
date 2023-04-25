// Create an array (using the preferred method, the array literal technique) and assign it values.
var colors; 
var numColors ;

colors = ['White', 'Black', 'Custom'];
numColors = colors.length; // getting the length of teh array

// Show the first item from the array plus the number of colors in the array.
var el = document.getElementById('colors');
el.textContent = colors[0] + ", No. of Colors: " + numColors;