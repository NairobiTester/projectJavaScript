/* REMOVING ATTRIBUTES - To remove an attribute from an element, first select the element, then call removeAttribute().
It has one parameter: the name of the attribute to remove. Trying to remove an attribute that does not exist will 
not cause an error, but it is good practice to check for its existence before attempting to remove it. In this example, 
the get ElementByld() method is used to retrieve the first item from this list, which has an id attribute with a 
value of one. */

var firstItem = document.getElementById('one'); // Get the first item
if (firstItem.hasAttribute('class')) {  // If it has a class attribute
    firstItem.removeAttribute('class'); // Remove its class attribute
}