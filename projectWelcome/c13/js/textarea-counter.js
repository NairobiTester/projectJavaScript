/**  TEXT AREA - In this example, users can enter a biography of up to 140 characters. When the cursor is in the textarea, a <span> element 
will be shown with a count of how many characters the user has remaining. When the textarea loses focus, this message is hidden.

1. Place the script in an llFE.
2. The script sets up two variables to hold: a reference to the <textarea> element and a reference to the <span> that holds the message.
3. Two event listeners monitor the <textarea>. The first checks for when the element gains focus; the second checks for a input event. Both 
events trigger a function called updateCounter() (6-11). The input event does not work in IE8, but you can use keyup to support older browsers.
4 . A third event listener triggers an anonymous function when the user leaves the <textarea>.
5. If the number of characters is less than or equal to 140 characters, the length of the bio is okay, and it hides the message (because it is 
not needed when the user is not interacting with the element).
6. The updateCounter() function is declared.
7. It gets a reference to the element that called it.
8. A variable called count holds the number of characters left to use (it does this by subtracting the number of characters used from 140).
9. if...else statements are used to set the CSS class for the element that holds the message (these can also show the message if it was hidden).
10. A variable called charMsg is created to store the message that will be shown to the user.
11. The message is added to the page. 

CHARACTER COUNTER ***/

(function () {
    var bio = document.getElementById('bio'); // <textarea> element
    var bioCount = document.getElementById('bio-count'); // Character count el

    addEvent(bio, 'focus', updateCounter);    // Call updateCounter() on focus
    addEvent(bio, 'input', updateCounter);    // Call updateCounter() on input

    addEvent(bio, 'blur', function() {        // On leaving the element
        if (bio.value.length <= 140) {        // If bio is not too long
            bioCount.className = 'hide';      // Hide the counter
        }
    });
    function updateCounter(e) {
        var target = e.target || e.srcElement;  // Get the target of the event
        var count = 140 - target.value.length;  // How many characters are left
        if (count < 0) {                    // If less than 0 chars free
            bioCount.className = 'error';   // Add class of error          
        } else if ( count <= 15) {          // If less than 15 characters free
            bioCount.className = 'warn';    // Add class of warn
        } else {                            // Otherwise
            bioCount.className = 'good';    // Add class of good
        }
        var charMsg = '<b>' + count + '</b>' + 'characters';   // Message to display
        bioCount.innerHTML = charMsg;       // Update the counter element
    }
}());

