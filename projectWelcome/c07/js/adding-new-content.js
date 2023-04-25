/***
INSERTING ELEMENTS - Inserting new elements involves two steps:
1: Create the new elements in a jQuery object
2: Use a method to insert the content into the page 
You can create new jQuery objects to hold text and markup that you then add to the DOM tree using one of the following methods: .before(), 
.after(), .prepend(), .append().

If you create a selection that returns multiple elements, these methods will add the same content to each of the elements in the matched set.
When adding content to the DOM, make sure you have escaped all untrusted content properly on the server. (See p228 - p231 on XSS.
Book: JAVASCRIPT & JQUERY - Interactive Front-End Web Development by JON DUCKETT.) 

1: CREATING NEW ELEMENTS IN A JQUERY OBJECT - The following statement creates a variable called $newFragment and stores a jQuery object in it. 
The jQuery object is set to contain an empty

<li>element:var $newFragment = $('<li>');

The following statement creates a variable called $newItem and stores a jQuery object in it. This jQuery object in turn contains a <li> element 
with a class attribute and some text:

var $newltem = $('<li class="new">item</li>');

2: ADDING THE NEW ELEMENTS TO THE PAGE - Once you have a variable holding the new content, you can use the following methods to add the 
content to the DOM tree: 

.before() -  This method inserts content before the selected element(s).
.after() - This method inserts content after the selected element(s).
.prepend() - This method inserts content inside the selected element(s), after the opening tag.
.append() -  This method inserts content inside the selected element(s), before the closing tag.

There are also .prependTo() and .appendTo() methods. They work the other way around from •prepend() and •append(). So:

a.prepend(b) adds b to a
a.prependTo(b) adds a to b
a.append(b) adds b to a
a.appendTo(b) adds a to b

ADDING NEW CONTENT - In this example, you can see three jQuery selections are made. Each selection uses a different method to amend the content 
of the list. The first adds a new notice before the list, the second adds a + symbol before the hot items, and the third adds a new element to 
the end of the list. 
 ***/
$(function () {
    $('ul').before('<p class="notice">Just Updated</p>'); /*** The <ul> element is selected, and the •before() method is used to insert a 
                        new paragraph before the list. ***/                        
    $('li.hot').prepend('+ '); /** Selects all <li> elements whose class attribute contains a value of hot and uses the .prepend() method to 
            add a plus symbol(+) before the text.**/
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>'); // A new <li> element is created and stored in a variable.
    $('li:last').after($newListItem); // The last <li> element is selected, and the new element is added using the .after() method.
});