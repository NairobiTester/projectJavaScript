/*** ADDITIONAL PARAMETERS FOR EVENT HANDLERS - The •on() method has two optional properties that let you: Filter the initial jQuery 
selection to respond to a subset of the elements; Pass extra information into the event handler using object literal notation.  Here you 
can see two additional properties that can be used with the •on() method. When square brackets are used inside a method, they signify that
the parameter is optional. Leaving out a parameter written in square brackets will not stop the method working.

        .on(events[, selector][, data], function(e) ); 

1) .on(events) - This is the event(s) that you want to respond to. If you want to respond to more than one event, you can provide a 
    space-separated list of event names, e.g., 'focus click ' will work on both focus and click. 
2) [, selector] - If you just want to respond to the event happening on a subset of the elements in the initial jQuery selection, you can provide 
    a second selector that will filter its descendants. 
3) [, data] - You can pass extra information to the function that is called when the event is triggered. This information is passed along with 
    the event object (e)
4) function(e) -  This is the function that should be run when the specified events occur on one of the elements in the matched set. The 
    function is automatically passed the event object as a parameter. (Remember, if you use it you must  give it a name in the parentheses.) 

Older jQuery scripts may use the .delegate() method for delegation. However, since jQuery 1.7, •on() is the preferred approach to delegation. 

DELEGATING EVENTS - In this example, the event handler will run when users click or mouseover items in the list, except for the last list item.
It writes out the content of the element the user interacted with, a status message (using the data property), and the event type. The 
information passed in the data property here uses object literal notation (so it could handle multiple properties).  ***/

$(function () {
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',          // The event handler is triggered by click and mouseover events.
        ':not(#four)',              // The selector parameter filters out the element whose id attribute has a value of four.
        {status: 'important, ',     // Additional data that will be used by the event handler is passed in as an object literal.
         date: '06/02/2020'},      
        /** In the next lines of code, the event handler uses the event object to display the content of the element the user interacts with, 
         the information from the data that was passed into the function, and the event type, under the list in a white box. **/ 
        function(e) {
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + e.data.date + '<br />';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
});