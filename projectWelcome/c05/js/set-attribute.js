/* CREATING ATTRIBUTES & CHANGING THEIR VALUES - The className property allows you to change the value of the class 
attribute. If the attribute does not exist, it will be created and given the specified value. You have seen this 
property used throughout the chapter to update the status of the list items. Below, you can see another way to achieve 
the task. The setAttribute() method allows you to update the value of any attribute. It takes two parameters: the 
attribute name, and the value for the attribute.  When there is a property (like the class Name or id properties),
it is generally considered better to update the properties rather than use a method (because, behind the scenes, 
the method would just be setting the properties anyway). When you update the value of an attribute (especially the
class attribute) it can be used to trigger new CSS rules, and therefore change the appearance of the elements. */

var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'complete';   // Change its class attribute

var el2 = document.getElementsByTagName('li').item(3);   // Get fourth item
el2.setAttribute('class', 'cool');      // Add an attribute to it