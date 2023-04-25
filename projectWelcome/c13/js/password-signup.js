/**
 The second script designed to enhance the form provides feedback to the users as they leave either of the password inputs. It changes the 
 value of the class attribute for the password inputs, offering feedback to show whether or not the password is long enough and whether or not
 the value of the password and its confirmation box match.
1. Place the script in an llFE.
2. Variables store references to the password input and the password confirmation input.
3. setErrorHighlighter() function is declared.
4. It retrieves the target of the event that called it.
5. An if statement checks the value of that element. If it is less than 8 characters, that element's class attribute is given a value of 
fail. Otherwise, it is given a value of pass.
6. removeErrorHighlighter() is declared.
7. It retrieves the target of the event that called it.
8. If the value of the class attribute is fail, then the value of the class attribute is set to a blank string (clearing the error).
9. passwordsMatch() is declared (it is only called by the password confirm box).
10. It retrieves the target of the event that called it.
11. If the value of that element is the same as the first password input, its class attribute is given a value of pass; otherwise, it is given 
a value of fail.
12. Event listeners are set up: **/

(function () {
    var password = document.getElementById('password'); // Store password inputs
    var passwordConfirm = document.getElementById('conf-password');

    function setErrorHighlighter(e) {
        var target = e.target || e.srcElement;          // Get target element
        /*** To check a password between 8 to 15 characters which contain 
        at least one lowercase letter, one uppercase letter, one numeric digit, and one special character ***/
        var valid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(target.value);
        if (!valid) {                  // If it's not valid
            target.className = 'fail';                  // Set class to fail
            alert(`Please enter a valid password which must be between 8 to 15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character`); // Display alert message
        } else {                                        // Otherwise
            target.className = 'pass';                  // Set class to pass
        }
    }

    function removeErrorHighlighter(e) {
        var target = e.target || e.srcElement;          // Get target element
        if (target.className === 'fail') {              // If class shows fail
            target.className = '';                      // Clear class
        }
    }

    function passwordsMatch(e) {
        var target = e.target || e.srcElement;          // Get target element
        // If value matches pwd and it is longer than 8 characters
        if (password.value === target.value){ //&& target.value.length >= 8) {
            target.className = 'pass';                 // Set class to pass
        } else {                                       // Otherwise
            target.className = 'fail';                 // Set class to fail
            alert('Please enter a matching confirmation password');
        }

    }

    addEvent(password, 'focus', removeErrorHighlighter);
    addEvent(password, 'blur', setErrorHighlighter);
    addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
    addEvent(passwordConfirm, 'blur', passwordsMatch);
}());