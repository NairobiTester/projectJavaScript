/*** FILTERED IMAGE GALLERY 
IMAGES ARE TAGGED - In this example, a series of photos are tagged. The tags are stored in an HTML attribute called data-tags on each of the
<img> elements. HTML5 allows you to store any data with an element using an attribute that starts with the word data-. The tags are 
comma-separated. 
TAGGED OBJECT - The script creates an object called tagged. The script then goes through each of the images looking at its tags. Each tag
is added as a property of the tagged object. The value of that property is an array holding a reference to each <img> element that uses that 
tag.
FILTER BUTTONS - By looping through each of the keys on the tagged object, the buttons can automatically be generated. The tag counts come
from the length of the array. Each button is given an event handler. When clicked, it filters the images and only shows those with the tag the
user selected. 

Below, you can see the tagged object for the HTML sample used in this example. For each new tag in the images' data-tags attribute, a property
is created on the tagged object. Here it has five properties: animators, designers, filmmakers, illustrators, and photographers. The value is 
an array of images that use that tag. 

    tagged = {
        animators: [p1.jpg, p6.jpg, p9.jpg],
        designers: [p4.jpg, p6.jpg, p8.jpg]
        filmmakers: [p2.jpg, p3.jpg, p5.jpg]
        illustrators: [p1.jpg, p9.Jpg]
        photographers: [p2.jpg, p3.jpg, p7.jpg] 
    }
The following script loops through the images and the tagged object is given a new property for each tag. The value of each property is an 
array holding the images with that tag. 

**/
(function() {

    var $imgs = $('#gallery img');      // Store all images
    var $buttons = $('#buttons');       // Store buttons element
    var tagged = {};                    // Create tagged object

    $imgs.each(function() {             // Loop through images
        var img = this;                 // Store img in variable
        var tags = $(this).data('tags'); // Get this element's tags

        if (tags) {                      // If the element had tags
            tags.split(',').forEach(function(tagName) { // Split at comma and
                if (tagged[tagName] == null) {          // If object doesn't have tag
                    tagged[tagName] = [];               // Add empty array to object
                }
                tagged[tagName].push(img);              // Add the image to the array
            });
        }
    });
    // Buttons, event handlers, and filters go here
       $('<button/>', {                 // Create empty button
        text: 'Show All',               // Add text 'show all'
        class: 'active',                // Make it active
        click: function() {             // Add onclick handler to it
            $(this)                     // Get the clicked on button
                .addClass('active')     // Add the class of active
                .siblings()             // Get its siblings
                .removeClass('active'); // Remove active from them
              $imgs.show();             // Show all images
        }
    }).appendTo($buttons);              // Add to buttons

    $.each(tagged, function(tagName){   // For each tag name
        $('<button/>', {                // Create empty button
            text: tagName + '(' + tagged[tagName].length + ')',    // Add tag name
            click: function() {         // Add click handler
                $(this)                 // The button clicked on
                    .addClass('active') // Make clicked item active
                    .siblings()         // Get its siblings
                    .removeClass('active'); // Remove active from them
                $imgs                       // With all of the images
                    .hide()                 // Hide them
                    .filter(tagged[tagName]) // Find ones with this tag
                    .show();                 // Show just those images
            }
        }).appendTo($buttons);               // Add to the buttons
    });

    } ());