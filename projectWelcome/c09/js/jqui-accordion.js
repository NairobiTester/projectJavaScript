
/*** jQUERY UI - The jQuery foundation maintain its own set of jQuery plugins called jQuery UI. They help create user interfaces. 
WHAT JQUERY UI DOES - jQuery UI is a suite of jQuery plugins that extends jQuery with a set of methods to create:
• Widgets (such as accordions and tabs)
• Effects (that make elements appear and disappear)
• Interactions (such as drag and drop functionality)

jQuery UI not only provides JavaScript you can use, but it also comes with a set of themes that help control how the plugins look on the page.
If you want fine-grained control over how the jQuery plugins look in the browser, you can also use the theme roller, which gives you more 
precise control over the appearance of the elements.

Once you have included the jQuery and jQuery UI scripts in the page, the syntax is very similar to using other jQuery methods. You create a 
jQuery selection and then call a method that will be defined in the plugin. As you will see, the jQuery UI documentation not only has to
explain the JavaScript methods and properties it uses, but also how to structure your HTML if you want to use many of its widgets and 
interactions. 

 **/

$(function() {
    $('#prizes').accordion();
  });
