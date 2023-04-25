/* KEYBOARD EVENTS - WHICH KEY WAS PRESSED - In this example, the <textarea> element should only have 180
characters. When the user enters text, the script will show them how many characters they have left available to use.
The event listener checks for the keyup event on the <textarea> element. Each time it fires, the charCount() 
function updates the character count and shows the last character used (in ASCII). The input event would work well to update the 
count when the user pastes in text or uses keys like backspace, but it does not tell you which key was the last to
be pressed. 

WHICH KEY WAS PRESSED? -   When you use the keydown or keyup events, the event object has a property called keyCode, 
which can be used to tell which key was pressed. However, it does not return the letter for that key (as you might
expect); it returns an ASCII code that represents the lowercase character for that key. You can see a table of the 
characters and their ASCII codes online at www.javascriptbook.com. If you want to get the letter or number as it would
be displayed on the keyboard (rather than an ASCII equivalent), the String object has a built-in method called 
fromCharCode() which will do the conversion for you: String.fromCharCode(event.keycode);*/

/* NB: This code works only in internet explorer (including when keyup is replaced with keypress), SOLVE OUT why it doesn't work on 
other browsers like chrome or edge */

var el;                                                    // Declare variables

function charCount(e) {                                    // Declare function
  var textEntered, charDisplay, counter, lastkey;          // Declare variables
  textEntered = document.getElementById('message').value;  // User's text
  charDisplay = document.getElementById('charactersLeft'); // Counter element
  counter = (180 - (textEntered.length));                  // Num of chars left
  charDisplay.textContent = counter;                       // Show chars left
  lastkey = document.getElementById('lastKey');            // Get last key elem
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; /*Create msg, use String.fromCharCode(e.keyCode); to 
                                                        convert from ASCII to letter as displayed by the keyboard. */
}
el = document.getElementById('message');                   // Get msg element
el.addEventListener('keyup', charCount, false); // on keyup - call charCount()