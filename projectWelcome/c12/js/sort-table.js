/** In this example, the contents of a table can be reordered. Each row of the table is stored in an array. The array is then sorted when the 
 user clicks on a header. 
 
 SORT BY HEADER - When users click on a heading, it triggers an anonymous function to sort the contents of the array (which contains the table
 rows). The rows are sorted in ascending order using data in that column. Clicking the same header again will show the same column sorted in 
 descending order.
 
 DATA TYPES - Each column can contain one of the following types of data:
    • Strings
    • Time durations (mins/secs)
    • Dates
If you look at the <th> elements, the type of data used is specified in an attribute called data-sort.

COMPARE FUNCTIONS - Each type of data needs a different compare function. The compare functions will be stored as three methods of an
object called compare.

• name() sorts strings
• duration() sorts mins/secs
• date() sorts dates

COMPARE FUNCTIONS - 

1. Declare the compare object. It has three methods used to sort names, time durations, and dates.

THE name() METHOD
2. Add a method called name(). Like all compare functions, it should take two parameters: a and b.
3. Use a regular expression to remove the word 'the' from the beginning of both of the arguments that have been passed into the 
function (for more on this technique. see the bottom of the right-hand page).
4 . If the value of a is lower than that of b:
5. Return -1 (indicating that a should come before b).
6. Otherwise, if a is greater than b, return 1. Or, if they are the same, return 0. 
        return a > b ? 1 : 0
A shorthand for a conditional operator is the ternary operator. It evaluates a condition and returns one of two values. The condition is shown 
to the left of the question mark. 

The two options are shown to the right separated by a colon. If the condition returns a truthy value, the first value is returned. If the value
 is falsy, the value after the colon is returned. 

THE duration() METHOD
7. Add a method called duration(). Like all compare functions, it should take two parameters: a and b.
8. Duration is stored in minutes and seconds: mm: ss. The String object's split() method splits the string at the colon, and creates an array 
with minutes and seconds as separate entries.
9. To get the total duration in seconds, Number() converts the strings in the arrays to numbers. The minutes are multiplied by 60 and added to 
the number of seconds.
10. The value of a - b is returned.

THE date() METHOD
11. Add a method called date(). Like all compare functions, it should take two parameters: a and b.
12. Create a new Date object to represent each of the arguments passed into the method.
13. Return the value of a minus b.

In a.replace(/^the /i , '');   The replace() method is used to remove any instances of The from the start of a string. replace() works on any 
string and it takes one argument: a regular expression. It is helpful when The is not always used in a name, e.g., for band names or film 
titles. The regular expression is the first parameter of replace() method. 
    • The string you are looking for is shown between the forward slash characters.
    • The caret^ indicates that 'the' must be at the start of the string.
    • The space after 'the' indicates there must be a space after it.
    • The i indicates that the test is case insensitive.
When a match for the regular expression is found, the second parameter specifies what should take its place. In this case it is an empty string.

14. For each element that has a class attribute with a value of sortable, run the anonymous function.
15. Store the current <table> in $table.
16. Store the table body in $tbody.
17. Store the <th> elements in $controls.
18. Put each row in $tbody into an array called rows.
19. Add an event handler for when users click on a header, it should call an anonymous function.
20. $header stores that element in a jQuery object.
21. Store the value of that heading's data-sort attribute in an variable called order.
22. Declare a variable called column.
23. In the header the user clicked upon, if the class attribute has a value of ascending or descending, then it is already sorted by this column.
24. Toggle the value of that class attribute (so that it shows the other value ascending/descending).
25. Reverse the rows (stored in the rows array) using the reverse() method of the array.
26. Otherwise, if the row the user clicked on was not selected, add a class of ascending to the header.
27. Remove the class of ascending or descending from all other <th> elements on this table.
28. If the compare object has a method that matches the value of the data-type attribute for this column:
29. Get the column number using the index() method (it returns the index number of the element within a jQuery matched set). That value is 
stored in the column variable.
30. The sort() method is applied to the array of rows and will compare two rows at a time. As it compares these values:
31. The values a and b are stored in variables:
    .find() gets the <td> elements for that row.
    .eq() looks for the cell in the row whose index number matches the column variable.
    .text() gets the text from that cell.
32. The compare object is used to compare a and b. It will use the method specified in the type variable (which was collected from the
     data-sort attribute).
33. Append the rows (stored in the rows array) to the table body. **/

// THE COMPARE OBJECT
var compare = {                   // Declare compare object
    name: function(a, b) {        // Add a method called name
        a = a.replace(/^the /i, '');    // Remove The from start of parameter
        b = b.replace(/^the /i, '');    // Remove The from start of parameter

        if (a < b) {              // If value a is less than value b
            return -1;            // Return -1
        } else {                  // Otherwise
            return a > b ? 1 : 0; // If a is greater than b return 1 OR            
        }                         // If they are the same return 0
    },
    duration: function(a, b) {    // Add a method called duration
        a = a.split(':');         // Split the time at the colon
        b = b.split(':');         // Split the time at the colon

        a = Number(a[0]) * 60 + Number(a[1]); // Convert the time to seconds
        b = Number(b[0]) * 60 + Number(b[1]); // Convert the time to seconds

        return a - b;            // Return a minus b
    },
    date: function(a, b) {       // Add a method called date
        a = new Date(a);         // New Date object to hold the date
        b = new Date(b);         // New Date object to hold the date

        return a - b;            // return a minus b
    }
};

// SORTABLE TABLE SCRIPT
$('.sortable').each(function() {
    var $table = $(this);                   // This sortable table
    var $tbody = $table.find('tbody');      // store table body
    var $controls = $table.find('th');      // Store table headers
    var rows = $tbody.find('tr').toArray(); // Store array containing rows

    $controls.on('click', function() {      // When user clicks on a header
        var $header = $(this);              // Get the header
        var order = $header.data('sort');   // Get value of data-sort attribute
        var column;                         // declare variable called column

// If selected item has ascending or descending class, reverse contents
if ($header.is('.ascending') || $header.is('.descending')) {
    $header.toggleClass('ascending descending');    // Toggle to other class
    $tbody.append(rows.reverse());                  // Reverse the array
} else {
    $header.addClass('ascending');                  // Otherwise perform a sort
    // Remove asc or desc from all other headers
    $header.siblings().removeClass('ascending descending');
    if (compare.hasOwnProperty(order)) {            // If compare object has method
        column = $controls.index(this);             // Search for column's index no

        rows.sort(function(a, b) {                  // Call sort() on rows array
            a = $(a).find('td').eq(column).text();  // Get text of column in row a
            b = $(b).find('td').eq(column).text();  // Get text of column in row b
            return compare[order](a, b);            // Call compare method    
        });
        $tbody.append(rows);
    }
  }
 });
});