/*** CHANGING TYPE OF INPUT - This example adds a checkbox under the password input. If the user checks that box, their password will become 
visible. It works by using JavaScript to change the type property of the input from password to text. (The type property in the DOM corresponds 
to type attribute in the HTML.) Changing the type property causes an error in IE8 (and earlier), so this code is placed in a try... catch 
statement. If the browser detects an error, the script continues to run the second code block.

1. Place the script in an llFE.
2. Put password input and checkbox in variables.
3. An event listener triggers an anonymous function when the show password checkbox is changed.
4. The target of the event (the checkbox) is stored in a variable called target. e.target will retrieve this for most browsers.
e. srcElement is only used for old versions of IE.
5. A try... catch statement checks if an error is caused when the type attribute is updated.
6. If the checkbox is selected:
7. The value of the password input's type attribute is set to text.
8. Otherwise, it is set to password.
9. If trying to change the type causes an error, the catch clause runs another code block instead.
10. It shows a message to tell the user. ***/

(function() {
    var pwd = document.getElementById('pwd');         // Get password input
    var chk = document.getElementById('showPwd');     // Get checkbox

    addEvent(chk, 'change', function(e) {             // When user clicks on checkbox
        var target = e.target || e.srcElement;        // Get that element
        try{                                          // Try the following codeblock
            if (target.checked) {                     // If the checkbox is checked
                pwd.type = 'text';                    // Set pwd type to text
            } else {                                  // Otherwise
                pwd.type = 'password';                // Set pwd type to password
            }
        } catch (error) {                             // If this causes an error
            alert('This browser cannot switch type'); // Say 'cannot switch type'
        }
    });
}());