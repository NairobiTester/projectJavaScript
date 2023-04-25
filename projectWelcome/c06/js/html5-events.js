/* USING HTML5 EVENTS - In this example, as soon as the DOM tree has been formed, focus is given to the text input with 
an id of username.  The DOMContentloaded event fires before the load event (because the latter waits for all of the 
page's resources to load). If users try to leave the page before they press the submit button, the before unload event
checks that they want to leave */



function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
  }
  
  window.addEventListener('DOMContentLoaded', setup, false);
  
  window.addEventListener('beforeunload', function(event) {
    // This example has been updated to improve cross-browser compatibility (as recommended by MDN)
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
    
  });