/** THE EVENT OBJECT - USING EVENT LISTENERS WITH THE EVENT OBJECT - 
 * In this example: 1. The function is called checkLength() rather than checkUsername(). It can be used on any text input.
2. The event object is passed to the event listener. The code includes fallbacks for IE5-8(This can be done using helper
 functions to do this).
3. In order to determine which element the user was interacting with, the function uses the event object's target 
property (and for IE5-8 it uses the equivalent srcElement property). This function is now far more flexible because:
1. It can be used to check the length of any text input so long as that input is directly followed by an empty element
 that can hold a feedback message for the user. (There should not be space or carriage returns between the two elements;
 otherwise, some browsers might return a whitespace node.)
2. The code will work with IE5-8 because it tests whether the browser supports the latest features (or whether it needs 
to fall back to use older techniques).  **/

function checkLength(e, minLength) { // Declare function
    var el, elMsg;  // Declare variables
    if (!e) {        // If event object doesn't exist
        e = window.event;   // Use IE fallback
    }
    el = e.target || e.srcElement;  // Get target of event
    elMsg = el.nextSibling;         // Get its next sibling

    if (el.value.length < minLength) { // If length is too short set msg
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {                              // Otherwise
        elMsg.innerHTML = '';           // Clear message
    }
}

var elUsername = document.getElementById('username'); // Get username input
if (elUsername.addEventListener) {                      // If event listener supported
    elUsername.addEventListener('blur', function(e) {   // On blur event
        checkLength(e, 5);                           // Call checkLength()
    }, false);                                          // Capture in bubble phase

} else {                                                // Otherwise
    elUsername.attachEvent('onblur', function(e){       // IE fallback onblur
        checkLength(e, 5);                            // Call checkLength()
    });
}

