/**
GETTING AND SETTING ATTRIBUTE VALUES - You can create attributes, or access and update their contents, using the following four methods.
NB: You can work with any attribute on any element using the attr() and removeAttr() methods. If you use the attr() method to update an 
attribute that does not exist, it will create the attribute and give it the specified value. The value of the class attribute can hold more 
than one class name (each separated by a space). The addClass() and removeClass() methods are very powerful because they let you add or remove 
an individual class name within the value of the class attribute (and they do not affect any other class names).  

.attr() - This method can get or set a specified attribute and its value. To get the value of an attribute, you specify the name of the
attribute in the parentheses.

$('li#one').attr('id');

To update the value of an attribute, you specify both the attribute name and its new value.

$('li#one').attr('id', 'hot');

.removeAttr() - This method removes a specified attribute (and its value). You just specify the name of the attribute that you want to remove 
from the element in the parentheses.

$('li#one').removeAttr('id');

.addClass() - This method adds a new value to the existing value of the class attribute. It does not overwrite existing values.

.removeClass() - This method removes a value from the class attribute, leaving any other class names within that attribute intact.

These methods are another good example of how jQuery adds helpful functionality commonly needed by web developers. 


WORKING WITH ATTRIBUTES - The statements in this example use jQuery methods to change the cLass and id attributes of the specified HTML 
elements. When the values of these attributes change, new CSS rules are applied to the elements, changing how they look. Using events to 
trigger changes to attribute values that apply new CSS rules is a popular way to make a web page interactive. **/

$(function (){
    $('li#three').removeClass('hot'); /** Finds the third list item (it has an id attribute with a value of three) and removes hot from the 
            class attribute on that element. **/
    $('li.hot').addClass('favorite'); /** Selects all <li> elements whose class attribute has a value of hot. It adds a new class name called
            favorite. Because step 1 updated the third list item, this statement affects only the first two**/
    $('ul').attr('id', 'group'); /** Selects the <ul>element and adds an id attribute, giving it a value of group (which triggers a CSS rule
                    that will add a margin and border to the <ul> element). **/
});