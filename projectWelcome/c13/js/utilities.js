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
This utilities.js file also has a method to remove events. 

If you look inside the addEvent() method on the right-hand page, a conditional statement checks whether the browser supports addEventListener().
If it does, a standard event listener will be added. If not, then the IE fallback will be created.
The fallback addresses three points:
• It uses IE's the attachEvent() method.
• In IE5-8, the event object is not automatically passed into the event-handling function (and is not available via the this keyword).
Instead it is available on the window object. So the code must pass the event object into the event handler as a parameter.
• When you pass parameters to an event-handling function, the call must be wrapped in an anonymous function. To achieve this, the fallback adds 
two methods to the element the event handler will be placed upon. It then uses IE's attachEvent() method to add the event handler code to the 
element.  The functions demonstrate two new techniques:
• Adding new methods to DOM nodes: You can add methods to DOM nodes because they are just objects (that represent elements).
• Creating method names using a variable: Square brackets can be used to set a property/ method, their content is evaluated into a string.

1. The addEvent() function is declared with three parameters: element, event type, callback function.
2. A conditional statement checks if the element supports the addEventListener() method.
3. If it does, then addEventListener() is used.
4. If not, the fallback code will run instead. The fallback must add two methods to the element the event handler will be placed upon. It then 
uses Internet Explorer's attachEvent() method to call them when the event occurs on that element.
5. The first method added to the element is the code that should run when the event occurs on this element (it was the third parameter of the 
    function).
6. The second method calls the method from the previous step. It is needed in order to pass the event object to the function in the previous step.
7. The attachEvent() method is used to listen for the specified event, on the specified element. When the event fires, it calls the method that 
it added in the previous step, which in turn calls the method in the step above this one using the correct reference to the event object.
See (http://ejohn.org/projects/flexiblejavascript-events/). 
***/
// HELPER FUNCTION TO ADD AN EVENT LISTENER
function addEvent(el, event, callback) {
    if ('addEventListener' in el) {                     // If addEventListener works
        el.addEventListener(event, callback, false);    // Use it
    } else {
        el['e' + event + callback] = callback;          // Make callback a method of el
        el[event + callback] = function() {             // Add second method
            el['e' + event + callback](window.event);   // Use it to call prev function
        };
        el.attachEvent('on' + event, el[event + callback]); // Use attachEvent()
    }                   // to call the second function, which then calls the first one
}

// Helper function to remove an event listener
function removeEvent(el, event, callback) {
    if ('removeEventListener' in el) {                  // If removeEventListener
        el.removeEventListener(event, callback, false); // Use it
    } else {                                            // Otherwise
        el.detachEvent('on' + event, el[event + callback]); // Create IE fallback
        el[event + callback] = null;
        el['e' + event + callback] = null;
    }
}