/** FOCUS & BLUR - In this example, as the text input gains and loses focus, feedback is shown to the user in 
 * the <div> element under the text input. The feedback is given using two functions. tipUsername() is triggered
when the text input gains focus. It changes the class attribute of the element containing the message, and updates the
contents of the element. checkUsername() is triggered when the text input loses focus. It adds a message and changes
the class if the username is less than 5 characters; otherwise, it clears the message.  **/

function checkUsername() {      // Declare function
        var username = el.value;    // Store username in variable
        if (username.length < 5) {  // If username is less 5 characters
            elMsg.className = 'warning'; // Change class on message
            elMsg.textContent = 'Not long enough, yet.....'; // update message
        } else {                        // Otherwise



            
            elMsg.textContent = '';     // Clear message
        }
}

function tipUsername() {        // Declare function
    elMsg.className = 'tip';    // Change class for message
    elMsg.innerHTML = 'Username must be atleast 5 characters'; // Add message

}

var el = document.getElementById('username'); // username input
var elMsg = document.getElementById('feedback'); // element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false); // blur call checkUsername()
