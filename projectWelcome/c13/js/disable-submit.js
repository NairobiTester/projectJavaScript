/*** DISABLE SUBMIT BUTTON -  This script disables the submit button when:
• The script first loads. The change event then checks when the password changes and enables submit if the password is given a value.
• The form has been submitted (to prevent the form being sent multiple times). 
The button is disabled using the disabled property. It corresponds with the HTML disabled attribute, and can be used to disable any form 
elements that a user can interact with. A value of true disables the button; false lets the user click on it.

1. Place the script in an llFE.
2. Store the form, password input, and submit button in variables.
3. The submitted variable is known as a flag; it remembers if the form has been submitted yet.
4. The submit button is disabled at the start of the script (rather than in the HTML) so that the form can still be used if a visitor has 
JavaScript disabled.
5. An event listener waits for the input event on the password input; it triggers an anonymous function.
6. Store the target of the event in target .
7. If the password input has a value, the submit button is enabled, and (8) its style updated.
9. A second event listener checks for when the user submits the form (and runs an anonymous function).
10. If the submit button is disabled, or the form has been submitted, the subsequent code block is run.
11. The default action of the form (submitting) is prevented, and return leaves the function.
12. If step 11 did not run, the form is submitted, the submit button disabled, the submitted variable updated with a value of true, and its 
class updated.****/

(function() {
    var form = document.getElementById('newPwd');   // The form
    var password = document.getElementById('pwd');  // Password input
    var submit = document.getElementById('submit'); // Submit button

    var submitted = false;                          // Has form been submitted?

    submit.disabled = true;                         // Disable submit button                        
    submit.className = 'disabled';                  // Style submit button

    // On input: Check whether or not to enable the submit button
    addEvent(password, 'input', function(e) {               // On input of password
        var target = e.target || e.srcElement;              // Target of event
        submit.disabled = submitted || !target.value;      // Set disabled property
        // If form has been submitted or pwd has no value set CSS to disabled
        submit.className = (!target.value || submitted ) ? 'disabled' : 'enabled';
    });

    // On submit: Disable the form so it cannot be submitted again
    addEvent(form, 'submit', function(e) {              // On submit         
        if (submit.disabled || submitted) {             // If disabled OR sent
            e.preventDefault();                         // Stop form submission
            return;                                     // Stop processing function
        }                                               // Otherwise continue....
        submit.disabled = true;                         // Disable submit button
        submitted = true;                               // Update submitted var
        submit.className = 'disabled';                  // Update style

        // Demo purposes only: What would have been sent & show submit is disabled
        e.preventDefault();                             // Stop form submitting
        alert('Password is ' + password.value);         // Show text
    });
}());
