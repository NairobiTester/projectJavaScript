/**** THE PHOTO VIEWER is an example of an image gallery. When you click on a thumbnail, the main photograph is replaced with a new image.
When you click on a thumbnail, an event listener triggers an anonymous function that:
1. Looks at the value of the href attribute (which points to the large image)
2. Creates a new <img> element to hold that image
3. Makes it invisible
4. Adds it to the big <div> element 
Once the image has loaded, a function called crossfade() is used to fade between the existing image and the new one that has been requested.  

ASYNCHRONOUS LOADING & CACHING IMAGES - This script shows two interesting techniques:
1. Dealing with asynchronous loading of content
2. Creating a custom cache object 

SHOWING THE RIGHT IMAGE WHEN LOADING IMAGES ASYNCHRONOUSLY 
 PROBLEM: The larger images are only loaded into the page when the user clicks on a thumbnail, and the script waits for the image to fully load 
 before displaying it. Because larger images take longer to load, if a user clicks on two different images in quick succession:
1. The second image could load faster than the first one and be displayed in the browser.
2. It would be replaced by the first image the user clicked on when that image had loaded. This could make users think the wrong image has 
loaded. 

SOLUTION: When the user clicks on a thumbnail:
• A function-level variable called src stores the path to this image.
• A global variable called request is also updated with the path to this image.
• An event handler is set to call an anonymous function when this image has loaded.
When the image loads, the event handler checks if the src variable (which holds the path to this image) matches the request variable. If the 
user had clicked on another image since the one that just loaded, the request variable would no longer match the src variable and the image 
should not be shown. 

CACHING IMAGES THAT HAVE ALREADY LOADED IN THE BROWSER 
PROBLEM: When the user requests a big image (by clicking on the thumbnail), a new <img> element is created and added to the frame.
If the user goes back to look at an image they have already selected, you do not want to create a new element and load the image all over 
again.

SOLUTION: A simple object is created, and it is called cache. Every time a new <img> element is created, it will be added to the cache object.
That way, each time an image is requested, the code can check if the corresponding <img> element is already in the cache (rather than creating 
it again).

THE CACHE OBJECT - The idea of a cache object might sound complicated, but all objects are just sets of key/value pairs. You can see what the 
cache object might look like on the right. When an image is requested by clicking on a new thumbnail, a new property is added to the
cache object:
• The key added to the cache object is the path to the image (below this is referred to as src). Its value is another object with two properties.
• src.$img holds a reference to a jQuery object that contains the newly created <img> element.
• src.isloading is a property indicating whether or not it is currently loading (its value is a Boolean). 

        var cache = {
            "c11/img/photo-1.jpg": {
                "$img": jQuery Object,
                "isLoading": false
            },
            "c11/img/photo-2.jpg": {
                "$img": jQuery object,
                "isLoading": false
            },
            "c11/img/photo-3.jpg": {
                "$img": jQuery object,
                "isLoading": false
            }
        }

This script introduces some new concepts. In the first part you will see the global variables and crossfade() function.  ***/

// Part 1

/*** In the next 4 lines of code, a set of global variables is created. They can be used throughout the script - both in the
crossfade() function (in this Part 1) and the event handlers (on Part 2). **/

var request;                        // Latest image to be requested 
var $current;                       // Image currently being shown
var cache = {};                     // Cache object
var $frame = $('#photo-viewer');    // Container for the image
var $thumbs = $('.thumb');          // Container for the image

function crossfade($img) {          /*** Function to fade between images. The crossfade() function will be called when the user has clicked on 
                                    a thumbnail. It is used to fade between the old image and the new one. ***/
                                    // Pass in new image as parameter
    if ($current) {                 // If there is currently an image showing
        $current.stop().fadeOut('slow');    // Stop animation and fade it out
    }

    $img.css({                      // Set the CSS margins for the image
        marginLeft: -$img.width() / 2,  // Negative margin of half image's width
        marginTop: -$img.height() / 2   // Negative margin of half image's height
    });

    $img.stop().fadeTo('slow', 1);  /*** Stop animation on new image and fade in. If the new image is currently being animated, the
                                        animation is stopped and the image is faded in.  ***/
    $current = $img;                // New image becomes current image
}

// Part 2
$(document).on('click', '.thumb', function(e) { /*** When a thumb is clicked on. The thumbnails are wrapped in links. Every time users click on 
                                                one, the anonymous function will run . Three variables are created: ***/
    var $img;                                   /** Create local variable called $img. $img will be used to create new <img> elements that will hold 
                                                the larger images when they load. ***/
    var src = this.href;                        /*** Store path to image. src (a function-level variable) holds the path to the new image 
                                                    (it was in the href attribute of the link). ****/
    request = src;                              /** Store path again in request.  request (a global variable) holds the same path. ****/

    e.preventDefault();                         // Stop default link behaviour. The link is prevented from loading the image.  

    $thumbs.removeClass('active');              // Remove active from all thumbs
    $(this).addClass('active');                 // Add active to clicked thumb

    if(cache.hasOwnProperty(src)) {             // If cache contains this image
        if (cache[src].isLoading === false) {   // And if isLoading is false (finished loading)
            crossfade(cache[src].$img);         // Call crossfade() fxn    
        }
    } else {                                    // Otherwise it is not in cache (img not yet loaded)
        $img = $('<img/>');                     // Store empty <img/> element in $img
        cache[src] = {                          // Store this image in cache
            $img: $img,                         // Add the path to the image
            isLoading: true                     // Set isLoading property to true
        };

        // Next few lines will run when image has loaded but are prepared first
        $img.on('load', function() {        /** When image has loaded.  At this point, the image has not loaded yet (only an empty <img> 
                                            element was created). When the image loads, the load event triggers a function (which needs to be
                                            written before the image loads). ***/
            $img.hide();                    // Hide it. First, the function hides the image that just loaded.
            // Remove is-loading class from frame and append new image to it
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;   /** Update isLoading in cache. In the cache object, is Loading is set to false (as it will have 
                                                loaded when this function runs). ***/
 /**An if statement checks if the image that just loaded is the one the user last requested. The src variable holds the path to the image that
just loaded. It has function-level scope.The request variable is updated each time the user clicks on an image. It has global scope. So, if the 
user has clicked on an image since this one, the request and src variables will not be the same and nothing should be done. If they do match, 
then: crossfade() is called to show the image.  If still  most recently requested image then**/
            if (request === src) {
                crossfade($img);        // Call crossfade() function
            }                           // Solve asynchronous loading issue
        });

        $frame.addClass('is-loading');  // It is time to load the image. Add is-loading class to frame.
/***  Finally, by adding a value to the src attribute on the image, the image will start to load. Its alt text is retrieved from the title 
attribute on the link. ***/
        $img.attr({                     // Set attributes on <img> element
            'src': src,                 // Add src attribute to load image
            'alt': this.title || ''     // Add title if one was given in link
        });
    }
});

//Last line runs once (when rest of script has loaded) to show the first image
$('.thumb').eq(0).click();             // Simulate click on first thumbnail