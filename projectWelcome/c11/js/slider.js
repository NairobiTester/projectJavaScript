/**** RESPONSIVE SLIDER - A slider positions a series of items next to each other, but only shows one at a time. The images then slide from one 
to the next. This slider loads several panels, but only shows one at a time. It also provides buttons that allow users to navigate between each
of the slides and a timer to move them automatically after a set interval.

When the page first loads, the CSS hides all of the slides, which takes them out of normal flow. The CSS then sets the display property of the 
first slide block to make it visible.
The script then goes through each slide and:
• Assigns an index number to that slide
• Adds a button for it under the slide group
For example, if there are four slides, when the page first loads, the first slide will be shown by default, and four buttons will be added 
underneath it. The index numbers allow the script to identify each individual slide. To keep track of which slide is currently being shown, the
script uses a variable called current Index (holding the index number of the current slide). When the page loads, this is 0, so it shows the 
first slide. It also needs to know which slide it is moving to, which is stored in a variable called newSlide.

When it comes to moving between the slides (and creating the sliding effect), if the index number of the new slide is higher than the index 
number of the current slide, then the new slide is placed to the right of the group. As the visible slide is animated to the left, the new 
slide automatically starts to come into view, taking its place. If the index number of the new slide is lower than the current index, then the 
new slide is placed to the left of the current slide, and as it is animated to the right, the new slide starts to come into view. After the 
animation, the hidden slides are placed  behind the one that is currently active. 

SLIDER SCRIPT OVERVIEW - A jQuery selector finds the sliders within the HTML markup. An anonymous function then runs for each one to create the 
slider. There are four key parts to the function. 

1: SETUP - Each slider needs some variables, they are in function-level scope so they:
• Can have different values for each slider
• Do not conflict with variables outside of the script

2: CHANGING SLIDE: move() - move() is used to move from one slide to another, and to update the buttons that indicate which slide is currently 
being shown. It is called when the user clicks on a button, and by the advance() function. 

3: A TIMER TO SHOW THE NEXT SLIDE AFTER 4 SECONDS: advance() - A timer will call move() after 4 seconds. To create a timer, JavaScript's window 
object has a setTimeout() method. It executes a function after a number of milliseconds. The timer is often assigned to a variable, and it uses 
the following syntax:
    var timeout = setTimeout(function, delay);
• timeout is a variable name that will be used to identify the timer.
• function can be a named function or an anonymous function.
• delay is the number of milliseconds before the function should run.
To stop the timer, call clearTimeout(). It takes one parameter: the variable used to identify the timer: clearTimeout(timeout);

4: PROCESSING EACH OF THE SLIDES THAT APPEAR WITHIN A SLIDER
The code loops through each of the slides to:
• Create the slider
• Add a button for each slide with an event handler that calls the move() function when users clicks it 

SLIDER SCRIPT
1. There may be several sliders on a page, so the script starts by looking for every element whose class attribute has a value of sLIder. For 
each one, an anonymous function is run to process that slider.
2. Variables are created to hold:
i) The current slider
ii) The element that wraps around the slides
iii) All of the slides in this slider
iv) An array of buttons (one for each slide)
v) The current slide
vi) The timer
3. The move() function appears here.
PROBLEM: GETTING THE RIGHT GAP BETWEEN SLIDES USING A TIMER
Each slide should show for four seconds (before the timer moves it on to the next slide). But if the user clicks a button after two seconds, 
then the new slide might not show for four seconds because the timer is already counting down.  
SOLUTION: RESET THE TIMER WHENEVER A BUTTON IS CLICKED - The advance() function clears the timer before setting it off again. Every time the 
user clicks on a button the move() function calls advance() to ensure the new slide is shown for four seconds.

4. The move() function will create the animated sliding movement between two slides. When it is called, it needs to be told which slide to move
to.
5. Two variables are created that are used to control whether the slider is moving to the left or right.  
6. advance() is called to reset the timer. 
7. The script checks if the slider is currently animating or if the user selected the current slide. In either case, nothing should be done,
     and the return statement stops the rest of the code from running. 
8. References to each of the buttons were stored in an array and the array is used to update which button is active. 
9.  If the new item has a higher index number, then the slider will need to move from right to left. If the item has a lower index number, the 
slider will need to move from left to right. These variable values are set first and are then used in the next step.

slideLeft positions the new slide in relation to the current slide. (100% sits the new slide to the right of it and - 100% sits the new slide 
to the left of it.) animateLeft indicates whether the current slide should move to the left or the right, letting the new slide take its place.
(- 100% moves the current slide to the left, 100% moves the current slide to the right.)

10. The new slide is positioned to the right or the left of the current slide using the value in the slideLeft variable and its display 
property is set to block so that it becomes visible. That new slide is identified using new Index, which was passed into the function. 
11. The current slide is then moved to the left or right using the value stored in the animateLeft variable. That slide is selected using the 
currentlndex variable, which was defined at the start of the script. 

Once the slide has finished animating, an anonymous function performs housekeeping tasks: 

12. The slide that was the current Index is hidden. 
13. The position of the left-hand side of the new slide is set to 0 (left-aligning it).
14. The position of all of the other slides is set so the left-hand side is 0 (left-aligning them).  
15. At this point, the new slide will be visible, and the transition is complete, so it is time to update the current Index variable to hold 
the index number of the slide that has just been shown. This is easily done by giving it the value that was stored in the newlndex variable. 

Now that this function has been defined, the code creates a timer and goes through each slide adding a button and an event handler for it 
as shown in the following steps.

16. The advance() function creates the timer.
17. It starts by clearing the current timer. A new timer is set and when the time has elapsed it will run an anonymous function.
18. An if statement checks whether or not the current slide is the last one. If it is not the last slide then it calls move() with a parameter 
that tells it to go to the next slide. Otherwise it tells move() to go to the first slide.
19. Each slide is processed by an anonymous function.
20. A <button> element is created for each slide.
21. If the index number of that slide is the same as the number held in the current Index variable, then a class of active is added to that 
button.
22. An event handler is added to each button. When clicked it calls the move() function. The slide's index number indicates which slide to move 
to.
23. The buttons are then added to the button container, and to the array of buttons. This array is used by the move() function to indicate
which slide is currently being shown.
24. advance() is called to start the timer. 
***/
$('.slider').each(function(){                   // For every slider
    var $this = $(this);                        // Get the current slider
    var $group  = $this.find('.slide-group');   // Get the slide-group (container) 
    var $slides = $this.find('.slide');         // jQuery object to hold all slides        
    var buttonArray = [];                       // Create array to hold nav buttons                       
    var currentIndex = 0;                       // Index number of current slide
    var timeout;                                // Used to store the timer
// move() function
function move(newIndex) {                       // Creates the slide from old to new one
    var animateLeft, slideLeft;                 // Declare variables

    advance();                                  // When slides move, call advance() again

    // If current slide is showing or slide is animating, then do nothing
  if ($group.is(':animated') || currentIndex === newIndex) {
        return;
  }  
  buttonArray[currentIndex].removeClass('active');      // Remove class from item
  buttonArray[newIndex].addClass('active');             // Add class to new item

  if (newIndex > currentIndex) {                        // If new Item > current
    slideLeft = '100%';                                 // Sit the new slide to the right
    animateLeft = '-100%';                              // Animate the current group to the left
  } else {                                              // Otherwise
    slideLeft = '-100%';                                // Sit the new slide to the left
    animateLeft = '100%';                               // Animate the current group to the right
  }
  // Position new slide to left (if less) or right (if more) of current
 $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
 $group.animate( {left: animateLeft} , function() {     // Animate slides and
    $slides.eq(currentIndex).css( {display: 'none'} );  // Hide previous slide
    $slides.eq(newIndex).css( {left: 0} );              // Set position of the new item
    $group.css( {left: 0} );                            // Set position of group of slides
    currentIndex = newIndex;                            // Set CurrentIndex to new image
 });
}

    function advance() {                        // Sets a timer between slides
        clearTimeout(timeout);                  // Clear timer stored in timeout
        //Start timer to run an anonymous function every 4 seconds
        timeout = setTimeout(function(){
            if (currentIndex < ($slides.length - 1)) {  // If not the last slide
                move(currentIndex + 1);                 // Move to next slide                  
                } else {                                // Otherwise
                    move(0);                            // Move to the first slide
                }
            }, 4000);                                   // Milliseconds timer will wait
        }

        $.each($slides, function(index){
            // Create a button element for the button
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) {       // If index is the current item
                $button.addClass('active');     // Add the active class
            }
            $button.on('click', function() {    // Create event handler for the button
                move(index);                    // It calls the move() function                
            }).appendTo('.slide-buttons');      // Add to the buttons holder
            buttonArray.push($button);          // Add it to the button array
        });

        advance();
});