/****RADIO BUTTONS - This example lets users say how they heard about a website. Every time the user selects a radio button, the code checks if 
the user selected the option that says other, and one of two things happens:
• If other is selected, a text input is shown so they can add further detail.
• If the first two options are selected, the text box is hidden and its value is emptied.  

1. Place the script in an llFE.
2. The code starts out by setting up variables to hold the form, all radio buttons, the radio button for the other option, and the text input.
3. The text input is hidden. This uses JavaScript to update the class attribute so that the form still works if the user has JavaScript disabled.
4. Using a for loop, an event listener is added to each of the radio buttons. When one of them is clicked, the radioChanged() function is called.
5. The radioChanged() function is declared.
6. If other is checked, the value of the hide variable is set to be a blank string, otherwise it is set to hide.
7. The hide variable is, in turn, used to set the value of the class attribute on the text input. If it is blank, the other option is shown; if 
    it has a value of hide, the text input is hidden.
8. If the hide attribute has a value of hide, then the contents of the text input are emptied (so that the text input is blank if it is 
    shown). 
****/

(function() {
    var form, options, other, otherText, hide;              // Declare variables
    form = document.getElementById('how-heard');            // Get the form
    options = form.elements.heard;                          // Get the radio buttons
    other = document.getElementById('other');               // Other radio button
    otherText = document.getElementById('other-text');      // Other text input
    otherText.className = 'hide';                           // Hide other text input

    for (var i = [0]; i < options.length; i++) {            // Loop through radios
        addEvent(options[i], 'click', radioChanged);        // Add event listener

    }

    function radioChanged() {
        hide = other.checked ? '' : 'hide';                 // Is other checked?
        otherText.className = hide;                         // Text input visibility
        if (hide) {                                         // If text input hidden
            otherText.value = '';                           // Empty its contents
        }
    }

}());