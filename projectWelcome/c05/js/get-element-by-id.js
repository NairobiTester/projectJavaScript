/* DOM - Accessing Elements
1. Methods that return a single element node:
=> getElementByld('id') - Selects an individual element given the value of its id attribute. The HTML must have 
    an id attribute in order for it to be selectable.
=> querySelector('css selector') - Uses CSS selector syntax that would select one or more elements. This method 
    returns only the first of the matching elements.
2. Methods that return one or more elements (as a nodelist)
=> getElementsByClassName('class') - Selects one or more elements given the value of their class attribute.
    The HTML must have a class attribute for it to be selectable. This method is faster than querySe1ectorA11().
=> getElementsByTagName('tagName') -  Selects all elements on the page with the specified tag name. This method is 
    faster than querySe1ectorA11().
=> querySelectorAll ('css selector') - Uses CSS selector syntax to select one or more elements and returns all
    of those that match.     
    */

/* Selecting elements using id attributes - getElementByld('id') - In this example, the first line of JavaScript 
code finds the element whose id attribute has a value of one, and stores a reference to that node in a
variable called el. The code then uses a property called className to update the value of the class attribute
of the element stored in this variable. Its value is coo1, and this triggers a new rule in the CSS that sets the 
background color of the element to aqua.*/

// select the element and store it in a variable
var el = document.getElementById('one');

// change the value of the class attribute. 
el.className = 'cool';