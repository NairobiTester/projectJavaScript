/***** ACCESSIBILITY AND NO JAVASCRIPT - When writing any script, you should think about those who might be using a web page in different 
situations than you.

ACCESSIBILITY
Whenever a user can interact with an element:
• If it is a link, use <a>
• If it acts like a button, use a button
Both can gain focus, so users can move between the focusable elements using the Tab key (or other non-mouse solution). And although any 
element can become focusable by setting its tabindex attribute, only <a> elements and some input elements fire a click event when users press 
the Enter key on their keyboard (the ARIA role="button" attribute will not simulate this event).

NO JAVASCRIPT
For accordion menu, tabbed panels, and responsive slider, all hide some of their content by default. This content would be inaccessible to
visitors that do not have JavaScript enabled if we didn't provide alternative styling. One way to solve this is by adding a class attribute 
whose value is no-js to the opening <html> tag. This class is then removed by JavaScript (using the replace() method of the String object) 
if JavaScript is enabled. The no-js class can then be used to provide styles targeted to visitors who do not have JavaScript enabled. */

var elDocument = document.documentElement;
elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');