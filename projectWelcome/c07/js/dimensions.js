/** BOX DIMENSIONS - These methods allow you to discover or update the width and height of all boxes on the page. CSS 
treats each element on a web page as if it were in its own box. A box can have padding, a border, and a margin. If you 
set the width or height of the box in CSS, it does not include any padding, border, or margin - they are added to the 
dimensions. The methods shown here allow you to retrieve the width and height of the first element in the matched set. 
The first two also allow you to update the dimensions of all boxes in the matched set. The remaining methods give
different measurements depending on whether you want to include padding, border, and a margin. Note how the 
.outerHeight() and •outerWidth() methods take a parameter of true if you want the margin included. When retrieving 
dimensions, these methods return a number in pixels.  

RETRIEVE OR SET BOX DIMENSIONS
METHOD DESCRIPTION
.height() - Height of box (no margin, border, padding)
.width() - Width of box (no margin, border, padding)

RETRIEVE BOX DIMENSIONS ONLY
METHOD DESCRIPTION

.innerHeight() - Height of box plus padding
.innerWidth() - Width of box plus padding
.outerHeight() - Height of box plus padding and border
.outerWidth() - Width of box plus padding and border
.outerHeight(true) - Height of box plus padding, border, and margin
.outerWidth(true) - Width of box plus padding, border, and margin
// see url ('../images/box.jpg')

CHANGING DIMENSIONS  - This example demonstrates how the .height() and .width() methods can be used to retrieve and 
    update box dimensions. The page displays the height of the container. It then changes the width of the list items 
    using percentages and pixels. 
    **/
$(function() {
    var listHeight = $('#page').height(); /**  A variable called listHeight is created to store the height of the page 
            container. It is obtained using the .height() method.  */
    $('ul').append('<p>Height: ' + listHeight + 'px</p>'); /** The height of the page is written at the end of the list
                    using the .append() method and may vary between browsers. **/
    $('li').width('50%'); /** The selector picks all the <li> elements and sets their width to 50% of their current 
                            width using the .width() method. **/
/*** These two statements set the width of the first list item to 125 pixels and the width of the second list item to be
                        75% of the width it was when the page loaded. **/
    $('li#one').width(125);
    $('li#two').width('75%');    
});

/**  Measurements in percentages or ems should be given as a string, with the suffix% or em. Pixels do not require a suffix and are not
enclosed in quotes ***/