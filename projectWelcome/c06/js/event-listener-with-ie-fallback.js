/* FALLBACK FOR USING EVENT LISTENERS IN IE8 - This event handling code contains the fallback for Internet Explorer 5-8. 
After the checkUsername() function, an if statement checks whether addEventListener() is supported or not; it returns 
true if the element node supports this method, and false if it does not. If the browser supports the addEventListener()
method, the code inside the first set of curly braces is run using addEventListener(). If it is not supported, then the 
browser will use the attachEvent() method that older versions of IE will understand. In the IE version, note that the
event name must be preceded by the word "on."  If you need to support IE8 (or older), instead of writing this fallback 
code for every event you are responding to, it is better to write your own function (known as a helper function) that 
creates the appropriate event handler for you (covered in form enhancement and validation.). This is another type of 
cross-browser inconsistency that jQuery can take care of for you */

var elUsername = document.getElementById('username');   // Get username input
var elMsg = document.getElementById('feedback');    // Get feedback element

function checkUsername(minLength){  //Declare function
    if (elUsername.value.length < minLength){   // If username too short
        // set message
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';      

    }
    else{                       // Otherwise
        elMsg.innerHTML = '';       // Clear message
    }

}

if (elUsername.addEventListener) {  // If event listener supported
    elUsername.addEventListener('blur', function(){ // When username looses focus
        checkUsername(6);       // Call checkUsername()
    }, false );                 // Capture during bubble phase

}
else {                          // Otherwise
    elUsername.attachEvent('onblur', function(){    // IE fallback: onblur
        checkUsername(6);                           // Call checkUsername
    });
}