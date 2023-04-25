/** JQUERY UI FORM
 1. The JavaScript is contained within the shortcut for the jQuery •ready() method. It contains the setup instructions for both of the form 
 controls.
 2. To turn a text input into a date picker, all you need to do is select the text input and then call the datepicker() method on that selection.
 3. Cache the inputs for price.
 4. The slider uses an object literal to set the properties of the .slider() method.  
 5. When the form loads, the text input that shows the amount as text needs to know the initial range for the slider. The value of that input 
 is made up of: a) A dollar sign: $ followed by the lower range value.
                b) A dash and dollar sign: - $ followed by the higher range value.
The script is called form-init.js. Programmers often use init as a shorthand for initialize; and this script is used to set an initial state for
the form.  
When a jQuery plugin has settings that vary each time it is used, it is common to pass the settings in an object literal. You can see this with
the •slider() method; it is passed several parameters and a method: 
**/

 $(function() {
    $('#arrival').datepicker();         // Turn input to JQUI datepicker

    var $amount = $('#amount');         // Cache the price input
    var $range = $('#price-range');     // Cache the <div> for the price range

    $range.slider({          // Turn price-range input into a slider
        range: true,                    // if it is a range, it gets two handles
        min:0,                          // Minimum value
        max: 400,                       // Maximum value
        values: [175, 300],             // Values to use when the page loads
        slide: function(event, ui) {    // When slider used update amount element
            $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);

        }
    });
    $amount                         // Set initial values of amount element
        .val('$' + $range.slider('values', 0) // A $ sign then lower range
        + ' - $' + $range.slider('values', 1)); // A $ sign then higher range
 })

 