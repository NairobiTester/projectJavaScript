/***
LOADING XML WITH AJAX - Requesting XML data is very similar to requesting HTML. However, processing the data that is returned is more 
complicated because the XML must be converted into HTML to be shown on the page. 

In this example, you can see that the code to request an XML file is almost identical to the code to request an HTML file. What changes is 
the part inside the conditional statement that processes the response (points 1-4 below). The XML must be turned into HTML. The structure 
of the HTML for each event is shown below.

<div class="event">
    <img src="file.png" alt="Location" />
    <p><b>Location</b><br />Event date</p>
</div>

1) When a server responds with XML, it can be obtained using the responseXML property of the XMLHttpRequest object. Here, the XML returned 
is stored in a variable called response.
2) This is followed by the declaration of a new variable called events, which holds all of the <event> elements from the XML document 
(see sample XML file, file.xml).
3) The XML file is then processed using the DOM methods (see chapter 5). First, the for loop goes through each of the <event> elements, 
collecting the data stored in their child elements, and placing it into new HTML elements. Each of those HTML elements is then added into
the page.
4) Inside the for loop, you will see the getNodeValue() function is called several times. Its purpose is to get the contents from each of 
the XML elements. It takes two parameters:

i) obj - is an XML fragment
ii) tag - is the name of the tag you want to collect the information from. The function looks for the matching tag within the XML fragment 
(using the DOM's getElementsByTagName() method). It then gets the text from the first matching element within that fragment.



***/

 var xhr = new XMLHttpRequest();     // Create XMLHttpRequest Object

xhr.onload = function() {       // When response has loaded
    // The following conditional check will not work locally - only on a server
    if (xhr.status === 200) { // If server status ok
    // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
        var response = xhr.responseXML;         // Get XML from the server
        var events = response.getElementsByTagName('event'); // Find <event> elements

        for (var i = 0; i < events.length; i++) {      // Loop through them
            var container, image, location, city, newline;  // Declare variables
            container = document.createElement('div');  // Create <div> container
            container.className = 'event';      // Add class attribute

            image = document.createElement('img');      // Add map image
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.setAttribute('alt', getNodeValue(events[i], 'location'));
            container.appendChild(image);

            location = document.createElement('p');     // Add location data
            city = document.createElement('b');
            newline = document.createElement('br');
            city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);                
            

            document.getElementById('content').appendChild(container);

        }
        function getNodeValue(obj, tag) {   // Gets content from XML
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;

        }

    // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE

    }
};
xhr.open('GET', 'data/data.xml', true);         // Prepare the request
xhr.send(null);                                 // Send the request **/


