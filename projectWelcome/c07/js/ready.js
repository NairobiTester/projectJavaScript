/*** CHECKING IF A PAGE IS READY TO WORK WITH 
jQuery's .ready() method checks that the page is ready for your code to work with. Below, $(document) creates a jQuery object representing the 
page. When the page is ready, the function inside the parenthesis of the .ready() method is run. ***/

$(document).ready(function(){
    // Your script goes here
});

/** As with plain javaScript, if the browser has not yet created the DOM tree, jQuery will not be able to select elements from it.
 * If you place a script at the end of the page (just before the closing </body>tag), the elements will be loaded into the DOM tree.
 * If you wrap your jQuery code in the method above, it will still work when used elswhere on the page or even in another file
 * 
 * A shorthand for the above code is shown below. It is often used than the longer version.***/

$(function(){
    // Your script goes here
});

/*** This shorthand for the .ready() method is often used than $(document).ready(). A positive side-effect of writing jQuery code
 inside this method is that it creates function-level scope for its variables. This function-level scope prevents naming collisions with 
 other scripts that might use the same variable names. An statements inside the method automatically run when the page has loaded.
 
 
 THE load EVENT - jQuery had a .load() method. It fired on the load event, but has been replaced by the .on(). As demonstrated earlier,
 the load event fires after the page and all its resources (images, CSS, and scripts) have loaded. You should use this when your script
 relies on assets to have loaded, e.g., if it needs to know the dimensions of an image. It works on all browsers, and also provides 
 function-level scope for the variables it contains. 
 
 THE .ready() METHOD - jQuery's .ready() method checks if the browser supports the DOMContentLoaded event, because it fires as soon as the DOM
 has loaded (it does not wait for other assets to finish loading) and can make the page appear as if it is loading faster. If DOMContentLoaded is 
 supported, jQuery creates an event listener that responds to that event. But the event is only supported in modern browsers. In older browsers, 
 jQuery will wait for the load event to fire
 
 PLACING SCRIPTS BEFORE THE CLOSING </body> TAG - When yopu place ypour script at the end of the page (before the closing </body> tag), the
 HTML will have loaded into the DOM before the script runs. You will, however, still see people use the .ready() method because scripts that use
 it will still work if someone moves the script tag elsewhere in the HTML page. (This is particularly common when that script is beaing made 
available for other people to use.)**/