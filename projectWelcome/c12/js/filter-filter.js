/*** STATIC FILTERING - 
 filter() - The filter() method also applies the same function to each item in the array, but that function only returns true or false. If it 
 returns true, the filter() method adds that item to a new array. The syntax is slightly simpler than forEach(), but is only meant to be used 
 to filter data.
1. A function called priceRange() is declared; it will return true if the person's wages are within the specified range.
2. A new array is created to hold matching results.
3. The filter() method applies the priceRange() function to each item in the array. If priceRange() returns true, that item is added to the 
results array. ***/

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
    // FILTERING CODE - A FUNCTIION ACTS AS FILTER 
    function priceRange(person) {                           // Declare priceRange()
        return (person.rate >= 65) && (person.rate <= 90);  // In range returns true
    };

    // FILTER THE PEOPLE ARRAY AND ADD MATCHES TO THE RESULTS ARRAY

    var results = [];                                       // Array for matching people
    results = people.filter(priceRange);                    // filter() calls priceRange()

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

