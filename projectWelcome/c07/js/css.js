/** GETTING AND SETTING CSS PROPERTIES - The .css() method lets you retrieve and set the values of CSS properties. 
 
HOW TO GET A CSS PROPERTY - This will store the background color of the first list item in a variable
called backgroundCoLor. The color will be returned as an RGB value.

var backgroundColor = $('li').css('background-color');

HOW TO SET A CSS PROPERTY - This will set the background color of all list items. Note how the CSS property and its value are separated 
using a comma instead of a colon.

$('li').css('background- color', '1272727');

When dealing with dimensions that are specified in pixels, you can increase and decrease the values using the += and -= operators.

$('li').css('padding-left', '+=20');

SETTING MULTIPLE PROPERTIES - You can set multiple properties using object literal notation:
• Properties and values are placed in curly braces
• A colon is used to separate property names from their values
• A comma separates each pair (but there is not one after the last pair)
This sets the background color and typeface for all list items.

$('li').css({
'background-color': '#272727',
'font-family': 'Courier'
}); 

CHANGING CSS RULES - This example demonstrates how the •css() method can be used to select and update the CSS properties of elements. The script checks what the
background color of the first list item is when the page loads and then writes it after the list. Next, it updates several CSS properties in 
all list items using the same .css() method with object literal notation.  

Note: It is better to change the value of a class attribute (to trigger new CSS rules in the style sheet) rather than to change CSS properties 
from within the JavaScript file itself.***/

$(function () {
    var backgroundColor = $('li').css('background-color'); /** The backgroundColor variable is created. The jQuery selection contains all 
    <li> elements, and the .css() method returns the value of the background-color property of the first list item. **/    
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>'); /** The background color of the first list item is written into the page 
        using the .append() method. Here, it is used to add content after the <ul> element.  **/
/** In the next code statements, the selector picks all <li> elements, and then the •css() method updates several properties at the same time:
• The background color is changed to brown; • A white border is added; • The color of the text is changed to black; • The typeface is changed 
to Georgia; • Extra padding is added on the left ***/
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
});