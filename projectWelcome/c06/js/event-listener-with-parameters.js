/** USING PARAMETERS WITH EVENT LISTENERS - The first line of this example shows the updated
checkUsername() function. The minLength parameter specifies the minimum number of characters that the username 
should be. The value that is passed into the checkUsername() function is used in the conditional statement to
check if the name is long enough, and provide feedback if the username name is too short. The event listener on the 
last three lines is longer than the previous example because the call to the checkUsername() function needs to include
the value for the minLength parameter. To receive this information, the event listener uses an anonymous function, 
which acts like a wrapper. Inside that wrapper the checkUsername() function is called, and passed an argument. **/

var elUsername = document.getElementById('username');   // Get username input
var elMsg = document.getElementById('feedback');    // Get feedback element

function checkUsername(minLength){  // Declare function
    if (elUsername.value.length < minLength){   // If username too short
        // Set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
        }
        else{                       // Otherwise
            elMsg.innerHTML ='';    // Clear message
        }

}

elUsername.addEventListener('blur', function() {    // When it loses focus
    checkUsername(5);                       // Pass arguments here
}, false);


