/****   WRITING FROM THE SCRIPT TO THE CONSOLE
 
LOGGING DATA TO THE CONSOLE 
This example shows several uses of the console.log() method.
1. The first line is used to indicate the script is running.
2. Next an event handler waits for the user leaving a text input, and logs the value that they entered into that form field.

When the user submits the form, four values are displayed:
3. That the user clicked submit
4. The value in the width input
5. The value in the height input
6. The value of the area variable

They help check that you are getting the values you expect. 

The console.log() method can write several values to the console at the same time, each separated by a comma, as shown when displaying the 
height. You should always remove this kind of error handling code from your script before you use it on a live site. 
*******/

console.log('And we\'re off....');                         // Indicates script running
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {       // When input looses focus, write value to console
    console.log('You entered ', this.value);                   
});

$('#calculator').on('submit', function(e) {                // When user clicks submit
    e.preventDefault();                                    // Prevent the form submitting
    console.log('Clicked submit...');                      // Indicate button was clicked

    width = $('#width').val();
    console.log('Width ' + width);                         // Write width to console

    height = $('#height').val();
    console.log('Height ', height);                        // Write height to console

    area = width * height;
    console.log('Area: ' + area);                        // Write area to console
    
    $form.append('<p>' + area + '<p>');
})