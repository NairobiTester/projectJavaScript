/***** HIDE PARENTAL CONSENT -  the subscription form (validation.js) uses two extra scripts to enhance the user experience. Here is the first; 
it does two things:
• Uses the jQuery UI date picker to show a consistent date picker across browsers
• Checks whether the parental consent checkbox should be shown when the user leaves the date input (it does this if they are under 13) 

1. Place the script in an llFE.
2. Three jQuery selections store the input where users enter their birthday, the consent checkbox, and the container for the consent checkbox.
3. The jQuery selection for the date of birth input is converted from a date input to a text input so that it does not conflict with HTML5 date 
picker functionality (done using the jQuery•prop() method to alter the value of its type attribute). The selection uses •data() to note that it 
is a date input and jQuery Ul's .datepicker() method to create the jQuery UI date picker.
4. When the user leaves the date input, the checkDate() function is called.
5. The checkDate() function is declared.
6. A variable called dob is created to hold the date the user selected. The date is converted into an array of three values (month, day, 
    and year) using the split() method of the String object.
7. toggleParentsConsent() is called. It has one parameter: the date of birth. It is passed into the function as a Date object.
8. toggleParentsConsent() is declared.
9. Inside the function, it checks the date is a number. If not, return indicates the function should stop.
10. The current time is obtained by creating a new Date object (the current time is the default value of a new Date object). It is stored in a 
variable called now.
11. To find the user's age, the date of birth is subtracted from the current date. For simplicity, leap years are ignored. If that is less than 
    13 years:
12. Show the container for the parental consent.
13. Otherwise, the container of the consent box is hidden, and the checkbox is unchecked. 
***/
(function() {
    var $birth = $('#birthday');                        // D-O-B input
    var $parentsConsent = $('#parents-consent');        // Consent checkbox
    var $consentContainer = $('#consent-container');    // Checkbox container

    // Create the date picker using jQuery UI
    $birth.prop('type', 'text').data('type', 'date').datepicker({
        dateFormat: 'yy-mm-dd'
    });

    $birth.on('blur change', checkDate);                // D-O-B looses focus

    function checkDate(){                               // Declare checkDate()
        var dob = this.value.split('-');                // Array from date
        // Pass toggleParentsConsent() the date of birth as a date object
        toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
    }

    function toggleParentsConsent(date) {               // Declare function
        if (isNaN(date)) return;                        // Stop if date invalid
        var now = new Date();                           // New date obj: today
    // If difference is less than 13 years (ms * seconds * mins * hours * days * years)
    // does not account for leap years!
    // if the user is less than 13 we show parents consent tickbox
    if((now - date) < (1000 * 60 * 60 * 24 * 365 * 13 )) {
        $consentContainer.removeClass('hide');          // Remove hide class
        $parentsConsent.focus();                        // Give it focus
        } else {                                        // Otherwise
        $consentContainer.addClass('hide');             // Add hide to class
        $parentsConsent.prop('checked', false);         // Set checked to false
        }
    }
}());