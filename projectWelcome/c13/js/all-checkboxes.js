/**** CHECKBOXES - This example asks users about their interests. It has an option to select or deselect all of the checkboxes.
It has two event handlers:
• The first fires when the all checkbox is selected; it loops through the options, updating them.
• The second fires when the options change; if one is deselected, the all option must be deselected. 
You can use the change event to detect when the value of a checkbox, radio button, or select box changes. Here, it is used to tell when the 
user selects/deselects a checkbox. The checkboxes can be updated using the checked property, which corresponds with HTML's checked attribute.

1. Place the script in an llFE.
2. The form, all of the form elements, the options, and the all checkbox are stored in variables.
3. The updateAll() function is declared.
4. A loop runs through each of the options.
5. For each one, the checked property is set to the same value as the checked property on the all option.
6. An event listener waits for the user to click on the all checkbox, which fires a change event and calls the updateAll() function.
7. The clearAllOption() function is defined.
8. It gets the target of the option the user clicked on.
9. If that option is deselected, then the all option is also deselected (as they are no longer all selected).
10. A loop runs through the options, adding an event listener. When the change event happens on any of them, clearAllOption() is called. 
***/

(function() {
    var form = document.getElementById('interests'); // Get form
    var elements = form.elements;                    // All elemnts in form
    var options = elements.genre;                    // Array: genre checkboxes
    var all = document.getElementById('all');        // The 'all' checkbox

    function updateAll() {
        for (var i = 0; i < options.length; i++) {  // Loop through checkboxes
            options[i].checked = all.checked;       // Update checked property
        }
    }
    addEvent(all, 'change', updateAll);             // Add event listener

    function clearAllOption(e) {
        var target = e.target || e.srcElement;      // Get target of event
        if (!target.checked) {                      // If not checked
            all.checked = false;                    // Uncheck 'All' checkbox
        }
    }
    for (var i = 0; i < options.length; i++) {      // Loop through checkboxes
        addEvent(options[i], 'change', clearAllOption); // Add event listener
    }
}());
