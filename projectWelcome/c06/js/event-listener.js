/* USING EVENT LISTENERS - In this example, the event listener appears on the last line of the JavaScript. Before
you write an event listener, two things are put in place:  1. If you use a named function when the event fires on your
chosen DOM node, write that function first. (You could also use an anonymous function.). 2. The DOM element node(s) is
stored in a variable. Here the text input (whose id attribute has a value of username) is placed into a variable called 
elUsername.

The addEventlistener() method takes three properties: i) The event you want it to listen for. In this case, the blur event.
ii) The code that you want it to run when the event fires. In this example, it is the checkUsername() function. Note
that the parentheses are omitted where the function is called because they would indicate that the function should run as
the page loads (rather than when the event fires).
iii) A Boolean indicating how events flow, see event-flow.js.(This is usually set to false.) . If you need to remove an 
event listener, there is a function called removeEventListener() which removes the event listener from the specified 
element (it has the same parameters). */

function checkUsername() {              // Declare function
    var elMsg = document.getElementById('feedback');    // Get feedback element
    if (this.value.length < 5) {    // if username too short
        elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
    }
    else {
        elMsg.textContent = ''; // Clear msg
    }

}

var elUsername = document.getElementById('username'); // Get username input
//When it looses focus, call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
