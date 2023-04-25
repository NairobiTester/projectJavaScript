/* SELECTING ELEMENTS USING CSS SELECTORS - querySelector() returns the first element node that
matches the CSS-style selector. querySelectorA11() returns a Nodelist of all of the matches. Both methods take a CSS
selector as their only parameter. The CSS selector syntax offers more flexibility and accuracy when selecting an 
element than just specifying a class name or a tag name, and should also be familiar to front-end web developers who 
are used to targeting elements using CSS.  */

// querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll returns a NodeList
/* The second matching element (the third list item) is selected and changed. Because the first elements's className has 
already been changed to cool in the above code, so the next element is the first item in the following code statements, 
thus els[1] returns the third list item. */

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';