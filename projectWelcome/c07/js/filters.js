/**
 ADD & FILTER ELEMENTS IN A SELECTION - Once you have a jQuery selection, you can add more elements to it, or you can filter the selection 
 to work with a subset of the elements. The •add() method allows you to add a new selection to an existing one. The table titled 'FILTERING 
 WITH A SECOND SELECTOR,' below shows you how to find a subset of your original selection. The methods take another selector as a parameter and
return a filtered matched set. The items in this table that begin with a colon can be used wherever you would use a CSSstyle selector.
The :not() and :has() selectors take another CSS-style selector as a parameter. There is also a selector called :contains() that lets you 
find elements that contain specific text. The .is() method lets you use another selector to check whether the current selection matches a 
condition. If it does, it will return true. This is helpful in conditional statements.   

ADDING ELEMENTS TO A SELECTION
METHOD    DESCRIPTION
.add() - Selects all elements that contain the text specified
            (parameter is case sensitive)

FILTERING WITH A SECOND SELECTOR
METHOD / SELECTOR DESCRIPTION
.filter() - Finds elements in matched that in turn match a second selector
.find() - Finds descendants of elements in matched set that match the selector
.not() / :not () - Finds elements that do not match the selector
.has() / :has() - Finds elements from the matched set that have a descendant that matches the selector
: contains() - Selects all elements that contain the text specified (parameter is case sensitive)

The following two selectors are equivalent:
    $('li').not('.hot').addClass('cool');
    $('li:not(.hot)'). addClass ('cool');
In browsers that support querySelector() / querySelectorAll(), :not() is faster than •not() and :has() is faster than .has()

TESTING CONTENT
METHOD DESCRIPTION
.is() - Checks whether current selection matches a conditions
(returns Boolean)

FILTERS IN USE - This example selects all list items and then uses different filters to select a subset of the items from the list to 
work with. The example uses both the filtering methods as well as the CSS-style pseudo-selector :not(). Once the filters have selected
a subset of the list items, other jQuery methods are used to update them.  **/

var $listItems = $('li');
$listItems.filter('.hot:last').removeClass('hot'); /* The .filter() method finds the last list item with a class attribute whose value is hot.
                                    It then removes that value from the class attribute.**/
$('li:not(.hot)').addClass('cool'); /***  The :not() selector is used within the jQuery selector to find <li> elements without a va1ue of hot 
                                in their class attribute and adds a value of cool. **/
$listItems.has('em').addClass('complete'); /** The •has() method finds the <li> element that has an <em> element within it and adds the value 
                                        complete to the class attribute**/
$listItems.each(function() { /***  The •each() method loops through the list items. The current element is cached in a jQuery object. The
                             •is() method looks to see if the <li> element has a class attribute whose value is hot. If it does, 
                             'Priority item: ' is added to the start of the item. ***/
    var $this = $(this);s
    if ($this.is('.hot')) {
        $this.prepend('Priority item: ');
    }
});

$('li:contains("honey")').append(' (local)');   /** The :contains selector checks for <li> elements that contain the text "honey" and appends 
                        the text " ( 1ocal)" to the end of those items. **/