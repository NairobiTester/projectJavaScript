/***
WORKING WITH DATA FROM OTHER SERVERS - Ajax works smoothly with data from your own server but - for security
reasons - browsers do not load Ajax responses from other domains (known as cross-domain requests). There are three common workarounds:

A PROXY FILE ON THE WEB SERVER - The first way to load data from a remote server is to create a file on your server that collects the data 
from the remote server (using a server-side language such as ASP.net, PHP, NodeJS, or Ruby). The other pages on your site then request 
the data from the file on your server (which in turn gets it from the remote server). This is called a proxy, because it acts on behalf of the
other page. 

JSONP (JSON WITH PADDING) - JSONP (sometimes written JSON-P) involves adding a <script> element into the page, which loads the JSON data
from another server. This works because there are no restrictions on the source of script in a <script> element. The script contains a 
call to a function, and the JSONformatted data is provided as an argument to that function. The function that is called is defined in the 
page that requests the data, and is used to process and display the data. 

CROSS-ORIGIN RESOURCE SHARING - Every time a browser and server communicate, they send information to each other using HTTP headers. 
CrossOrigin Resource Sharing or CORS involves adding extra information to the HTTP headers to let the browser and server know that they 
should be communicating with each other. CORS is a W3C specification, but is only supported by the most recent browsers.

ALTERNATIVES - Many people use jQuery when making requests for remote data, as it simplifies the process and handles backward compatibility
for older browsers. As you can see in the next column, support for new approaches is an Issue. 

HOW JSONP WORKS - First, the page must include a function to process the JSON data. It then requests the data from the server using a 
<script> element. The server returns a file that calls the function that processes the data. The JSON data is provided as an argument to 
that function. 

BROWSER - The HTML page will use two pieces of JavaScript:
1. A function that will process the JSON data that the server sends. In the example on the next page, the function is called 
showEvents().
2. A <script> element whose src attribute will request the JSON data from the remote server.
    <script>
    function showEvents(data)
        // Code to process data and
        // display it in the page here
    </script>
<script src="http://example.org/jsonp">
</script> 

SERVER - When the server responds, the script contains a call to the named function that will process the data
(that function was defined in step 1). This function call is the "padding" in JSONP. The JSON-formatted data is sent as an argument to 
this function. So, in this case, the JSON data sits inside the call to the showEvents() function.
    showEvents({
        "events": [
        {
            "location" : "San Francisco, CA",
            "date": "May 1",
            "map": "img/map-ca.png"
     }... 
    ]
});


It is important to note that there is no need to use the JSON object's parse() or stringify() methods when working with JSONP. Because the 
data is being sent as a script file (not as a string), it will be treated as an object. The file on the server is often written so that you 
can specify the name of the function that will process the data that is returned. The name of the function is usually given in the query string
of a URL:http://example.org/upcomingEvents.php?callback=showEvents 


USING JSONP - This example looks the same as the JSON example, but the event details come from a remote server. Therefore, the HTML uses 
two <script> elements. The first <script> element loads a JavaScript file that contains the showEvents() function. This will be used to 
display the deals information. The second <script> element loads the information from a remote server. The name of the function that 
processes the data is given in the query string.   ****/


function showEvents(data) {     // Callback when JSON loads
    var newContent = '';        // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (Could also use DOM manipulation)
    for (var i = 0; i < data.events.length; i++) { // Loop through data
        newContent += '<div class="event">';
        newContent += '<img src="' + data.events[i].map + '"';
        newContent +=  'alt="' + data.events[i].location + '" />';
        newContent +=  '<p><b>' + data.events[i].location + '</b><br>';
        newContent +=  data.events[i].date + '</p>';
        newContent +=  '</div>';

    }
// Update the page with the new content
document.getElementById('content').innerHTML = newContent;
}

