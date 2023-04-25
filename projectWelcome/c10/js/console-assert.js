/**** WRITING A CONDITION - Using the console.assert() method, you can test if a condition is met, and write to the console only if the 
 expression evaluates to false.
 1. Below, when users leave an input, the code checks to see if they entered a value that is 10 or higher. If not, it will write a message to 
 the screen. 
 2. The second check looks to see if the calculated area is a numeric value. If not, then the user must have entered a value that was not a 
 number.   */

 var $form , width, height, area;
 $form  = $('#calculator');

 $('form input[type="text"]').on('blur', function() {
    // The message only shows if user has entered number less than 10
    console.assert(this.value > 10, 'User entered less than 10');
 });

 $('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    // The message only shows if user has not entered a number
    console.assert($.isNumeric(area), 'User entered non-numeric value');

    $form.append('<p>' + area + '</p>');
 });