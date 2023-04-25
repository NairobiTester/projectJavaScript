/* ATTRIBUTE NODES - Once you have an element node, you can use other properties and methods on that 
element node to access and change its attributes, example: document.getElementById('one').getAttribute('class');

METHOD          DESCRIPTION 
getAttribute()  gets the value of an attribute
hasAttribute()  checks if element node has a specified attribute
setAttribute()  sets the value of an attribute
removeAttribute() removes an attribute from an element node

PROPERTY        DESCRIPTION
className       gets or sets the value of the class attribute
id              gets or sets the value of the id attribute */

/* CHECK FOR AN ATTRIBUTE AND GET ITS VALUE -  Before you work with an attribute, it is good practice to
check whether it exists. This will save resources if the attribute cannot be found. The hasAttribute() method
of any element node lets you check if an attribute exists. The attribute name is given as an argument in the
parentheses. Using hasAttribute() in an if statement like this means that the code inside the curly braces will 
run only if the attribute exists on the given element. In this example, the DOM query getElementByld() returns the
element whose id attribute has a value of one. The hasAttribute() method is used to check whether this element has
 a class attribute, and returns a Boolean. This is used with an if statement so that the code in the curly
braces will run only if the class attribute does exist. The getAttribute() method returns the value of the class
attribute, which is then written to the page.  */

var firstItem = document.getElementById('one'); // Get first list item

if (firstItem.hasAttribute('class')) {      // If it has class attribute
    var attr = firstItem.getAttribute('class'); // Get the attribute

// Add the value of the attribute after the list
var el = document.getElementById('scriptResults');
el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';

}
