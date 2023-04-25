/***
LOADING JSON WITH AJAX - The request for JSON data uses the same syntax you saw in the requests for HTML and XML data. When the server 
responds, the JSON will be converted into HTML. When JSON data is sent from a server to a web browser, it is transmitted as a string.
When it reaches the browser, your script must then convert the string into a JavaScript object. This is known as deserializing an object.
This is done using the parse() method of a built-in object called JSON. This is a global object, so you can use it without creating
an instance of it first.  Once the string has been parsed, your script can access the data in the object and create HTML that can be 
shown in the page. The HTML is added to the page using the innerHTML property. Therefore, it should only be used when you are confident 
that it will not contain malicious code. The JSON object also has a method called stringify(), which converts objects into a string using 
JSON notation so it can be sent from the browser back to a server. This is also known as serializing an object.
This method can be used when the user has interacted with the page in a way that has updated the data held in the JavaScript object 
(e.g., filling in a form), so that it can then update the information stored on the server. 
 
Here, is JSON data that is being processed which is stored in data.json

{
    "events": [
        {"location": "San Fransisco, CA", "date": "May 1", "map": "img/map-ca.png"},
        {"location": "Austin, TX", "date": "May 15", "map": "img/map-ny.png"}
    ]
}

1) In the example below, the JSON data from the server is stored in a variable called responseObject. It is made available by the XMLHttpRequest
object's responseText property. When it comes from the server, the JSON data is a string, so it is converted into a JavaScript object using the 
JSON object's parse() method.
2) The newContent variable is created to hold the new HTML data. It is set to an empty string outside the loop so that the code in the loop 
can add to the string.
3) Loop through the objects that represent each event using a for loop. The data in the objects are accessed using dot notation, just like you 
access other objects.
Inside the loop, the contents of the object are added to the newContent variable, along with their corresponding HTML markup.
4. When the loop has finished running through the event objects in responseObject, the new HTML is added to the page using the innerHTML 
property. ***/

var xhr = new XMLHttpRequest();     // Create XMLHttpRequest object

xhr.onload = function() {           // When readystate changes
    if (xhr.status === 200) {       // If server status was ok
        responseObject = JSON.parse(xhr.responseText);

        // BUILD UP STRING WITH NEW CONTENT (could also use DOM Manipulation)
        var newContent = '';
        for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '"';
            newContent +=  'alt = "' + responseObject.events[i].location + '" />';
            newContent +=  '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent +=  responseObject.events[i].date + '</p>';
            newContent +=  '</div>';
        }

        // update the page with the new content
        document.getElementById('content').innerHTML = newContent;
        
        }
    };

    xhr.open('GET', 'data/data.json', true); // Prepare the request
    xhr.send(null);                 // Send  the request
