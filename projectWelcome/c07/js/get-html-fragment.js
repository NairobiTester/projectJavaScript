/**
Getting ELEMENT CONTENT - The .html() and .text() methods both retrieve and update the content of elements. Here, we'll focus on how to 
retrieve element content. 

.html() - When this method is used to retrieve information from a jQuery selection, it retrieves only the HTML inside the first element in the
matched set, along with any of its descendants. For example, $('ul').html(); will return this:

    <li id="one"><em>fresh</em> figs</li>
    <li id="two">pine nuts</li>
    <li id="three">honey</li>
    <li id="four">balsamic vinegar</li>

Whereas $('li').html(); will return this:

    <em>fresh</em> figs 

=> Note how this returns only the content of the first <li> element. If you want to retrieve the value of every element, you can use 
the .each() method.

.text() -  When this method is used to retrieve the text from a jQuery selection, it returns the content from every element in the jQuery 
selection, along with the text from any descendants. For example, $('ul').text(); will return this:

    fresh figs
    pine nuts
    honey
    balsamic vinegar

Whereas $('li').text(); will return this:

    fresh figspine nutshoneybalsamic vinegar

=> Note how this returns the text content of all <li> elements (including spaces between words), but there are no spaces between the 
individual list items. To get the content from <input> or <textarea> elements, use the .val() method.

***/

/** GETTING AT CONTENT - Here, you can see variations on how the .html() and .text() methods are used on the same list 
(depending on whether <ul> or <li> elements are used in the selector). See get-text-fragment.js, get-html-node.js, get-text-node.js

The .append() method lets you add content to the page.*/

/** In this code, the selector returns the <ul> element. The .html() method gets all the HTML inside it (the four <li> elements). This is then
 appended to the end of the selection, in this case after the existing <li> elements.  ***/

var $listHTML = $('ul').html();
$('ul').append($listHTML);