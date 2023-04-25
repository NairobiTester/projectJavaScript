/* REMOVING ELEMENTS VIA DOM MANIPULATION - DOM manipulation can be used to remove elements from the DOM tree. 

1 - STORE THE ELEMENT TO BE REMOVED IN A VARIABLE - You start by selecting the element that is going to be removed and
  store that element node in a variable. You can use any of the methods you saw in the section on DOM queries to 
  select the element.
2 - STORE THE PARENT OF THAT ELEMENT IN A VARIABLE - Next, you find the parent element that contains the element you
want to remove and store that element node in a variable. The simplest way to get this element is to use the parentNode
property of this element. 
3 - REMOVE THE ELEMENT FROM ITS CONTAINING ELEMENT - The removeChild() method is used on the containing element
that you selected in step 2. The removeChild() method takes one parameter: the reference to the element that you no 
longer want.*/

/* REMOVING AN ELEMENT FROM THE DOM TREE - This example uses the removeChild() method to remove the fourth item from 
the list (along with its contents).  The first variable, removeEl, stores the actual element you want to remove from the 
page (the fourth list item). The second variable, containerEl, stores the <ul> element that contains the element you want
to remove. The removeChild() method is used on the variable that holds the container node. It requires one parameter: the
element you want to remove (which is stored in the second variable) . */

var removeEl = document.getElementsByTagName('li')[3]; // The element to remove
var containerEl = removeEl.parentNode;  // It's containing element
containerEl.removeChild(removeEl);  // Removing the element