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
• Return the jQuery object so that other functions can be chained off it ******/