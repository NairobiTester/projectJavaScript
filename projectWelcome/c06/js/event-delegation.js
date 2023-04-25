/* EVENT DELEGATION - Creating event listeners for a lot of elements can slow down a page, but event flow allows you to
 listen for an event on a parent element. If users can interact with a lot of elements on the page, such as:
• a lot of buttons in the UI
• a long list
• every cell of a table
adding event listeners to each element can use a lot of memory and slow down performance. Because events affect containing
(or ancestor) elements (due to event flow), you can place event handlers on a containing element and use the event 
object's target property to find which of its children the event happened on. By attaching an event listener to a 
containing element, you are only responding to one element (rather than having an event handler for each child element).
You are delegating the job of the event listener to a parent of the elements. In the list shown here, if you place the 
event listener on the <ul> element rather than on links in each <li> element, you only need one event listener. This 
gives better performance, and if you add or remove items from the list it would still work the same. 

ADDITIONAL BENEFITS OF EVENT DELEGATION
=> WORKS WITH NEW ELEMENTS - If you add new elements to the DOM tree, you do not have to add event handlers to the new
elements because the job has been delegated to an ancestor. 
=> SOLVES LIMITATIONS WITH this KEYWORD - Earlier, the this keyword was used to identify an event's target, but that 
technique did not work in IE8, or when a function needed parameters. 
=> SIMPLIFIES YOUR CODE - It requires fewer functions to be written, and there are fewer ties between the DOM and your 
code, which helps maintainability. 

CHANGING DEFAULT BEHAVIOUR - The event object has methods that change: the default behavior of an element and how the 
element's ancestors respond to the event. 
preventDefault() -  Some events, such as clicking on links and submitting forms, take the user to another page. To 
prevent the default behavior of such elements (e.g., to keep the user on the same page rather than following a link
or being taken to a new page after submitting a form), you can use the event object's preventDefault() method. IE5-8 
have an equivalent property called returnValue which can be set to false. A conditional statement can check if the 
preventDefault() method is supported, and use IE8's approach if it isn't:
    if (event.preventDefault){
    event.preventDefault();
    }else {
    event.returnValue = false;
    }
stopPropagation() - Once you have handled an event using one element, you may want to stop that event from bubbling up 
to its ancestor elements (especially if there are separate event handlers responding to the same events on the containing
elements). To stop the event bubbling up, you can use the event object's stopPropogation() method. The equivalent in
IE8 and earlier is the cancelBubble property which can be set to true. Again, a conditional statement can check if the 
stopPropogation() method is supported and use IE8's approach if not:
    if (event.stopPropogation){
    event.stopPropogation();
    }else {
    event.cancelBubble = true;
    }
USING BOTH METHODS - You will sometimes see the following used in similar situations that are in a function: return false;
It prevents the default behavior of the element, and prevents the event from bubbling up or capturing further. It also 
works in all browsers, so it is popular. Note, however, when theinterpreter comes across the return false statement, it 
stops processing any subsequent code within that function and moves to the next statement after the function was called.
Since this blocks any further code within the function, it is often better to use the preventDefault() method of the 
event object rather than return false. 

USING EVENT DELEGATION - EXAMPLE -  In this example, each list item contains a link. When the user clicks on that link (to
indicate they have completed that task), the item will be removed from the list. 
1. The event listener will be added to the <ul> element, so this needs to be selected.
2. Check whether or not the browser supports addEventListener().
3. If so, use it to call the itemDone() function when the user clicks anywhere on that list.
4. If not, use the attachEvent() method.
5. The itemDone() function will remove the item from the list. It requires three pieces of information.
6. Three variables are declared to hold the info.
7. target holds the element the user clicked on. To obtain this, the getTarget() function is called. This is created at 
    the start of the script, and shown at the bottom of the flowchart.
8. elParent holds that element's parent (the <li>)
9. elGrandparent holds that element's grandparent
10. The <li> element is removed from the <ul> element.
11. Check if the browser supports preventDefault() to prevent the link taking the user to a new page.
12. If so, use it.
13. If not, use the older IE returnValue property. 
 */

/* function getTarget(e) {            // Declare function
    if (!e) {                       // If there is no event object
        e = window.event;           // Use old IE event object
    }
    return e.target || e.srcElement;    // Get the target of event

}
function itemDone(e){               // Declare function
    //Remove item from list
    var target, elParent, elGrandparent;    // Declare variables
    target = getTarget(e);          // Get the item clicked link
    elParent = target.parentNode; //Get its list item
    elGrandparent = target.parentNode.parentNode; // Get its list
    elGrandparent.removeChild(elParent);        //Remove list item from list
    
    // Prevent the link from taking you elswhere
    if (e.preventDefault){
        e.preventDefault();
    } else {
       e.returnValue = false; 
    }

}

// Set event listeners to call itemDone() on click
var el = document.getElementById('shoppingList'); // Get shopping list
if (el.addEventListener) {          // If event listeners work
    el.addEventListener('click', function(e) { // Add listener on click
        itemDone(e);        // it calls itemDone()
    }, false);              // Use bubbling phase for flow
} else {                    // Otherwise
    el.attachEvent('onclick', function(e){  // Use old IE model: onclick
        itemDone(e);                        // Call itemDone()
    });
} */




function getTarget(e) {                          // Declare function
    if (!e) {                                      // If there is no event object
      e = window.event;                            // Use old IE event object
    }
    return e.target || e.srcElement;               // Get the target of event
  }
  
  function itemDone(e) {                           // Declare function
    // Remove item from the list
    var target, elParent, elGrandparent;           // Declare variables
    target = getTarget(e);                         // Get the item clicked link
  
    /*
    The program commented above had the following code - but it had two shortcomings
    - Clicking between list items would remove the whole list
    - Clicking on italic text would remove the link - not the list item
  
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);
  
    The next 10 lines improve that example
    */
  
    if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
      elListItem = target.parentNode;              // Get its li element
      elList = elListItem.parentNode;              // Get the ul element
      elList.removeChild(elListItem);              // Remove list item from list
    }
    if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
      elListItem = target.parentNode.parentNode;   // Get its li element
      elList = elListItem.parentNode;              // Get the ul element
      elList.removeChild(elListItem);              // Remove list item from list
    }
  
    // Prevent the link from taking you elsewhere
    if (e.preventDefault) {                        // If preventDefault() works
      e.preventDefault();                          // Use preventDefault() 
    } else {                                       // Otherwise
      e.returnValue = false;                       // Use old IE version
    }
  }
  
  // Set up event listeners to call itemDone() on click
  var el = document.getElementById('shoppingList');// Get shopping list
  if (el.addEventListener) {                       // If event listeners work
    el.addEventListener('click', function(e) {     // Add listener on click
      itemDone(e);                                 // It calls itemDone()
    }, false);                                     // Use bubbling phase for flow
  } else {                                         // Otherwise
    el.attachEvent('onclick', function(e) {        // Use old IE model: onclick
      itemDone(e);                                 // Call itemDone()
    });
  } 
  