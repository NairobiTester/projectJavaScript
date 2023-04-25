/* LOOPING THROUGH A NODELIST - If you want to apply the same code to numerous elements, looping through a Nodelist
is a powerful technique. It involves finding out how many items are in the Nodelist, and then setting a counter to 
loop through them, one-by-one. Each time the loop runs, the script checks that the counter is less than the total 
number of items in the Nodelist. 
In this example, the Nodelist is generated using querySelectorAll(),and it is looking for any <li> elements that have
a class attribute whose value is hot. The Nodelist is stored in a variable called hot Items, and the number of elements 
in the list is found using the length property. For each of the elements in the Nodelist, the value of the class 
attribute is changed to cool . */

var hotItems = document.querySelectorAll('li.hot'); // Store  NodeList in array

if (hotItems.length > 0) { // if it contains items

    for ( var i=0; i<hotItems.length; i++) { // Loop through each item
        hotItems[i].className = 'cool'; // Change value of class attribute
    }
}