/**
ANIMATING CSS - The .animate() method allows you to create some of your own effects and animations by changing CSS properties. You can animate 
any CSS property whose value can be represented as a number, e.g., height, width, and font-size, but not those whose value would be a string, 
such as font-family or text-transform. The CSS properties are written using camelCase notation, so the first word is all lowercase and
each subsequent word starts with an uppercase character, e.g.: border-top-left-radius would become borderTopleftRadius. The CSS properties are 
specified using object literal notation. The method can also take three optional parameters, shown below. 

    .animate({
        //Styles you want to change
    }[, speed][, easing][, complete]); 

 speed - indicates the duration of the animation in milliseconds. (It can also take the keywords slow and fast.)
 easing - can have two values: linear (the speed of animation is uniform); or swing (speeds up in the middle of the transition, and is slower 
        at start and end). 
 complete - is used to call a function that should run when the animation has finished. This is known as a callback function.

EXAMPLES OF JQUERY EQUIVALENTS OF CSS PROPERTY NAMES

bottom left right top backgroundPositionX backgroundPositionY height width
maxHeight minHeight maxWidth minWidth margin marginBottom marginleft marginRight
marginTop outlineWidth padding paddingBottom paddingleft paddingRight paddingTop
fontSize letterSpacing wordSpacing lineHeight textIndent borderRadius borderWidth
borderBottomWidth borderleftWidth borderRightWidth borderTopWidth borderSpacing 

USING ANIMATION - In this example, the .animate() method is used to gradually change the values of two CSS properties. Both of them have
numerical values: opacity and padding-left. When the user clicks on a list item, it fades out and the text content slides to the right.
(This takes 500ms.) Once that is complete, a callback function removes the element. You can increase or decrease numeric values by a specific
amount. Here, +=80 is used to increase the padding property by 80 pixels. (To decrease it by 80 pixels, you would use -=80.)
**/

$(function() {
    $('li').on('click', function() { // All list items are selected and, when a user clicks on one of them, an anonymous function runs.
        $(this).animate({   // $(this) creates a new jQuery object holding the element the user clicked on. The .animate() method is then
                            //called on that jQuery object.
           opacity: 0.0,  // Inside the .animate() method, the opacity and paddingLeft are changed. The value of the paddingLeft property          
           
            paddingLeft: '+=80' // is increased by 80 pixels, which makes it look like the text is sliding to the right as it fades out. 
            
        }, 500, function() {  // The .animate() method has two more parameters. The first is the speed of the animation in milliseconds (in this
                            //case,500ms). The second is another anonymous function indicating what should happen when the animation finishes. 
            $(this).remove(); // When the animation has finished, the callback function removes that list item from the page using the .remove() method. 
        });
    });
});

/*** If you want to animate between two colors, rather than using the .animate() method, there is a helpful jQuery color plugin here:
https://github.com/jquery/ jquery-color **/