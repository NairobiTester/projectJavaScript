/*** HTML5 ELEMENTS AND ATTRIBUTES - HTML5 adds form elements and attributes to perform tasks that had previously been performed by JavaScript. 
However, their appearance can vary a lot between different browsers (especially their error messages). 

SEARCH
<input type="search "
placeholder="Search ... "
autofocus>

EMAIL, URL, PHONE
<input type="email">
<input type="url">
<input type="telephone">

NUMBER
<input type="number"
min="0"
max="10"
step="2"
value="6">

ATTRIBUTE           DESCRIPTION
autofocus           Gives focus to this element when the page is loaded
placeholder         Content of this attribute is shown in the <input > element as a hint (see p594)
required            Checks that the field has a value - could be text entered or an option selected (see p606)
min                 Minimum permitted number
max                 Maximum permitted number
step                Intervals by which numbers should increase or decrease
value               Default value for a number when the control first loads on the page
autocomplete        On by default: shows list of past entries (disable for credit card numbers/sensitive data)
pattern             Lets you to specify a regular expression to validate a value
novalidate          Used on the <form> element to disable the HTML5 built-in form validation

RANGE
<input type="range"
min="0"
max="10"
step="2"
value="6"> 

COLOR PICKER
<input type="color"> 

DATE
<input type="date">
<input type="month">
<input type="week">
<input type="time">
<input type="datetime"> 

POLYFILLS - A polyfill is a script that provides functionality you may expect a browser to support by default. For example, because older
browsers do not support the new HTML5 elements, polyfills can be used to implement a similar experience/functionality in those older browsers. 
Typically this is achieved using JavaScript or a jQuery plugin. Polyfills often come with CSS files that are used to style the functionality 
the script adds. You can find a list of polyfills for various features here: http://html5please.com

FEATURE DETECTION - Feature detection means checking whether a browser supports a feature or not. You can then decide what to do if a feature 
is, or is not, supported. The script called modernizr.js tests for browser features. Commonly, if a feature is not supported, a polyfill script
will be loaded to emulate that feature. To save loading the polyfill script into browsers that do not need it, Modernizr includes a conditional
loader; it will only load a script if the test indicates that the script is needed. Another popular conditional loader is Require.js (available
from http://requirejs.org), but it is a bit more complex when you are first starting out because it offers many other features. 

PLACEHOLDER FALBACK EXAMPLE - The HTML5 placeholder attribute lets you put words in text inputs (to replace labels or to add hints
about what to enter). When the input gains focus and the user starts typing, the text disappears. But it only works in modern browsers, so this 
script ensures that the user sees placeholder text in older browsers too. It is a basic example of a polyfill. 

1. Place the script in an llFE.
2. Check if the browser supports the HTML5 placeholder attribute. If it does, there is no need for the fallback. Use return to exit the function.
3. Find out how many forms are on the page using the length property of the forms collection.
4. Loop through each <form> element on the page and call showPlaceholder() for each one, passing it the collection of elements in that form.
5. The showPlaceholder() function is declared.
6. A for loop runs through elements in the collection.
7. An if statement checks each element to see if the element has a placeholder attribute with a value.
8. If there is no placeholder attribute, continue tells it to go on to the next element. Otherwise, it:
9. Changes the text color to gray, and sets the value of the element to be the placeholder text.
10. An event listener triggers an anonymous function when the element gains focus.
11. If the current value of the element matches the placeholder text, the value is cleared (and color changed to black).
12. An event listener triggers an anonymous function when the element loses focus.
13. If the input is empty, the placeholder text is added back in (and its color changed to gray).**/

(function () {                                          // Place code in an IIFE
    // Test: Create an input element, and see if the placeholder is supported
    if ('placeholder' in document.createElement('input')) {
        return;
    }

    var length = document.forms.length;                // Get number of forms
    for (var i = 0, l = length; i < l; i++) {          // Loop through each one
        showPlaceholder(document.forms[i].elements);   // Call showPlaceholder()
    }

    function showPlaceholder(elements) {                // Declare function
        for (var i = 0, l = elements.length; i < l; i++) {  // For each element
            var el = elements[i];                       // Store that element
            if (!el.placeholder) {                     // If no placeholder set                   
                continue;                               // Go to next element
            }                                           // Otherwise
            el.style.color = '#666666';                 // Set text to gray
            el.value = el.placeholder;                  // Add placeholder text

            addEvent(el, 'focus', function () {         // If it gains focus
                if (this.value === this.placeholder) {  // If value=placeholder
                    this.value = '';                    // Empty text input
                    this.style.color = '#000000';       // Make text black
                }
            });

            addEvent(el, 'blur', function () {          // On blur event
                if (this.value === '') {                // If the input is empty
                    this.value = this.placeholder;      // Make value placeholder
                    this.style.color = '#666666';       // Make text gray
                }
            });
        }
    }                                                   // End of for loop
}());                                                   // End showPlaceholder()
