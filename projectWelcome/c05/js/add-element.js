/* ADDING AN ELEMENT TO THE DOM TREE - createElement() creates an element that can be added to the DOM tree, in this case an empty <li> element for 
the list. This new element is stored inside a variable called newEl until it is attached to the DOM tree later on.
createTextNode() allows you to create a new text node to attach to an element. It is stored in a variable called 
newText. 

The text node is added to the new element node using appendChild(). The getElementsByTagName() method selects the 
position in the DOM tree to insert the new element (the first <ul> element in the page). Finally, appendChild() is used
again - this time to insert the new element and its content into the DOM tree. */

// Create a new element and store it in a variable
var newEl = document.createElement('li');

// Create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position
position.appendChild(newEl);