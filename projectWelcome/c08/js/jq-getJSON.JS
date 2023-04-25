/***
LOADING JSON AND HANDLING AJAX ERRORS - You can load JSON data using the $.getJSON() method. There are also methods that help you deal with 
the response if it fails.  
LOADING JSON - If you want to load JSON data, there is a method called $.getJSON() which will retrieve JSON from the same server that the page
is from. To use JSONP, you should use the method called $.getScript().
AJAX AND ERRORS - Occasionally, a request for a web page will fail and Ajax requests are no exception. Therefore, jQuery provides two methods 
that can trigger code depending on whether the request was successful or unsuccessful, along with a third method that will be triggered in 
both cases (successful or not). Below is an example that will demonstrate these concepts. It loads fictional exchange rates. 

SUCCESS/ FAILURE - There are three methods you can chain after $.get(), $.post(), $.getJSON(), and $.ajax() to handle success/failure. These 
methods are:
.done() - an event method that fires when the request has successfully completed
.fail() - an event method that fires when the request did not complete successfully
.always () - an event method that fires when the request has completed (whether it was successful or not)
Older scripts may use the •success(), •error(), and .complete() methods instead of these methods. They do the same thing, but these newer 
methods have been the preferred option since jQuery 1.8. 

JSON & ERRORS - 1. In this example, JSON data representing currency exchange rates is loaded into the page by a function called loadRates().
2. On the first line of the script, an element is added to the page to hold the exchange rate data.
3. The function is called on the last line of the script. 
4. Inside loadRates(), the $.getJSON method tries to load some JSON data. There are three methods chained after this method. They do not all run.
5 .done() only runs if the data is retrieved successfully. It contains an anonymous function that shows exchange rates and the time they were
 displayed.
6 •fail() only runs if the server cannot return the data. Its job is to display an error message to the user.
7 •always() will run whether or not the answer was returned. It adds a refresh button to the page, along with an event handler that triggers 
the loadRates() function again. **/

$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // SERVER RETURNS DATA
    var d = new Date();                                  // Create date object
    var hrs = d.getHours();                              // Get hours
    var mins = d.getMinutes();                           // Get mins
    var msg = '<h2>Exchange Rates</h2>';                 // Start message
    $.each(data, function(key, val) {                    // Add each rate
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
    $('#rates').html(msg);                               // Add rates to page
  }).fail( function() {                                  // THERE IS AN ERROR
    $('#rates').text('Sorry, we cannot load rates.');   // Show error message 
  }).always( function() {                                // ALWAYS RUNS
     var reload = '<a id="refresh" href="#">';           // Add refresh link
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // Add refresh link
     $('#refresh').on('click', function(e) {             // Add click handler
       e.preventDefault();                               // Stop link
       loadRates();                                      // Call loadRates()
     });
  }); 
}

loadRates();                                             // Call loadRates()