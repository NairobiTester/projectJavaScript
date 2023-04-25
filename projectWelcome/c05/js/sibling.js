/* TRAVERSING THE DOM - When you have an element node, you can select another element in relation to it using these
 five properties: parentNode, previousSibling, nextSibling, firstChild, lastChild. This is known as traversing the DOM. 
parentNode - This property finds the element node for the containing (or parent) element in the HTML. (1) If you started 
with the first <li> element, then its parent node would be the one representing the <ul> element.
previousSibling, nextSibling - These properties find the previous or next sibling of a node if there are siblings. If you
started with the first <li> element, it would not have a previous sibling. However, its next sibling (2) would be the 
node representing the second <li>.
firstChild, lastChild - These properties find the first or last child of the current element. If you started with the 
<ul> element, the first child would be the node representing the first <li> element, and (3) the last child would be 
the last <li>. 
These are properties of the current node (not methods to select an element); therefore, they do not end in parentheses.
If you use these properties and they do not have a previous/next sibling, or a first/last child, the result will be null.
These properties are read-only; they can only be used to select a new node, not to update a parent, sibling, or child 
Traversing the DOM can be difficult because some browsers add a text node whenever they come across whitespace between 
elements. You could strip all the whitespace out of a page before serving it to the browser. This would also make the 
page smaller and faster to serve/load. However, it would also make the code much harder to read. 
Another way around this problem is to avoid using these DOM properties altogether. One of the most popular ways to address
this kind of problem is to use a JavaScript library such as jQuery, which helps deal with such problems.*/

/* PREVIOUS & NEXT SIBLING - From this element node, the previousSibling property will return the first <li> element,
and the next Sibling property will return the third <li> element. */

// Select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings' class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';