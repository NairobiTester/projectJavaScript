/*  LOOPING - In plain JavaScript, if you wanted to do the same thing to several elements, you would need to write code 
to loop through all of the elements you selected. With jQuery, when a selector returns multiple elements, you can  update
all of them using the one method. There is no need to use a loop. In this code, the same value is added to the class 
attribute for all of the elements that are found using the selector. It doesn't matter if there are one or many. In this 
example, the first selector applies only to one element and the class attribute's new value triggers a CSS rule that adds 
a calendar icon to the left of it. The second selector applies to three elements. The new value added to the class 
attribute for each of these elements triggers a CSS rule that adds a heart icon on the right-hand side. The ability to 
update all of the elements in the jQuery selection is known as implicit iteration. When you want to get information from 
a series of elements, you can use the .each() method rather than writing a loop. */

$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');

// $('li#four').addClass('favorite'); //Here, the added class will only apply to the fourth item