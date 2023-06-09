
/*** USING MUTATION EVENTS - In this example, two event listeners each trigger their own function. The first is on the
last but one line, and it listens for when the user clicks the link to add a new list item. It then uses DOM 
manipulation events to add a new element (changing the DOM structure and triggering mutation events). The second event listener waits for the
DOM tree within the <ul> element to change. When the DOMNodelnserted event fires, it calls a function called updateCount ().This 
function counts how many items there are in the list, and then updates the list count at the top of the page accordingly.
 ***/
var elList, addLink, newEl, newText, counter, listItems; // Declare variables

elList = document.getElementById('list');   // Get list
addLink = document.querySelector('a');  // Get add item button
counter = document.getElementById('counter'); // Get item counter

function addItem(e) {     // Declare function
    e.preventDefault();  // Prevent link action
    newEl = document.createElement('li');   // New <li> element
    newText = document.createTextNode('New list item');     // New text node
    newEl.appendChild(newText);         // Add text to <li>
    elList.appendChild(newEl);          // Add <li> to list

}

function updateCount() {            // Declare function
    listItems =  list.getElementsByTagName('li').length;    // Get total of <li>s
    counter.innerHTML = listItems;          /// Update counter
}

addLink.addEventListener('click', addItem, false);  // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
























































































































































































































