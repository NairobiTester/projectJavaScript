/* EXAMPLE - DOCUMENT OBJECT MODEL - This example has three main aims:
1: Add a new item to the start and end of the list
Adding an item to the start of a list requires the use of a different method than adding an element to the end of the list.
2: Set a class attribute on all items
This involves looping through each of the <li> elements and updating the value of the class attribute to cool.
3: Add the number of list items to the heading
This involves four steps:
1. Reading the content of the heading
2. Counting the number of <li> elements in the page
3. Adding the number of items to the content of the heading
4. Updating the heading with this new content  

This example adds two new list items to the <ul> element: one to the end of the list and one to the start of it. The 
technique used here is DOM manipulation and there are four steps to creating a new element node and adding it to the DOM 
tree:
1. Create the element node
2. Create the text node
3. Add the text node to the element node
4 . Add the element to the DOM tree
To achieve step four, you must first specify the parent that will contain the new node. In both cases, this is the <ul> 
element. The node for this element is stored in a variable called list because it is used many times.

The append Child() method adds new nodes as a child of the parent element. It has one parameter: the new content to be 
added to the DOM tree. If the parent element already has child elements, it will be added after the last of these 
(and will therefore be the last child of the parent element).
    parent.appendChild(newltem);
(You have seen this method used several times both to add new elements to the tree and to add text nodes to element nodes.)
To add the item to the start of the list, the insertBefore() method is used. This requires one extra piece of information: the element you want to
add the new content before (the target element).
    parent.insertBefore(newltem, target); 
    */

// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0]; // Get  the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li'); // Create element
var newTextLast = document.createTextNode('Cream') // Create text node
newItemLast.appendChild(newTextLast);   // Add text node to element
list.appendChild(newItemLast);      // Add element to end of list

// ADD NEW ITEM TO START OF LIST
var newItemFirst = document.createElement('li');    // Create element
var newTextFirst = document.createTextNode('Kale'); // Create text node
newItemFirst.appendChild(newTextFirst);     // Add text node to element
list.insertBefore(newItemFirst, list.firstChild);   //Add element to list
``
/** The next step of this example is to loop through all of the elements in the list and update the value of their
class attributes, setting them to cool. This is achieved by first collecting all of the list item elements and storing 
them in a variable called list Items. A for loop is then used to go through each of them in turn. In order to tell 
how many times the loop should run, you use the length property. Finally, the code updates the heading to include
the number of list items. It updates it using the innerHTML property as opposed to the DOM manipulation techniques used
earlier in the script. This demonstrates how you can add to the content of an existing element by reading its current 
value and adding to it. You could use a similar technique if you needed to add a value to an attribute - without
overwriting its existing value. To update the heading with the number of items in the list, you need two pieces of 
information:
1. The original content of the heading so that you can add the number of list items to it. It is collected using the 
node Value property (although innerHTML or text Content would do the same).
2. The number of list items, which can be found using the length property on the list Items variable. With this 
information ready, there are two steps to updating the content of the <h2> element:
    1. Creating the new heading and storing it in a variable - the new heading will be made up of the original heading 
    content, followed by the number of items in the list.
    2. Updating the heading, which is done by updating the content of the heading element using the innerText property of
     that node. ***/

var listItems = document.querySelectorAll('li');    // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                      // Counter variable
for (i = 0; i < listItems.length; i++) {    // Loop through elements
    listItems[i].className = 'cool';        // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text,  NB: instead of .firstChild.nodeValue, you can use .innerHTML or .innerText
var totalItems = listItems.length;      // No. of <li> elements
var newHeading = headingText + ' ' + totalItems ; // Content
heading.textContent = newHeading;       // Update h2, NB: instead of .textContent, you can use  .innerHTML or .innerText