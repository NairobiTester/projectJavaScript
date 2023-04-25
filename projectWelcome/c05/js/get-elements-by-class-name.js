/* SELECTING ELEMENTS USING CLASS ATTRIBUTES - This example starts by looking for elements whose class attribute 
    contains hot. (The value of a class attribute can contain several class names, each separated by a space.) The
    result of this DOM query is stored in a variable called elements because it is used more than once in the example. 
    An if statement checks if the query found more than two elements. If so, the third one is selected and 
    stored in a variable called el. The class attribute of that element is then updated to say cool.
    (In turn, this triggers a new CSS style, changing the presentation of that element.) */

var elements = document.getElementsByClassName('hot'); // find hot items

if (elements.length > 2) {      // If 3 or more are found

    var el = elements[2];   // Select the third one from the NodeList
    el.className = 'cool'   // Change the value of its class attribute

}
