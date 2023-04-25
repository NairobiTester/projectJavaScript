/** AJAX REQUESTS WITH FINE-GRAINED CONTROL - The $.ajax() method gives you greater control over Ajax requests. Behind the scenes, this method 
is used by all of jQuery's Ajax shorthand methods. Inside the jQuery file, the $.ajax() method is used by the other Ajax helper methods that 
you have seen so far (which are offered as a simpler way of making Ajax requests). This method offers greater control over the entire process,
with over 30 different settings that you can use to control the Ajax request. You can see a selection of these settings in the table below. 
These settings are provided using object literal notation (the object is referred to as the settings object).
The code example looks and works like the one that demonstrated the •load() method. But it uses the $.ajax() method instead.

• The settings can appear in any order, as long as they use valid JavaScript literal notation.
• The settings that take a function can use a named function or an anonymous function written inline.
• $.ajax() does not let you load just one part of the page so the jQuery .find() method is used to select the required part of the page. 

SETTING     DESCRIPTION
type - Can take values GET or POST depending on whether the request is made using HTTP GET or POST
url - The page the request is being sent to
data - The data that is being sent to the server with the request
success - A function that runs if the Ajax request completes successfully (similar to the •done() method)
error - A function that runs if there is an error with the Ajax request (similar to the .fail() method)
beforeSend - A function (anonymous or named) that is run before the Ajax request starts. In the following example, this is used to trigger a 
loading icon.
complete - Runs after success/error events. In the following example, this removes a loading icon timeout. The number of milliseconds to wait 
before the event should fail

CONTROLING AJAX - When the user clicks on a link in the <nav> element, new content is loaded into the page. This is
very similar to the example for the .load() method, but that shorthand method only required one line.
1. Here the click event handler triggers the $.ajax() method. This example sets seven settings for the $.ajax() method.
The first three are properties, the final four are anonymous 'functions triggered at different points in the Ajax request.
2. This example sets the timeout property to wait two seconds for the Ajax response.  
3. The code also adds elements into the page to show that data is loading. You may not see them appear if the request is handled
quickly, but you will see them if the page is slower to load.
4. If the Ajax request fails, then an error message will be shown to  the user. **/

$('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;                                // URL to load
    var $content = $('#content');                       // Cache selection

    $('nav a.current').removeClass('current');          // Update links
    $(this).addClass('current');                        
    $('#container').remove();                           // Remove content

    $.ajax({
        type: "GET",                                   // GET or POST
        url: url,                                       // Path to file
        timeout: 2000,                                  // Waiting time
        beforeSend: function() {                        // Before Ajax
            $content.append('<div id="load">Loading</div>');    // Load message
        },
        complete: function() {                              // Once finished
            $('#load').remove();                         // Clear message
        },
        success: function(data) {                           // Show content
            $content.html( $(data).find('#container') ).hide().fadeIn(400);
        },
        error: function() {                                  // Show error message
            $content.html('<div id="container">Please try again soon. </div>');
        }
    });

});


