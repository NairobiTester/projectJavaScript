/* WHERE EVENTS OCCUR - DETERMINING POSITION - In this example, as you move your mouse around the screen, the text 
inputs across the top of the page are updated with the current mouse position. This demonstrates the three different 
positions you can retrieve when the mouse is moved or when one of the buttons is clicked. Note how showPosition() is
passed event as a parameter, which refers to the event object. The positions are all properties of this event object.  */

var sx = document.getElementById('sx'); // Element to hold screenX
var sy = document.getElementById('sy'); // Element to hold screeny
var px = document.getElementById('px'); // Element to hold pageX
var py = document.getElementById('py'); // Element to hold pageY
var cx = document.getElementById('cx'); // Element to hold clientX
var cy = document.getElementById('cy'); // Element to hold clientY

function showPosition(event) {      // Declare function
    sx.value = event.screenX;       // Update element with screenX
    sy.value = event.screenY;       // Update element with screenY
    px.value = event.pageX;       // Update element with pageX
    py.value = event.pageY;       // Update element with pageY
    cx.value = event.clientX;       // Update element with clientX
    cy.value = event.clientY;       // Update element with clientY

}

var el = document.getElementById('body'); // Get body element
el.addEventListener('mousemove', showPosition, false); // Mouse move updates position