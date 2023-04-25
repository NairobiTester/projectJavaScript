/** If you want to use more than one jQuery method on the same selection of elements, you can list several methods at a time using dot 
notation to separate each one, as shown below. In this one statement, three methods act on the same selection of elements: hide() hides 
the elements, delay() creates a pause, fadeIn() fades in the elements. The process of placing several methods in the same selector is
referred to as chaining. As you can see, it results in code that is far more compact. 
To make your code easier to read, you can place each new method on a new line:

$('li[id!="one"]')
.hide()
.delay(500)
.fadeIn(1400);

Each line starts with the dot notation, and the semicolon at the end of the statement indicates that you have finished working with this 
selection. Most methods used to update the jQuery selection can be chained. However the methods that retrieve information from the 
DOM (or about the browser) cannot be chained. It is worth noting that if one method in the chain does not work, the rest will not run either. 
**/

$('li[id!="one"]').hide().delay(550).fadeIn(1650);