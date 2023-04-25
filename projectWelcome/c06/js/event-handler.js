/* USING DOM EVENT HANDLERS - In this example, the event handler appears on the last line of the JavaScript. Before the 
DOM event handler, two things are put in place: 1. If you use a named function when the event fires on your chosen 
DOM node, write that function first. (You could also use an anonymous function.). 2. The DOM element node is stored in a
 variable. Here the text input (whose id attribute has a value of username) is placed into a variable called elUsername.
 When using event handlers, the event name is preceded by the word "on" (onsubmit , onchange, onfocus, onblur, 
onmouseover, onmouseout, etc). 3. On the last line of the code sample above, the event handler elUsername.onblur indicates
that the code is waiting for the blur event to fire on the element stored in the variable called elUsername.
This is followed by an equal sign, then the name of the function that will run when the event fires on that element. 
Note that there are no parentheses on the function name. This means you cannot pass arguments to this function. 
(If you want to pass arguments to a function in an event handler, see event-listener-with-parameters.js.)
*/

function checkUsername() {      // Declare function
    var elMsg = document.getElementById('feedback');   // Get feedback element
    if (this.value.length < 5) {                    // If username too short
        elMsg.textContent = 'Username must be 5 characters or more';    // Set msg
    } else {                    // Otherwise
        elMsg.textContent = ''; // Clear message
    }s
}

var elUsername = document.getElementById('username'); // Get username input
elUsername.onblur = checkUsername; // When it looses focus call checkuserName()