/***
UPDATING ELEMENTS - Here are four methods that update the content of all elements in a jQuery selection.  When the .html() and .text() methods 
are used as setters (to update content), they will replace the content of each element in the matched set (along with any content and child 
elements). The .replaceWith() and .remove() methods replace and remove the elements they match (as well as their content and any child elements).
The .html(), .text(), and .replaceWith() methods can take a string as a parameter. The string can:
`       • Be stored in a variable
        • Contain markup
When you add markup to the DOM, be sure to escape all untrusted content properly on the server. Both the .html() and .replaceWith() methods 
carry the same security risks as using the DOM's innerHTML property. 

. html() - This method gives every element in the matched set the same new content. The new content may include HTML.
. text() -  This method gives every element in the matched set the same new text content. Any markup would be shown as text.
. replaceWith() - This method replaces every element in a matched set with new content. It also returns the replaced elements.
. remove() - This method removes all of the elements in the matched set. 

USING A FUNCTION TO UPDATE CONTENT -  If you want to use and amend the content of the current selection, these methods can take a function as a 
parameter. The function can be used to create new content. Here the text from each element is placed inside <em> tags.

    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });

1. return indicates that content should be returned by the function.
2. <em> tags are placed around the text content of the list item.
3. this refers to the current list item. $(this) places that element in a new jQuery object so that you can use jQuery methods on it. ***/

/*** CHANGING CONTENT - In this example, you can see three methods that allow you to update the content of the page. When updating the content 
 of an element, you can use a string, a variable, or a function. **/

 $(function()  {
    $('li:contains("pine")').text('almonds'); /* This line selects any list items that contain the word pine. It then changes the text of 
                                 the matching element to almonds using the .text() method. */
  /** The next 3 lines select all list items whose class attribute contains the word hot, and uses the .html() method to update the content of 
    each of them. The .html() method uses a function to place the content of each element inside an <em> element. **/
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove(); /* This line selects the <li> element that has an id attribute whose value is one, then uses the remove() method to 
    remove it. (This does not require a parameter.) */
 });