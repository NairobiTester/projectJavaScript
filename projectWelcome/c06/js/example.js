/***EXAMPLE EVENTS - This example shows an interface for a user to record voice notes. The user can enter a name which is
 displayed in the heading, and they can press record (which changes the image that is shown). When the user starts typing
 a name into the text box, the keyup event will trigger a function called writelabel() which copies the text from
the form input and writes it into the main heading under the logo for List King, replacing the words 'AUDIO NOTE'.
The record/pause button is a bit more interesting. The button has an attribute called data-state. When the page loads, 
its value is record. When the user presses the button, the value of this attribute changes to pause (this triggers a 
new CSS rule to indicate that it is now recording). If you have not used HTML5's data- attributes, they allow you to 
store custom data on any HTML element. (The name of the attribute can be anything starting with data- as long as the name 
is lowercase.) This demonstrates a new technique based upon event delegation. The event listener is placed upon the 
containing element whose id is buttons. The event object is used to determine the value of the id attribute on the 
element that was used. The value from that id attribute is then used in a switch statement to decide which function to 
call (depending on whether the button is in record state or pause state). This is a good way to handle many buttons
because it reduces the number of event listeners in your code. The event listeners are written at the bottom of the page,
and they have fallbacks for users who are running IE8 or less (which has a different event model). 
The script starts by defining the variables that it will need to use, and then collecting the element nodes that are 
needed. The player functions would appear next, and at the bottom, you can see the event listeners. The event listeners live 
inside a conditional statement so that the attachEvent() method can be used for visitors who have IE8 or less. 

The recorderControls() function is automatically passed the event object. Not only does this offer code to support older 
versions of IE, but also stops the link from performing its default behavior (of taking the user to a new page).
The switch statement is used to indicate which function to run depending on whether the user is trying to record or stop 
the audio note. This technique of delegation is a good way to cope with multiple buttons in the UI.  See well organized 
code in example1.js **/

var noteInput, noteName, textEntered, target;        // Declare variables

noteName = document.getElementById('noteName'); // Element that holds note
noteInput = document.getElementById('noteInput');

function writeLabel(e)  {   // Declare function
    if (!e) {               // If event object not present
        e = window.event;      //   Use IE5-8 fallback
    }
    target = e.target || e.srcElement;  // Get target of event
    textEntered = e.target.value;       // Value of that element
    noteName.textContent = textEntered;     // Update note text
}

// This is where the record / pause controls and functions go...

if (document.addEventListener) {    // If event listener supported
    document.addEventListener('click', function(e) {    // For any click document
        recorderControls(e);        // Call recorderControls()
    }, false);                  // Capture during bubble phase
// If input event fires on noteInput input call writeLabel ()
noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function(e){ // IE fallback: any click
        recorderControls(e);            // Calls recorderControls()
    });
// If keyup event fires on noteInput input call writeLabel()
noteInput.attachEvent('onkeyup', writeLabel, false);

}

function recorderControls(e)    { // Declare recorderControls()
    if (!e) {               // If event object not present
        e = window.event;   // Use IE5-8 fallback
    }
    target = e.target || e.srcElement; // Get the target element
    if (e.preventDefault) {     // If preventDefault() supported
        e.preventDefault();      // Stop default action
    } else {                    // Otherwise
        e.returnValue = false;  // IE fallback: stop default action
    }
switch(target.getAttribute('data-state')) { // Get the data-state attribute
    case 'record':      // If its value is record
        record(target); // Call the record() function
        break;          // Exit function to where called
    case 'stop':        // If its value is stop
        stop(target);   // Call the stop() function
        break;          // Exit function to where called
        // More buttons could go here...
    }
};

function record(target) {           // Declare function
  target.setAttribute('data-state', 'stop');  // Set data-state attr to stop
  target.textContent = 'stop';            // Set text to 'stop'  

}
function stop(target) {           // Declare function
    target.setAttribute('data-state', 'record');  // Set data-state attr to record
    target.textContent = 'record';            // Set text to 'record'  
  
}
