/***
WORKING WITH EACH ELEMENT IN A SELECTION - jQuery allows you to recreate the functionality of a loop on a selection of elements, using the 
•each() method.  
You have already seen several jQuery methods that update all of the elements in a matched set without the need for a loop. There are, however, 
times when you will want to loop through each of the elements in the selection. Often this will be to:
• Get information from each element in the matched set.
• Perform a series of actions on each of the elements.
The •each() method is provided for this purpose. The parameter of the •each() method is a function. This could be an anonymous function 
(as shown here) or a named function. 

• each() - Allows you to perform one or more statements on each of the items in the selection of elements that is returned by a selector - 
rather like a loop in JavaScript. It takes one parameter: a function containing the statements you want to run on each element.

this or $(this) - As the .each() method goes through the elements in a selection, you can access the current element using the this keyword.
You also often see $(this), which uses the this keyword to create a new jQuery selection containing the current element. It allows you to use 
jQuery methods on the current element. In the code statements below, the jQuery selection contains all of the <li> elements, .each() applies 
the same code to each element in the selection, an anonymous function is run for each of the items in the list. 

$('li').each(function() { 
    var ids = this.id;
    $(this).append('<em class="order">' + ids + '</em>');
}) ;

Since this refers to the current node, if you want to access a property of that node, e.g., that element's id or class attributes, it is better 
to use plain JavaScript to access those attributes:

ids= this.id; 

It is more efficient than writing ids = $(this).attr('id'); because this would involve the interpreter creating a new jQuery object, and then 
using a method to access info that is available as a property. 

USING .EACH() - This example creates a jQuery object containing all of the list items from the page. The .each() method is then
used to loop through the list items and run an anonymous function for each of them. The anonymous function takes the value from the id 
attribute on the <li> element and adds it to the text in the list item. 
**/ 
$(function() {
    $('li').each(function() { /** The selector creates a jQuery object containing all <li> elements. The •each() method calls an anonymous 
    function for each of the list items in the matched set. **/
        var ids = this.id; /** The this keyword refers to the current element node in the loop. It is used to access the value of the current 
        element's id attribute, which is stored in a variable called ids. **/
        $(this).append(' <span class="order">' + ids + '</span>'); /** $(this) is used to create a jQuery object that contains the current 
        element in the loop. Having the element in a jQuery object enables you to use jQuery methods on that element. In this case the 
        •append() method is used to add a new <span> element to the current list item. The content of that element is the value of its id 
        attribute, which was obtained in the previous step **/        
    });
    
});