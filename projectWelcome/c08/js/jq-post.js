/***
SENDING FORMS USING AJAX - To send data to the server, you are likely to use the .post() method. jQuery also provides the •serialize() method 
to collect form data.

SENDING FORM DATA - The HTTP POST method is often used when sending form data to a server and it has a corresponding function, the .post() 
method. It takes the same three parameters as the .get() method:
    i) The name of the file on the (same) server that will process the data from the form
    ii) The form data that you are sending
    iii) The callback function that will handle the response from the server
In the code example below, the $.post() method is used with a method called •serialize(), which is very helpful when working with forms.
Together they send the form data to the server. 

COLLECTING FORM DATA - jQuery's •serialize() method:
• Selects all of the information from the form
• Puts it into a string ready to send to the server
• Encodes characters that cannot be used in a query string
Typically, it will be used on a selection containing a <form> element (although it can be used on individual elements or a subsection of a form).
It will only send successful form controls, which means it will not send:
• Controls that have been disabled
• Controls where no option has been selected
• The submit button 

SERVER-SIDE - When a server-side page handles a form, you might want the same page to work whether:
• It was a normal request for a web page (in which case you would send the whole page); or
• It was an Ajax request (where you might respond with just a fragment of the page)

On the server, you can check whether a page is being requested by an Ajax call using the X-Requested-With header. If it is set and has a value
of XMLHttpRequest, you know that the request was an Ajax request. 

SUBMITING FORMS -
1. When users submit the form, an anonymous function runs.
2. e.PreventDefault() stops the form from submitting.
3. The form data is collected by the .serialize() method and stored in the details variable. 
4. The $.post() method is called using all three parameters:
    i) The url of the page that the data is being sent to
    ii) The data that was just collected from the form
    iii) A callback function that will display the results to the user 
5. When the server responds, the content of the element whose id attribute has a value of register is overwritten with new HTML sent from the 
server.
***/
$('#register').on('submit', function(e) { // When form is submitted
    e.preventDefault();         // Prevent it being sent
    var details = $('#register').serialize(); // Serialize form data
    $.post('php/register.php', details, function(data) { // Use $.post() to send it
        $('#register').html(data);              // Where to display result
    });
});


/*$('#register').on('submit', function(e) {           // When form is submitted
    e.preventDefault();                               // Prevent it being sent
    var details = $('#register').serialize();         // Serialize form data
    $.post('register.php', details, function(data) {  // Use $.post() to send it
      $('#register').html(data);                    // Where to display result
    });
  });*/