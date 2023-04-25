/*** EXAMPLE - AJAX & JSON - This example shows information about three events. The data used comes from three different sources.
1) When the page loads, event locations are coded into the HTML. Users click on an event in the left-hand column; it updates the timetable in 
the middle column. In the left column, the links have an id attribute whose value is a two letter identifier for the state the event is in:

<a id="tx " href="tx.html"> ... Austin, TX</a>

2) The timetables are stored in a JSON object, in an external file collected when the DOM has loaded. When users click on a session in the 
middle column, its description is shown in the right-hand column.  

In the middle column showing timetables, the title of each session is used inside a link that will show the description for the session.

<a href="descriptions.html#Circuit- Hacking">
Circuit Hacking</a>

3) Descriptions of all sessions are stored in one HTML file. Individual descriptions are selected using jQuery's •load() method (and 
the # selector). In the right column, the session description is taken from an HTML file. Each session is stored in an element whose id 
attribute contains the title of the session (with spaces replaced by dashes).
    <div id="Intro-to-3D-Modeling">
        <h3>Intro to 3D Modeling</h3>
        <p>Come learn how to create 3D models of ... </p>
    </div>

Because links are added and removed, event delegation is used. 

Example - This example uses data from three separate sources to demonstrate Ajax techniques. In the left-hand column you can see three 
locations for an event. These are written into the HTML for the timetable page. Each one is a link. 

1. Clicking on an event loads the session times for that event. They are stored in a file called example.json, which is collected when the DOM 
has loaded. 
2. Clicking on a session will load its description. They are stored in descriptions.html, which is loaded when a user clicks on a session title.

Left column: list of the events
Middle column: timetable of the sessions
Right column: description of the sessions

When the script is run, the loadTimetable() function loads the timetables for all three events from a file formatted using JSON, stored in 
example.json. The data is cached in a variable called times. Events are identified by a two-letter code for the state. You can see a sample of 
the JSON-formatted data in example.json and the HTML (descriptions.html) that will be created using that data. 

1. The script that does all the work is in example.js. It runs when the DOM has loaded.
2. The times variable will be used to store the session timetables for all of the events.
3. Before the browser requests the JSON data, the script checks if the browser supports the overrideMimeType() method. This is used to indicate
 that the response from the server should be treated as JSON data. This method can be used in case the server is accidentally set up to 
 indicate that the data being returned is in any other format. 
4. Next you can see a function called loadTimetable(), which is used to load the timetable data from a file called example.json.
5. If the data loads successfully, the data for the timetables will be stored in a variable called times.
6. If it fails to load, an error message will be shown to the users.
7. The loadTimetable() function is then called to load the data. 

*/
$(function() {      // When the DOM is ready
    
    var times;      // Declare global variable
    $.ajax({
        beforeSend: function(xhr){      // Before requesting data
            if (xhr.overrideMimeType) { // If supported
                xhr.overrideMimeType("application/json"); // set MIME to prevent errors
            }
        }
    });

    //  FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
    function loadTimetable() {                      // Declare function
        $.getJSON('data/example.json')              // Try to collect JSON data
        .done(function(data){                       // If successful
            times = data;                           // Store it in a variable
        }).fail( function() {                       // If a problem: show message
            $('#event').html('Sorry! We could not load the timetable at the moment');
        });
    }
    loadTimetable();                                // Call the function

/*** 1. A jQuery event helper method waits for users to click on the name of an event. It will load the timetable for that event into the
middle column.
2. The preventDefault() method prevents the link from opening a page (because it is will show the AJAX data instead).
3. A variable called loc is created to hold the name of the event location. It is collected from the id attribute of the link that was clicked.
4. The HTML for the timetables will be stored in a variable called newContent. It is set to a blank string.
5. Each session is stored inside an <li> element, which starts by displaying the time of the session.
6. A link is added to the timetable, which will be used to load the description. The link points to the descriptions.html file. It is followed 
by a # symbol so it links to the correct part of the page.
7. The session title is added after the # symbol. The •replace() method replaces spaces in the title with a dash to match the value of the id 
attribute in the descriptions.html file for each session.
8. Inside the link you can see the title of the session.
9. The new content is added into the middle column.
10. The class attributes on the event links are updated to show which event is the current event.
11. The third column is emptied if it had content. **/

// CLICK ON THE EVENT TO LOAD A TIMETABLE
$('#content').on('click', '#event a', function(e) { // User clicks on place

    e.preventDefault();                             // Prevent loading page
    var loc = this.id.toUpperCase();                // Get value of id attr

    var newContent = '';                        //To build up timetable
    for (var i = 0; i < times[loc].length; i++) {
        newContent += '<li><span class ="time">' + times[loc][i].time + '</span>';
        newContent += '<a href="descriptions.html#';
        newContent += times[loc][i].title.replace(/ /g, '-') + '">';
        newContent += times[loc][i].title + '</a></li>';
    }
    $('#sessions').html('<ul>' + newContent + '</ul>'); // Display time

    $('#event a.current').removeClass('current');   // Update selected link
    $(this).addClass('current');

    $('#details').text('');                 // Clear third column
    });

/** 1. Another jQuery event helper method is set up to respond when a user clicks on a session in the middle column. It loads a description of
 the session.
2. preventDefault() stops the link opening.
3. A variable called fragment is created to hold the link to the session. This is collected from the href attribute of the link that was clicked.
4. A space is added before the # symbol so that it is the correct format for the jQuery load() method to collect part (not all) of the HTML 
page, e.g., description.html #Arduino-Antics 
5. A jQuery selector is used to find the element whose id attribute has a value of details in the third column. The .load() method is then used 
to load the session description into that element.
6. The links are updated so that they highlight the appropriate session in the middle column. ***/

    // CLICK ON A SESSION TO LOAD THE DESCRIPTION
$('#content').on('click', '#sessions li a', function(e) {   // Click on session
    e.preventDefault();                                     // Prevent loading
    var fragment = this.href;                               // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#details').load(fragment);                           // To load info

    $('#sessions a.current').removeClass('current');    // Update selected
    $(this).addClass('current');
});

// CLICK ON PRIMARY NAVIGATION
$('nav a').on('click', function(e) {                // Click on nav
    e.preventDefault();                             // Prevent loading
    var url = this.href;                            // Get URL to load

    $('nav a.current').removeClass('current');      // Update nav
    $(this).addClass('current');

    $('#container').remove();                    // Remove old
    $('#content').load(url + ' #container').hide().fadeIn('slow');  // Add new
});
});