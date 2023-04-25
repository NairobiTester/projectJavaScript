/* Accessing and Changing a Text Node - To work with text in an element, first the element node is accessed and then its
text node. The text node has a property called node Value which returns the text in that text node.  You can also use 
the node Value property to update the content of a text node. 

This example takes the text content of the second list item and changes it from pine nuts to kale. The first line 
collects the second list item. It is stored in a variable called itemTwo. Next, the text content of that element is
stored in a variable called elText. The third line of text replaces the words 'pine nuts' with 'kale' using the
String object's replace() method. The last line uses the nodeValue property to update the content of the text node
with the updated value. */

var itemTwo = document.getElementById('two');   // Get second list item
var elText = itemTwo.firstChild.nodeValue;  // Get its text content
elText = elText.replace('pine nuts', 'kale'); // Change pine nuts to kale
itemTwo.firstChild.nodeValue = elText;  //Update the list item
