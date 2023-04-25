/**** SEARCH - Search is like filtering but you show only results that match a search term. In this example, you will see a technique known as
 livesearch. The alt text for the image is used for the search instead of tags.
 
 SEARCH LOOKS IN ALT TEXT OF IMAGES - This example will use the same set of photos that were used in the filter-tag example, but will implement 
 a livesearch feature. As you type, the images are narrowed down to match the search criteria. The search looks at the alt text on each image 
 and shows only <img> elements whose alt text contains the search term. 
 
 IT USES INDEXOF() TO FIND A MATCH - The indexOf() method of the String object is used to check for the search term. If it is not
found, indexOf() returns -1. Since indexOf() is case-sensitive, it is important to convert all text (both the alt text and the search term)
to lowercase (which is done using the String object's tolowerCase() function).

SEARCH A CUSTOM CACHE OBJECT - We do not want to do the case conversion for each image every time the search terms change, so an object called 
cache is created to store the text along with the image that uses that text. When the user enters something into the search box, this object
is checked rather than looking through each of the images.

For each of the images, the cache array is given a new object. 

cache = [
    {element: img, text: 'rabbit'},
    {element: img, text: 'sea'},
    {element: img, text: 'deer'},
    {element: img, text: 'new york street map'},
    {element: img, text: 'trumpet player'},
    {element: img, text: 'logo ident'},
    {element: img, text: 'bicycle japan'},
    {element: img, text: 'aqua logo'},
    {element: img, text: 'ghost'}
]

When the user types in the search box, the code will look in the text property of each object, and if it finds a match, it will show the 
corresponding image.

The following script can be divided into two key parts:
SETTING UP THE CACHE OBJECT
1. Place the script in an llFE.
2. The $imgs variable holds a jQuery selection containing the images.
3. $search holds search input.
4. The cache array is created.
5. Loop through each image in $imgs using .each(), and run an anonymous function on each one:
6. Use push() to add an object to the cache array representing that image.
7. The object's element property holds a reference to the <img> element.
8. Its text property holds the alt text. Note that two methods process the text:
    •trim() removes spaces from the start and end.
    .tolowerCase() converts it all to lowercase.

FILTERING IMAGES WHEN USER TYPES IN SEARCH BOX
9. Declare a function called filter().
10. Store the search text in a variable called query. Use .trim() and .tolowerCase() to clean the text.
11. Loop through each object in the cache array and call the same anonymous function on each:
12. A variable called index is created and set to 0.
13. If query has a value:
14. Use indexOf() to check if the search term is in the text property of this object. The result is stored in the index variable. If found, 
it will be a positive number. If not, it will be -1.
15. If the value of index is -1, set the display property of the image to none. Otherwise, setndisplay to a blank string (showing the image).
Move onto the next image (step 11).
16. Check if the browser supports the input event. (It works well in modern browsers, but is not supported in IE8 or earlier.)
17. If so, when it fires on the search box, call the filter() function.
18. Otherwise, use the input event to trigger it.     

LIVESEARCH */
(function() {                       // Lives in an IIFE
    var $imgs = $('#gallery img');  // Get the images
    var $search = $('#filter-search');  // Get the input element
    var cache = [];                 // Create an array called cache

    $imgs.each(function() {         // For each image
        cache.push({                // Add an object to the cache array
           element: this,           // This image
           text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
        });
    });

    function filter() {             // Declare filter() function
        var query = this.value.trim().toLowerCase();    // Get the query

        cache.forEach(function(img) { // For each entry in cache pass image
            var index = 0;            // Set index to 0
            if (query) {              // If there is some query text
                index = img.text.indexOf(query); // Find if query text is in there
            }

            img.element.style.display = index === -1 ? 'none' : ''; // Show / hide
        });
    }
    if ('oninput' in $search[0]){               // If browser supports input event
        $search.on('input', filter);            // Use input event to call filter()     
    } else {                                    // Otherwise
        $search.on('keyup', filter);            // Use keyup event to call filter()
    }
}());

/*** The alt text of every image and the text that the user enters into the search input are cleaned using two jQuery methods. Both are used on 
 the same selection and are chained after each other. 
 
 METHOD         USE
 trim()         Removes whitespace from start or end of string
 toLowerCase()   Converts string to lowercase letters because indexOf() is case-sensitive***/