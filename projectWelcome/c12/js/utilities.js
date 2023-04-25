/*** FORM ENHANCEMENT AND VALIDATION - Forms allow you to collect information from visitors, and JavaScript can help you get the right 
information from them. Since JavaScript was created, it has been used to enhance and validate forms. Enhancements make forms easier to use. 
Validation checks whether the user has provided the right information before submitting the form (if not, it provides feedback to the user).
Thus the following three things will be considered: 

FORM ENHANCEMENT - The examples of form enhancements will introduce the different properties and methods you can use when working with 
form elements. 
HTML5 FORM ELEMENTS - Contains validation features that do no use JavaScript
FORM VALIDATION

HELPER FUNCTIONS - A JavaScript file is created to handle cross-browser issues, it will contain one helper function to create events. Instead 
of writing the same fallback code every time you need an event handler, you can write the fallback code once in a helper function, and then call
that function every time you need to add an event handler to a page. In the following code example, you can see a function called add Event(). 
It lives in a file called utilities.js. Once that file has been included in the HTML page, any scripts included after it will be able to use 
this function to create cross-browser event handler:

addEvent(el, event, callback); 

The function takes three parameters:
i) el is a DOM node representing the element that the event will be added to or removed from.
ii) event is the type of event being listened for.
iii) callback is the function that is to be run when the event is triggered on that element.
The utilities.js file on the website also has a method to remove events. 
***/