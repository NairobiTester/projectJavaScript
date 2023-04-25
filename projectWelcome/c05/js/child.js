/** First and Last Child.  
These properties also return inconsistent results if there is whitespace between elements. In this example, a slightly
different solution is used in the HTML - the closing tags are put next to the opening tags of the next element, making 
it a little more readable. The example starts by using the getElementsByTagName() method to select the <ul> element from
the page. From this element node, the firstChild property will return the first <li> element, and the lastChild property 
will return the last <li> element. **/

// Select a starting point and find its children
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Change the values of the children's class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');

