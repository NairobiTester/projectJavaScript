/** HANDLING AJAX REQUESTS AND RESPONSES - To create an Ajax request, browsers use the XMLHttpRequest object. When the server responds to the 
browser's request, the same XMLHttpRequest object will process the result. 

THE REQUEST
1) var xhr = new XMLHttpRequest();
2) xhr.open('GET', 'data/test.json', true);
3) xhr.send('search=arduino');

1) -  An instance of the XMLHttpRequest object is created using object constructor notation. It uses the new keyword and stores the object in 
a variable. The variable name xhr is short for XMLHttpRequest (the name of the object). 
2) - The XMLHttpRequest object's open() method prepares the request. It has three parameters:
    i) The HTTP method (GET or POST)
    ii) The url of the page that will handle your request
    iii) A Boolean indicating if it should be asynchronous
3) - The send() method is the one that sends the prepared request to the server. Extra information can be passed to the server in the parentheses. 
If no extra information is sent, you may see the keyword null used (although it is not strictly needed): xhr.send(null).

1) xhr.onload = function() {
2)  if (xhr.status === 200) {
        // Code to process the results from the server
    }
}

1) - When the browser has received and loaded a response from the server, the onload event will fire. This will trigger a function (here, it is 
    an anonymous function). 
2) - The function checks the status property of the object. This is used to make sure the server's response was okay. (If this property is blank,
     check the setup of the server.) 

HOW AJAX WORKS - LOADING HTML WITH AJAX - HTML is the easiest type of data to add into a page using Ajax.
The browser renders it just like any other HTML. The CSS rules for the rest of the page are applied to the new content. Below, the example loads data
about three events using Ajax. The page users open does not hold the event data (highlighted in pink). Ajax is used to load it into the page 
from another file. Browsers will only let you use this technique to load HTML that comes from the same domain name as the rest of the page.
Whether HTML, XML, or JSON is being returned from the server, the process of setting up the Ajax request and checking whether the file is ready
to be worked with is the same. What changes is how you deal with the data that is returned. In the example below, the code to display the
new HTML is placed inside a conditional statement. When a server responds to any request, it should send back a status message, to indicate 
if it completed the request. The values can be:

200 -The server has responded and all is ok
304 - Not modified
404 - Page not found
500 - Internal error on the server

 ***/

var xhr = new XMLHttpRequest();         //Create XMLHttpRequest object

xhr.onload = function() {           // When response has loaded
    // The following conditional check will not work locally - only on a server
    if(xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText; /** Update. The element that will contain the new HTML is selected.
        (Here it is an element whose id attribute has a value of content.) The innerHTML property replaces the content of that element with 
        the new HTML that has been sent from the server. The new HTML is retrieved from the XMLHttpRequest object's responseText property. ***/
    }

};

xhr.open('GET', 'data/data.html', true);        // Prepare the request
xhr.send(null);                         // Send the request

/** Remember that innerHTML should only be used when you know that the server will not return malicious content. All content that has been 
created by users or third parties should be escaped on the server (see p228.) **/