/***
When you start using jQuery, the effects methods can enhance your web page with transitions and movement. Here you can see some of the
jQuery effects that show or hide elements and their content. You can animate them fading in and out, or slide them up and down. When an element
that was previously hidden is shown, faded in, or slides into view, the other elements on the page may move to make space for it. When an 
element is hidden, has been faded out, or has slid out of view, the other elements on the page can move into the space these elements took up.
Methods with toggle in their name will look at the current state of the element (whether it is visible or hidden) and will switch to the 
opposite state. Increasingly, it is possible to create animations using CSS3. They are often faster than their jQuery counterparts, but they
only work in recent browsers.  

BASIC EFFECTS
METHOD DESCRIPTION
.show() - Displays selected elements
.hide() - Hides selected elements
.toggle() - Toggles between showing and hiding selected elements
FADING EFFECTS
METHOD DESCRIPTION
. fadeln() - Fades in selected elements making them opaque
. fadeout() - Fades out selected elements making them transparent
. fadeTo() - Changes opacity of selected elements
. fadeToggle() - Hides or shows selected elements by changing their opacity (the opposite of their current state)
SLIDING EFFECTS
METHOD DESCRIPTION
.slideUp() - Shows selected elements with a sliding motion
.slideDown() - Hides selected elements with a sliding motion
.slideToggle() - Hides or shows selected elements with a sliding motion (in the opposite direction to its current state)
CUSTOM EFFECTS
METHOD DESCRIPTION
.delay() - Delays execution of subsequent items in queue
.stop() - Stops an animation if it is currently running
.animate() - Creates custom animations

BASIC EFFECTS - In this example, it appears as if list items are faded into view when the page loads. Each item is faded out when it is 
clicked on. In fact, the items are loaded normally along with the rest of the page, but then immediately hidden using JavaScript. 
Once hidden, only then are they faded into view. This is so they will still be visible in browsers that do not have JavaScript enabled. 

**/

$(function () {
    $('h2').hide().slideDown(); /*** the selector picks the <h2> element and hides it so that it can be animated in. The chosen effect to show 
    the heading is the •slideDown() method. Note how the methods are chained; there is no need to make a new selection for each of the tasks. **/    
    var $li = $('li');
/** The next three lines causes the list of items to appear one by one. Again, before they can be faded in, they must be hidden. Then the •each() 
    method is used to loop through each of the <li> elements in turn. You can see that this triggers an anonymous function. Inside the 
    anonymous function, the index property acts as a counter indicating which <li> element is the current one. The .delay() method creates a 
    pause before the list item is shown. The delay is set, multiplying the index number by 700 ms (otherwise all of the list items would appear 
    at the same time). Then it is faded in using the fadeIn() method.   */
    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700);

    });
    $li.on('click', function() { /*** This last lines create an event listener that waits for the user to click on a list item. When they do, it will fade that item out to 
                                    remove it from the list (the fade will take 700 milliseconds). **/
        $(this).fadeOut(700);
    });
});

