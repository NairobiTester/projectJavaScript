/***EVENT METHODS - The •on() method is used to handle all events. Behind the scenes, jQuery handles all of the cross-browser issues as 
 witnessed with plain javaScript. Using the .on() method is no different than using any other jQuery method; you:
    • Use a selector to create a jQuery selection.
    • Use .on() to indicate which event you want to respond to.
It adds an event listener to each element in the selection. .on() was introduced in v 1.7 of jQuery. Prior to that, jQuery used separate 
methods for each event, e.g., .click() and .focus(). You may come across them in older code, but you should only use the .on() method now. 

$('li').on('click', function() {
    $(this).addClass('complete');
}); 


In the above code, the jQuery selection contains all of the <li> elements. The .on() method is used to handle events. It needs two 
parameters: The first parameter is the event you want to respond to. Here it is the click event. The second parameter is the code you 
want to run when that event occurs on any element in the matched set. This could be a named function or an anonymous function. Above, 
it is an anonymous function that adds a value of complete to the class attribute.

JQUERY EVENTS - Some of the most popular events that •on() deals with are listed below. jQuery also added some extras to make life easier, 
such as ready, which fires when the page is ready to be worked with. These are noted with an asterisk: *
    UI - focus , blur, change
    KEYBOARD - input, keydown, keyup, keypress
    MOUSE - click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover*
    FORM - submit, select, change
    DOCUMENT - ready*, load, unload*
    BROWSER - error, resize , scroll

EVENTS - In this example, when the mouse moves over a list item, the content of its id attribute is written into the list item. The same 
happens if the user clicks on a list item (because mouseover does not work on touchscreen devices). The mouseout event also removes this 
extra information from the page to prevent the added content building up. 

The selector finds all list items on the page. The resulting jQuery object is used more than once, so it is stored in a variable called 
$listItems. The •on() method creates an event listener, which waits for when the user moves a mouse over a list item or clicks on it. It
triggers an anonymous function. Note how the two events are specified in the same set of quote marks, with a space between them. The anonymous 
function:
    • Gets the value of the id attribute on that element.
    • Removes <span> elements from all of the list items.
    • Adds the value of the id attribute to the list item in a new <span> element.
The •mouseout() method triggers the removal of any child <span> elements to prevent build-up of added values.
***/

$(function() {
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function() {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function() {
        $(this).children('span').remove();
    });

});



