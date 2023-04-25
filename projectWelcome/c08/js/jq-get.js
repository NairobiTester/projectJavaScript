/***
JQUERY'S AJAX SHORTHAND METHODS - jQuery provides four shorthand methods to handle specific types of Ajax requests. The methods below are all
shorthand methods. If you look at the source code for jQuery, you would see that they all use the $.ajax() method. You will meet each one 
over the next few pages because they introduce key aspects of the $.ajax() method. These methods do not work on a selection like other jQuery
methods, which is why you prefix them with only the $ symbol rather than a jQuery selection. They are usually triggered by an event, such as 
the page having loaded or the user interacting with the page (e.g., clicking on a link, or submitting a form). With an Ajax request, you will
often want to send data to the server, which will in turn affect what the server sends back to the browser. As with HTML forms (and the
Ajax requests you met earlier in the chapter), you can send the data using HTTP GET or POST.

METHOD                                      DESCRIPTION
$.get(url[, data][, callback][, type]) - HTTP GET Request for data
$.post(url[, data][, callback][, type]) - HTTP POST to update data on the server
$.getJSON(url[, data][, callback]) - loads JSON data using a GET request
$.getScript(url[, callback]) - Loads and executes JavaScript(e.g. JSONP) using a GET request

The parameters in square brackets are optional. 
$ - shows that this is a method of the jQuery object.
url - specifies where the data is fetched from.
data - provides any extra information to send to the server.
callback - indicates that the function should be called when data is returned (can be named or anonymous).
type - shows the type of data to expect from the server.

REQUESTING DATA -  Here, users vote for their favorite t-shirt without leaving the page.
1. If users click on a t-shirt, an anonymous function is triggered.
2. e.PreventDefault() stops the link opening a new page.
3. The user's choice is the value of the id attribute on the image. It is stored in a variable called queryString in the format of a 
query string, e.g., vote=gray.
4 . The $.get() method is called using three parameters:
    i) The page that will handle the request (on the same server).
    ii) The data being sent to the server (here it is a query string, but it could be JSON).
    iii) The function that handles the result the server sends back; in this case it is an anonymous function.  
When the server responds, the anonymous callback function handles the data. In this case, the code in that function selects the element that 
holds the t-shirts and replaces it with the HTML sent back from the server. This is done using jQuery's .html() method. **/

/**  $('#selector a').on('click', function(e) {
        e.preventDefault();
        var queryString = 'vote=' + event.target.id;
        $.get('/php/votes.php', queryString, function(data) {
            $('#selector').html(data);
        });
    });

Here is the HTML created by code inside the Js file.
 <div class="third"><a href="vote.php?vote=gray">
 <img src="img/t-gray.png" id="gray" alt="gray" /></a></div>
 <div class="third"><a href="vote.php?vote=yellow">
 <img src="img/t-yellow.png" id="yellow" alt="yellow" /></a></div>
 <div class="third"><a href="vote.php?vote=green">
 <img src="img/t-green.png" id="green" alt="green" /></a></div>
 
 See working code below **/


 // NOTE: This example will only work if you run it on a web server (it will not work locally)

// This first variable creates the t-shirt options, the HTML for it is shown on p395

/*var vote = '<div id="vote"><div class="third"><a href="http://example.org"><img src="img/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="php/votes.php" id="yellow"><img src="img/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="php/votes.php"><img src="img/t-green.png" id="green" alt="green" /></a></div></div>';
$('#selector').append(vote);*/

// code
$('#vote a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + $(e.target).attr('id');
  $.get('php/votes.php', queryString, function(data) {
    $('#vote').html(data);
  });
}); 

