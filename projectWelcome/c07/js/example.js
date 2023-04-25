/** This example brings together a number of the techniques used previously to create a list that users can add items to and
remove items from.
• Users can add new list items.
• They can also click to indicate that an item is complete (at which point it is moved to the bottom of the list and marked as complete).
• Once an item is marked as complete, a second click on the item will remove it from the list.
An updated count of the number of items there are in the list will be shown in the heading. As you will see, the code using jQuery is more 
compact than it would be if you were writing this example in plain JavaScript, and it will work across browsers even though there is no 
explicit tailback code. Because new items can be added to the list, the events are handled using event delegation. When the user clicks 
anywhere on the <ul> element, the .on() event method handles the event. Inside the event handler, there is a conditional statement to check 
whether the list item is:
• Not complete - in which case, the click is used to change the item to complete, move it to the bottom of the list, and update the counter.
• Complete - in which case, the second click on the item fades it out and removes it from the list altogether.
The use of conditional statements and custom functions (used for the counter) illustrate how jQuery techniques are used in combination with
traditional JavaScript that you have learned. The appearance and removal of the elements is also animated, and these animations demonstrate 
how methods can be chained together to create complex interactions based on the same selection of elements. **/

$(function() {

    // SETUP
    var $list, $newItemForm, $newItemButton;
    var item = ''; // item is an empty string
    $list = $('ul'); // Cache the ul
    $newItemForm = $('#newItemForm'); // Cache form to add new items
    $newItemButton = $('#newItemButton'); // Cache button to show form

    $('li').hide().each(function(index) {   // Hide list items
        $(this).delay(450 * index).fadeIn(1600); // Then fade them in
    });

    // ITEM COUNTER
    function updateCount() {        // Declare function
        var items = $('li[class!=complete]').length; // Number of items in list
        $('#counter').text(items);  // Added into counter circle
    }
    updateCount();  // Call the function

    function updateCount1() {        // Declare function updateCout1
        var items = $('li[class=complete]').length; // Number of items in list with class complete
        $('#counter1').text(items);  // Added into counter circle
    }
    updateCount1();  // Call the function


    //  SETUP FORM FOR NEW ITEMS
    $newItemButton.show();              // Show the button
    $newItemForm.hide();                // Hide the form
    $('#showForm').on('click', function() { // When new item clicked
        $newItemButton.hide();  // Hide the button
        $newItemForm.show();    // Show the form
    });
    // ADDING A NEW LIST ITEM
    $newItemForm.on('submit', function(e) { // When a new item is submitted
        e.preventDefault();             //Prevent form being submitted
        var text = $('input:text').val(); //Get value of text input        
        $list.append('<li>' + text + '</li>'); //Add item to end of the list
        $('input:text').val(''); //Empty the text input
        updateCount();  //Update the count
        
    });

    //CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click', 'li', function() {
        var $this = $(this);        // Cache the element in a jQuery object
        var complete = $this.hasClass('complete'); // Is item complete

        if (complete === true) { // Check if item is complete
            $this.animate({ //If so, animate opacity + padding
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function() { // Use callback when animation completes
                $this.remove(); // Then completely remove this item
                updateCount1(); // Updates counter1 with number of remaining list items with class complete
            });
        } else {          // Otherwise indicate it is complete
            item = $this.text(); // Get the text from the list item
            $this.remove(); // Remove the list item
            $list      // Add back to end of list as complete
                .append('<li class=\"complete\">' + item + '</li>')
                .hide().fadeIn(300); // Hide it so it can be faded in 
            updateCount();      // Update the counter
            updateCount1();     // Updating the counter with no. of items with class complete
        
        }                       // End of else option
    });                         // End of event handler
});