/* SELECTING ELEMENTS BY TAG NAME - This example looks for any <li> elements in the document. It stores the result 
in a variable called elements because the result is used more than once in this example. An if statement checks if 
any <li> elements were found. As with any element that can return a NodeList, you check that there will be a suitable 
element before you try to work with it. If matching elements were found, the first one is selected and its class 
attribute is updated. This changes the color of the list item to make it aqua */

var elements = document.getElementsByTagName('li'); // find <li> elements

if (elements.length > 0) {          // if one or more are found

    var el = elements[0];       // Select the first one using array syntax
    el.className = 'cool';      // Change the value of the class attribute
}
