/*** CREATING A JQUERY PLUGIN - jQuery plugins allow you to add methods to jQuery without customizing the library itself. 
 * jQuery plugins have benefits over plain scripts: 
• You can perform the same task on any elements that match jQuery's flexible selector syntax
• Once the plugin has done its job, you can chain other methods after it (on the same selection)
• They facilitate re-use of code (either within one project or across multiple projects)
• They are commonly shared within the JavaScript and jQuery community
• Namespace collisions (problems when two scripts use the same variable name) are prevented by placing the script is placed in an llFE)

* You can turn any function into a plugin if it:
• Manipulates a jQuery selection
• Can return a jQuery selection

The basic concept is that you:
• Pass it a set of DOM elements in a jQuery selection
• Manipulate the DOM elements using the jQuery plugin code
• Return the jQuery object so that other functions can be chained off it 

/***THE ACCORDION PLUGIN - This example shows you how to create a jQuery plugin. It takes the earlier accordion example and turns it into a 
 plugin. The earlier version applied to all matching markup on the page; the plugin version requires that users call the accordion() method on 
 a jQuery selection. Here a jQuery selection is made collecting elements with a class of menu. The .accordion() method is called; once that has
run, .fadeIn() is called. The .accordion() method has one parameter; the speed of animation (in milliseconds). 

$('.menu').accordion(500).fadeIn();

BASIC PLUGIN STRUCTURE 

1. ADDING A METHOD TO JQUERY - jQuery has an object called •fn which helps you extend the functionality of jQuery. Plugins are written as methods
that are added to the •fn object. Parameters that can be passed to the function are placed inside the parentheses on the first line:

    $.fn.accordion = function(speed){
      //Plugin will go here 
    }
2. RETURNING THE JQUERY SELECTION TO CHAIN METHODS  - jQuery works by collecting a set of elements and storing them in a jQuery object. The 
jQuery object's methods can be used to alter the selected elements. Because jQuery lets you chain multiple methods to the same selection, once 
the plugin has done its job it should return the selection for the next method.  The selection is returned using:

  1. The return keyword (sends a value back from a function)
  2. this (refers to the selection that was passed in)

  $.fn.accordion = function(speed) {
    // Plugin will go here
    return this;
  }
3. PROTECTING THE NAMESPACE - jQuery is not the only JavaScript library to use $ as a shorthand, so the plugin code lives in an llFE, which 
creates function-level scope for the code in the plugin. On the first line below, the llFE has one named parameter: $. On the last line, you
can see that the jQuery selection is passed into the function.  Inside the plugin, $ acts like a variable name. It references the jQuery object 
containing the set of elements that the plugin is supposed to be working with.
    (function($){
      $.fn.accordion = function(speed) {
       // Plugin will go here
   }
  })(jQuery);

If you want to pass in more values, it is typically done using a single parameter called options.  When the function is called, the options 
parameter contains an object literal. The object can contain a set of key/value pairs for the different options. 

To use the plugin, you create a jQuery selection that contains any <ul> elements that hold an accordion. In the example on the right, 
the accordion is in a <ul> element that has a class name of menu (but you could use any name you wish). You then call the .accordion() method 
on that selection, like so: $('.menu').accordion(500);

1. The plugin is wrapped in an llFE to create function-level scope. On the first line, the function is given one named parameter: $ 
(which means you can use the $ shortcut for jQuery in the function).
10. On the last line of code, the jQuery object is passed into the function (using its full name jQuery rather than its shortcut $). This 
jQuery object contains the selection of elements that the plugin is working with. Together, points 1 and 10 mean that in the llFE, $ refers to 
the jQuery object and it will not be affected if other scripts use $ as a shorthand, too.
2. Inside the llFE, the new .accordion() method is created by extending the fn object. It takes the one parameter of speed. 
3. The this keyword refers to the jQuery selection that was passed into the plugin. It is used to create an event handler that will listen for 
when the user clicks on an element with a class attribute whose value is accordion-control. When the user does, the anonymous function runs to 
animate the corresponding panel into or out of view.
4. The default action of the link is prevented. 
5. In the anonymous function, $(this) refers to a jQuery object containing the element that the user clicked upon.
6. 7. 8. The only difference between this anonymous function and the one used in the accordion example at the start of the chapter is that 
the •slideToggle() method takes a parameter of speed to indicate how fast the panel should be shown or hidden. (It is specified when the 
•accordion() method is called.) 
9. When the anonymous function has done its work, the jQuery object containing the selected elements is returned from the function, allowing 
the same set of elements to be passed to another jQuery method.  ***/

(function($) {                            // Use $ as variable name
  $.fn.accordion = function(speed) {      // return the jQuery selection
    this.on('click', '.accordion-control', function(e) {
      e.preventDefault();
      $(this)
      .next('.accordion-panel')
      .not(':animated')
      .slideToggle(speed);
    });
    return this;                          // Return the jQuery selection
  }
}) (jQuery);                              // Pass in jQuery object

