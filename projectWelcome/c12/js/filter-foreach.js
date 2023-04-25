/*** FILTERING, SEARCHING, AND SORTING - If your pages contain a lot of data, there are tree techniques that you can use to help your users to 
find the content they are looking for.

FILTERING - Filtering lets you reduce a set of values, by selecting the ones that meet stated criteria. 
SEARCH - Search lets you show the items that match one or more words the user specifies.
SORTING - Sorting lets you reorder a set of items on the page based on criteria (for example, alphabetically)

JAVASCRIPT ARRAY METHODS - An array is a kind of object. All arrays have the methods listed below; their property names are index numbers. You 
will often see arrays used to store complex data (including other objects). 

ADDING ITEMS    push()              Adds one or more items to end of array and returns number of items in it
                unshift()           Adds one or more items to start of array and returns new length of it
REMOVING ITEMS  pop()               Removes last element from array (and returns the element)
                shift()             Removes first element from array (and returns the element)
ITERATING       forEach()           Executes a function once for each element in array*
                some()              Checks if some elements in array pass a test specified by a function*
                every()             Checks if all elements in array pass a test specified by a function*
COMBINING       concat()            Creates new array containing this array and other arrays/values
FILTERING       filter()            Creates new array with elements that pass a test specified by a function*
REORDERING      sort()              Reorders items in array using a function (called a compare function)
                reverse()           Reverses order of items in array
MODIFYING       map()               Calls a function on each element in array & creates new array with results 

JQUERY METHODS FOR FILTERING & SORTING  - jQuery collections are array-like objects representing DOM elements. They have similar methods to an 
array for modifying the elements. You can use other jQuery methods on the selection once they have run. In addition to the jQuery methods shown 
below, you may see animation methods chained after filtering and sorting methods to create animated transitions as the user makes a selection.

ADDING OR COMBINING ITEMS     •add()        Adds elements to a set of matched elements
REMOVING ITEMS                .not()        Removes elements from a set of matched elements
ITERATING                     .each()       Applies same function to each element in matched set
FILTERING                     •filter()     Reduces number of elements in matched set to those that either match a selector or pass a test 
                                            specified by a function
CONVERTING                    .toArray()    Converts a jQuery collection to an array of DOM elements, enabling the
                                            use of the array methods shown on the left-hand page

ARRAYS VS. OBJECTS - CHOOSING THE BEST DATA STRUCTURE - In order to represent complex data you might need several objects. Groups of objects 
can be stored in arrays or as properties of other objects. When deciding which approach to use, consider how you will use the data.

OBJECTS IN AN ARRAY - When the order of the objects is important, they should be stored in an array because each item in an array is given an 
index number. (Key-value pairs in objects are not ordered.) But note that the index number can change if objects are added/removed.
Arrays also have properties and methods that help when working with a sequence of items, e.g.,
        • The sort() method reorders items in an array.
        • The length property counts the number of items.

var people = [
{name : 'Casey', rate: 70, active: true},
{name : 'Camille', rate: 80, active: true},
{name: ' Gordon', rate: 75, active: false},
{name : 'Nigel', rate: 120, active: true}
]

To retrieve data from an array of objects, you can use the index number for the object:
//This retri eves Camille's name and rate

person[1].name;
person[l].rate;

To add/remove objects in an array you use array methods.
To iterate over the items in an array you can use forEach(). 

OBJECTS AS PROPERTIES - When you want to access objects using their name, they work well as properties of another object (because you would not
need to iterate through all objects to find that object as you would in an array). But note that each property must have a unique name. For 
example, you could not have two properties both called Casey or Camille within the same object in the following code.

var people = {
Casey = {rate: 70, active: true},
Camille = {rate: 80, active: true},
Gordon= {rate: 75, active: false} ,
Nigel = {rate: 120, active: true }
}

To retrieve data from an object stored as a property of another object, you can use the object's name:
//This retrieves Casey's rate

people.Casey.rate;

To add/remove objects to an object you can use the delete keyword or set it to a blank string. To iterate over child objects you can use
Object.keys. 

FILTERING - Filtering lets you reduce a set of values. It allows you to create a subset of data that meets certain criteria. 
forEach() - The forEach() method loops through the array and applies the same function to every item in it. forEach() is very flexible because 
the function can perform any kind of processing with the items in an array (not just filtering as shown in this example). The anonymous 
function acts as a filter because it checks if a person's rates are within a specified range and, if so, adds them to a new array.
1. A new array is created to hold matching results.
2. The people array uses the forEach() method to run the same anonymous function on each object (that represents a person) in the people array.
3. If they match the criteria, they are added to the results array using the push() method. 

STATIC FILTERING OF DATA

**/

$(function() {
    // DATA ABOUT PEOPLE(FREELANCERS) AND THEIR RATES. STORE EACH PERSON AS AN OBJECT IN AN ARRAY.
    var people = [
        {
            name: 'Joe',
            rate: 60
        },
        {
            name: 'Juliet',
            rate: 80
        },
        {
            name: 'Okenochile',
            rate: 75
        },
        {
            name: 'Leon',
            rate: 120
        }
    ];
    // FILTERING CODE - CREATES A NEW ARRAY CALLED results. CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY.
    var results = [];                                   // Array for people in range
    people.forEach(function(person) {                   // For each person
        if (person.rate >= 65 && person.rate <= 90) {   // If rate in range
            results.push(person);                       // If yes add to array            
        }
    });

    // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody = $('<tbody></tbody>');              // New content jQuery
    for (var i = 0; i < results.length; i++) {          // Loop through matches
        var person = results[i];                        // Store current person
        var $row = $('<tr></tr>');                      // Create a row for them
        $row.append($('<td></td>').text(person.name));  // Add their name
        $row.append($('<td></td>').text(person.rate));  // Add their rate
        $tableBody.append($row);                        // Add row to new content
    }

    // Add the new content after the body of the page
    $('thead').after($tableBody);                   // Add tboddy after thead
});

