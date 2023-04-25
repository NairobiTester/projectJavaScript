/* HTML EVENT HANDLER ATTRIBUTES (DO NOT USE, Preffered methods to use: TRADITIONAL DOM EVENT HANDLERS & DOM LEVEL 2 EVENT
LISTENERS) - Please note: This approach is now considered bad practice; however, you need to be aware of it because you 
may see it if you are looking at older code. In the HTML, the first <input> element has an attribute called onblur 
(triggered when the user leaves the element). The value of the attribute is the name of the function that it should
trigger. The value of the event handler attributes would be JavaScript. Often it would call a function that
was written either in the <head> element or a separate JavaScript file. The following are the event names as they 
apply to different elements:
    <a> elements can have onclick, onmouseover, onmouseout
    <form> elements can have onsubmit
    <input> elements for text can have onkeypress, onfocus, onblur
*/

function checkUsername(){               // Declare function
    var elMsg = document.getElementById('feedback'); // Get feedback element
    var elUsername = document.getElementById('username'); // Get username input
    if (elUsername.value.length < 9) {       // If username too short
        elMsg.textContent = 'Username must be 9 characters or more'; // Set msg
    } else {                            // Otherwise
        elMsg.textContent = '';         // Clear message
    }

}