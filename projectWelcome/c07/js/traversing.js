/***
TRAVERSING THE DOM - When you have made a jQuery selection, you can use these methods to access other element nodes relative to the 
initial selection. Each method finds elements that have a different relationship to those that are in the current selection (e.g., parents or
children of the current selection). The .find() and .closest() methods both require a CSSstyle selector as an argument. For the other methods, 
the CSSstyle selector is optional. But if a selector is provided, both the method and selector must match in order for the element to be
added to the new selection. For example, if you start with a selection that contains one list item, you could create a new selection containing 
the other items from the list using the .siblings() method. If you added a selector into the method such as this: •siblings('.important')
then it would find only siblings with a class attribute whose value included important. 

SELECTOR REQUIRED
METHOD DESCRIPTION
•find() - All elements within current selection that match selector
.closest() - Nearest ancestor (not just parent) that matches selector
SELECTOR OPTIONAL
METHOD DESCRIPTION
.parent() - Direct parent of current selection
.parents() - All parents of current selection
.children() - All children of current selection
.siblings() - All siblings of current selection
.next() - Next sibling of current element
.nextAll() - All subsequent siblings of current element
.prev() - Previous sibling of current element
.prevAll() - All previous siblings of current element

TRAVERSING - When the page loads, the list is hidden, and a link is added to the heading that indicates the users can display the list if they 
wish. The link is added inside the heading and, if the user clicks anywhere on the <h2> element, the <ul> element is faded in. Any child 
<li> elements that have a class attribute whose value is hot are also given an extra value of complete. **/
$(function() {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function() { // A click event anywhere in the <h2> element will trigger an anonymous function. 
        $h2.next()  // The •next() method is used to select the next sibling after the <h2> element, which is the <ul> element
        .fadeIn(500)  // The <ul> is faded into view.  
        .children('.hot')   /** The .children() method then selects any child elements of the <ul> element, and the selector indicates that it 
                                should pick only those whose class attribute has a value of hot. ***/
        .addClass('complete');  /*** The .addClass() method is then used on those <li> elements to add a class name of complete. This shows how 
                                        you can chain methods and traverse from one node to another. **/
        $h2.find('a').fadeOut();        /** In the last step, the •find() method can be used to select the <a> element that is a child of 
                                        the <h2> element and fade it out because the list is now being shown to the users. ***/
    });
});


