/** FINDING ITEMS BY ORDER - Each item returned by a jQuery selector is given an index number, which can be used to filter the selection. 
The jQuery object is sometimes referred to as being an array-like object because it assigns a number to each of the elements that is returned 
by a selector. That number is an index number, which means it starts at 0. You can filter the selected elements based on this number
using methods or these additional CSS-style selectors that jQuery has added. Methods are applied to the jQuery selection, whereas selectors are 
used as part of the CSS-style selector.

FINDING ELEMENTS BY INDEX NUMBER
METHOD/ SELECTOR DESCRIPTION

.eq() - The element that matches the index number 
:lt() - Elements with an index less than the number specified
:gt() - Elements with an index greater than the number specified

USING INDEX NUMBERS - This example demonstrates how jQuery gives an index number to each of the elements in the jQuery selection. The :lt() 
    and :gt() selectors and the •eq() method are used to find elements based on their index numbers. For each of the matching elements, the 
    value of the class attributes are changed. 
 **/

$(function() {

    $('li:lt(2)').removeClass('hot'); /** The :lt() selector is used in the selector to pick list items with an index number less than 2. It
                                        removes the value hot from their class attribute. **/
    $('li').eq(0).addClass('complete'); /*** The •eq() method selects the first item (using the number 0 because the index numbers start at zero). 
                                            It adds the value of complete to the class attribute.**/
    $('li:gt(2)').addClass('cool'); /** The :gt() selector is used in the jQuery selector to pick the list items with an index number higher 
                                        than 2. It adds a value of cool to their class attribute.**/
});