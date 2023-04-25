/**
WINDOW & PAGE DIMENSIONS -  The •height() and •width() methods can be used to determine the dimensions of both the browser window and the HTML 
document. There are also methods to get and set the position of the scroll bars.  See ..c07/images/documentWindow.jpg.

METHOD DESCRIPTION

.height() - Height of the jQuery selection
.width() - Width of the jQuery selection
.scrollLeft() - Gets the horizontal position of the scroll bar for the first element in the jQuery selection, or sets the horizontal scroll bar
position for matched nodes
.scrollTop() - Gets the vertical position of the scroll bar for the first element in the jQuery selection, or sets the vertical scroll bar 
position for matched nodes

POSITION OF THE ELEMENTS ON THE PAGE - The .offset() and .position() methods can be used to determine the position of elements on the page. 
METHOD      DESCRIPTION

.offset() -  Gets or sets coordinates of the element relative to the top left-hand corner of the document object (1)
.position() - Gets or sets coordinates of the element relative to any ancestor that has been taken out of normal flow (using CSS box offsets). 
If no ancestor is out of normal flow, it will return the same as .offset() (2) 
See ../images/positionOnPage.jpg

The two methods help you to determine the position of an element:
• Within the page .
• In relation to an ancestor that is offset from normal flow. 

To get the offset or position, store the object that is returned by these methods in a variable. Then use the left or right properties of the 
object to retrieve their position. 

var off set = $('div').offset();
var text = 'Left: ' + offset.left + ' Right: ' + offset.right; 


Each of them returns an object that has two properties:

top - the position from the top of the document or containing element.
left - the position from the left of the document or containing element.

As with other jQuery methods, when used to retrieve information, they return the co-ordinates of the first element in the matched set. If they 
are used to set the position of elements, they will update the position of all elements in the matched set (putting them in the same spot). 


DETERMINING POSITION OF ITEMS ON THE PAGE - In this example, as the user scrolls down the page, a box slides into view if they get within
500 pixels of the footer. We will call this part of the page the end zone, and you need to work out the height at which the endZone starts.
Every time the user scrolls, you then check the position of the scroll bar from the top of the page. If the scroll bar is further down the page 
than the start of the end zone, the box is animated into the page. If not, then the box is hidden.
***/
$(function() {
    var $window = $(window); // Cache the window and advert
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 500; /** The height of the end zone is calculated, and stored in a variable 
                                                                            called endZone. ***/                                                                            
    $window.on('scroll', function() { // The scroll event triggers an anonymous function every time the user scrolls up or down.  
        if (endZone < $window.scrollTop() ) { /**  A conditional statement checks if the user's position is further from the top of the page
                                                                than the start of the end zone. **/
            $slideAd.animate({ 'right': '0px' }, 250);  /**  If the condition returns true, the box slides in from the righthand edge of the 
                                                                 page. This takes 250 milliseconds. **/
        } else {
            $slideAd.stop(true).animate({'right': '-360px' }, 250); /**  If the condition is false or the box is in the middle of animating, it is 
stopped using the •stop() method. The advert then slides off the right-hand edge of the page. Again, this animation will take 250 milliseconds. 
see calculation of the end zone: ../images/calculation.jpg**/
        }
    });
});



//NB: This code only works in internet explorer. Find out why it doesn't work in other browsers like Mocrosoft Edge or Chrome.

