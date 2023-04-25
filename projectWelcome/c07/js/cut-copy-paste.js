/**** CUTTING & COPYING ELEMENTS - Once you have a jQuery selection, you can use these methods to remove those elements or make a copy of them.
The .remove() method deletes the matched elements and all of their descendants from the DOM tree. The .detach() method also
removes the matched elements and all of their descendants from the DOM tree; however, it retains any event handlers (and any other associated 
jQuery data) so they can be inserted back into the page. The •empty() and •unwrap() methods remove elements in relation to the current selection.
The •clone() method creates a copy of the matched set of elements (and any descendants). If you use this method on HTML that contains id 
attributes, the value of the id attributes would need updating otherwise they would no longer be unique. If you want to pass any event handlers,
you should add true between the parentheses.  


CUT
METHOD DESCRIPTION

.remove() - Removes matched elements from DOM tree (including any descendants and text nodes)
.detach() - Same as .remove() but keeps a copy of them in memory
.empty() - Removes child nodes and descendants from any elements in matched set
.unwrap() - Removes parents of matched set, leaving matched elements

COPY
METHOD  DESCRIPTION
.clone() - Creates a copy of the matched set (including any descendants and text nodes) 

PASTE
As already demonstrated earlier, elements can be added using these methods: .before(), .after(), .prepend(), .append(), .appendTo(), .prependTo().
 
CUT, COPY, PASTE - In this example, you can see parts of the DOM tree being removed, duplicated, and placed elsewhere on the page. 
 The HTML has an extra <p> element after the list, which contains a quote. It is moved to a new position under the heading. In addition, the 
 first list item is detached from the list and moved to the end of it. 
 */
$(function() {
    var $p = $('p');
    var $cloneQuote = $p.clone();
    $p.remove();
    $cloneQuote.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
});