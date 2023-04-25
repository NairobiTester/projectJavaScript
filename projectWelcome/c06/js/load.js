/* LOAD - The load event is commonly used to trigger scripts that access the contents of the page. In this example, 
a function called setup() gives focus to the text input when the page has loaded. The event is automatically raised
by the window object when a page has finished loading the HTML and all of its resources: images, CSS, scripts (even 
third party content e.g .. banner ads). The setup() function would not work before the page has loaded because it relies 
on finding the element whose id attribute has a value of username, in order to give it focus. Note that the event listener is
attached to the window object (not the document object - as this can cause cross-browser
compatibility issues). If the <script> element is at the end of the HTML page, then the DOM would have loaded the form 
elements before the script runs, and there would be no need to wait for the load event. Because the load event only
fires when everything else on the page has loaded (images, scripts, even ads), the user already have started to use the 
page before the script has started to run. Users particularly notice when a script changes the appearance of the page, 
changes focus, or selects form elements after they have started to use it. (It can make a site look slower to load.).
Imagine this form had more inputs; the user may be filling in the second or third box when the script fires - moving 
focus back to the first box too late and interrupting the user. */ 

function setup() {      // Declare function
    var textInput;      // Create variable
    textInput = document.getElementById('username'); // Get username input
    textInput.focus();      // Give username focus
}

window.addEventListener('load', setup, false); // When page loaded call setup()