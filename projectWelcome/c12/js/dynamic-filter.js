/*** DYNAMIC FILTERING - If you let users filter the contents of a page, you can build all of the HTML content, and then show and hide the 
 relevant parts as the user interacts with the filters. Imagine that you were going to provide the user with a slider so that they could update 
 the price that they were prepared to pay per hour. That slider would automatically update the contents of the table based upon the price range 
 the user had specified. If you built a new table every time the user interacts with the slider (like the previous two examples of static
filtering), it would involve creating and deleting a lot of elements. Too much of this type of DOM manipulation can slow down your scripts.  
A far more efficient solution would be to:
1. Create a table row for every person.
2. Show the rows for the people that are within the specified range, and hide the rows that are outside the specified bounds.
Below, the range slider used is a jQuery plugin called noUiSlider (written by Leon Gerson) http://refreshless.com/nouislider/  

The tasks that the script needs to perform:
i) It needs to go through each object in the array and create a row for that person.
ii) Once the rows have been created, they need to be added to the table.
iii) Each row needs to be shown or hidden depending on whether that person is within the price range shown on the slider. (This task happens 
    each time the slider is updated.)
In order to decide which rows to show/hide, the code needs to cross-reference between:
• The person object in the people array (to check how much that person charges)
• The row that corresponds to that person in the table (which needs to be made visible or hidden)
To build this cross-reference we can create a new array called rows. It will hold a series of objects with two properties:
• person: a reference to the object for this person in the people array
• $element: a jQuery collection containing the corresponding row in the table

In the code, we create a function to represent each of the tasks identified above. The new crossreference array will be created in the first 
function:
    makeRows() will create a row in the table for each person and add the new object into the rows array
    append Rows() loops through the rows array and adds each of the rows to the table
    update() will determine which rows are shown or hidden based on data taken from the slider 
In addition, we will add a fourth function: init(). This function contains all of the information that needs to run when the page first loads 
(including creating the slider using the plugin). 

As the code loops through each object in the people array creating a row in the table for that person, it also creates a new object for that 
person and adds it to an array called rows. Its purpose is to create an association between:

=> The object for that person in the source data
=> The row for that person in the table

When deciding which rows to show, the code can then loop through this array checking the person's rate. If they are affordable, it can show the
row. If not, it can hide the row. This takes less resources than recreating the content of the table when the user changes the rate they are 
willing to pay.
**/

(function() {
    // People's Array
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

    var rows = [],                     // Rows array
    $min = $('#value-min'),            // Minimum text input
    $max = $('#value-max'),            // Maximum text input
    $table = $('#rates');              // The table that shows results

function makeRows() {                  // Create tables rows and the array
    people.forEach(function(person) {  // For each person object in people
        var $row = $('<tr></tr>');     // Create a row for them
        $row.append( $('<td></td>').text(person.name) );  // Add their name
        $row.append( $('<td></td>').text(person.rate) );  // Add their rate
        rows.push({   // Add object to cross-references bewteen people and rows
           person: person,             // Reference to the person object
           $element: $row              // Reference to row as jQuery selection
        });
    });
}

function appendRows() {                // Adds rows to the table
    var $tbody = $('<tbody></tbody>'); // Create <tbody> element
    rows.forEach(function(row) {       // For each object in the rows array
        $tbody.append(row.$element);   // Add the HTML for the row
    });
    $table.append($tbody);             // Add the rows to the table
}

function update(min, max) {            // Update the table content
    rows.forEach(function(row) {       // For each row in the rows array
        if (row.person.rate >= min && row.person.rate <= max) { // If in range
            row.$element.show();       // Show the row
        } else {                       // Otherwise
          row.$element.hide();         // Hide the row 
        }
    });
}

function init() {                      // Tasks when script first runs 
    $('#slider').noUiSlider({          // Set up the slide control
        range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
        serialization: { to: [$min,$max], resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                        // Create table rows and rows array
    appendRows();                      // Add the rows to the table
    update($min.val(), $max.val());    // Update table to show matches
}
$(init);                               // Call init() when DOM is ready
}());