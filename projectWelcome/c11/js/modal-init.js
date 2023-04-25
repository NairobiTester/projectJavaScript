/*** A modal window is any type of content that appears "in front of" the rest of the page's content. It must be "closed" before the rest of 
 the page can be interacted with. In this example, a modal window is created when the user clicks on the heart button in the top left-hand 
 corner of the page. The modal window opens in the center of the page, allowing users to share the page on social networks. The content for the 
 modal window will typically sit within the page, but it is hidden when the page loads using CSS. JavaScript then takes that content and displays 
 it inside <div> elements that create the modal window on top of the existing page. Sometimes modal windows will dim out the rest of the page 
 behind them.  They can be designed to either appear automatically when the page has finished loading or they can be triggered by the user 
 interacting with sthe page. 

A design pattern is a term programmers use to describe a common approach to solving a range of programming tasks. This script uses the module
pattern. It is a popular way to write code that contains both public and private logic. Once the script has been included in the page, other
scripts can use its public methods: open(), close(), or center(). But users do not need to access the variables that create the HTML, so they 
remain private. 

CREATING MODALS - The modal script needs to do two things:

1. Create the HTML for the modal window
2. Return the modal object itself, which consists of  the open(), close(), and center() methods

Including the script in the HTML page does not have any visible effect (rather like including jQuery in your page does not affect the 
appearance of the page). But it does allow any other script you write to use the functionality of the modal object and call its open()
method to create a modal window (just like including jQuery script includes the jQuery object in your page and allows you to use its methods).
This means that people who use the script only need to know how to call the open() method and tell it what they want to appear in the modal 
window.

The modal-init.js file removes the share content from the HTML page. It then adds an event handler to call the modal object's open() method to
open a modal window containing the content it just removed from the page. init is short for initialize and is commonly used in the name of 
files and functions that set up a page or other part of a script. 

1. First the script gets the contents of the element that has an id attribute whose value is share-options. Note how the jQuery •detach() 
method removes this content from the page.
2. Next an event handler is set to respond to when the user clicks on the share button. When they do, an anonymous function is run.
3. The anonymous function uses the open() method of the modal object. It takes parameters in the form of an object literal:
    •content: the content to be shown in the modal window. Here it is the content of the element whose id attribute has a value of share-options.
    • width: the width of the modal window.
    • height: the height of the modal window.
Step 1 uses the .detach() method because it keeps the elements and event handlers in memory so they can be used again later. 
jQuery also has a .remove() method but it removes the items completely.
In css file, the z-index of the modal window must be very high so that it appears on top of any other content. These styles ensure the modal 
window sits on top of the page (there are more styles in the full example). 
 ***/

(function() {
    var $content = $('#share-options').detach(); // Remove modal from page

    $('#share').on('click', function() {        // Click handler to open modal
        modal.open({content: $content, width:340, height:300});
    });
} ());