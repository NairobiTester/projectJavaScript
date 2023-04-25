/***
 EVENT OBJECT - Every event handling function receives an event object. It has methods and properties related to the event that occurred.
 
Just like the JavaScript event object, the jQuery event object has properties and methods that tell you more about the event that took place.
If you look at the function that is called when the event occurs, the event object is named in the parentheses. Like any other parameter, this 
name is then used within the function to refer to the event object. 

    $('li').on('click' function(e) { // Give the event object a parameter name.
         eventType = e.type ; // Use that name in the function to reference the event object. Access the properties and methods of the object using the familiar
                                //dot notation (the member operator).
    });`

PROPERTY    DESCRIPTION
type    -  Type of event, (e.g., click, mouseover)
which   -  Button or key that was pressed
data    -   An object literal containing extra information passed to the function when the event fires
target  -   DOM element that initiated the event
pageX   -   Mouse position from left edge of viewport
pageY   -   Mouse position from top of viewport
timeStamp  -  Number of milliseconds from Jan 1st, 1970, to when the event was triggered (this is known as Unix Time). Does not work in Firefox.

METHOD DESCRIPTION
•preventDefault() - Prevents the default (e.g., submitting a form)
•stopPropagation() - Stops the event bubbling up to ancestors

EVENT OBJECT - In this example, when users click on a list item, the date that the event happened on is written next to that item, along with 
the type of event that triggered it. To achieve this, two properties of the event object will be used: timeStamp states when the event 
occurred; type states the kind of event that triggered it. To prevent the list from becoming cluttered with multiple date entries, whenever a 
list item is clicked, any <span> elements will be removed from the list. 
**/

$(function() {

    $('li').on('click', function(e) {
        $('li span').remove(); // Any <span> elements that already exist inside the <li> elements are removed. 
        var date = new Date(); // A new Date object is created, 
        date.setTime(e.timeStamp); // and its time is set to the time at which the event was clicked.
        var clicked = date.toDateString(); // The time is then converted into a date that can be read. 
        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>'); /* The date that the list item was clicked is written into 
                                        the list item (along with the type of event that was used).  Note that the timeStamp property does not 
                                        display in Firefox. **/
    });

});

/***
 NB: The date displays Thu Jan 01, 1970: Find out how to rectify this so it displays the date when the mouse was clicked***/