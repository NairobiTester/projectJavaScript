/*** Using TRY, CATCH, FINALLY to handle errors.
 This example displays JSON data to the user. But, imagine that the data is coming from a third party and there have 
 been occasional problems with it that could cause the page to fail. This script checks if the JSON can be parsed using a try block before 
 trying to display the information to the users. 
 
If the try statement throws an error (because the data cannot be parsed), the code in the catch code block will be run, and the error will not
prevent the rest of the script from being executed. The catch statement creates a message using the name and message properties of the Error
object.

The error will be logged to the console, and a friendly message will be shown to the users of the site. You could also send the error message 
to the server using Ajax so that it could be recorded. Either way, the finally statement adds a link that allows users to refresh the
data they are seeing. ***/

var feed = document.getElementById('feed');

// Correct feed
var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
// Feed with errors - comment the next line out to see it working
response = '{"deals": [{"title": "Farrow and Ball", "description": "New season 2.5l '; // JSON data

if (response) {
    try{
        var dealData = JSON.parse(response);                        // Try to parse JSON
        showContent(dealData);                                      // Show JSON data
    } catch(e) {
        var errorMessage = e.name + ' ' + e.message;                // Create error msg
        console.log(errorMessage);                                  // Show devs msg
        feed.innerHTML = '<em> Sorry, could not load deals </em>';    // Users msg
    } finally {
        var link = document.createElement('a');                     // Add refresh link
        link.innerHTML = '<a href="try-catch-finally.html">reload</a>';
        feed.appendChild(link);
    }
}

function showContent(dealData) {
    var newContent = ' ';
    for (var i in dealData.deals) {
        newContent += '<div class = "deal">';
        newContent += '<h2>' + dealData.deals[i].title + '</h2>';
        newContent += '<p>' + dealData.deals[i].description + '</p>';
        newContent += '<p>' + dealData.deals[i].description + '</p>';
        newContent += '<a href = "' + dealData.deals[i].link + '">';
        newContent += ' ' + dealData.deals[i].link;
        newContent += '</a>';
        newContent += '</div>';

    }
    feed.innerHTML = newContent;
}

/**** If you know something might cause a problem for your script, you can generate your own errors before the interpreter creates them. 
 To create your own error, you use the following line: throw new Error("message");
 
Being able to throw an error at the time you know there might be a problem can be better than letting that data cause errors further into the 
script. If you are working with data from a third party, you may come across problems such as:
    • JSON that contains a formatting error
    • Numeric data that occasionally has a nonnumeric value
    • An error from a remote server
    • A set of information with one missing value
Bad data might not cause an error in the script straight away, but it could cause a problem later on. In such cases, it helps to report the 
problem straight away. It can be much harder to find the source of the problem if the data causes an error in a different part of the script.

This creates a new Error object (using the default Error object). The parameter is the message you want associated with the error. This message 
should be as descriptive as possible. For example, if a user enters a string when you expect a number, it might not throw an error immediately.
However, if you know that the application will try to use that value in a mathematical operation at some point in the future, you know that it 
will cause a problem later on. If you add a number to a string, it will result in a string. If you use a string in any other mathematical
calculations, the result would be NaN. In itself, NaN is not an error; it is a value that is not a number. Therefore, if you throw an error 
when the user enters a value you cannot use, it prevents issues at some other point in the code. You can create an error that explains the 
problem, before the user gets further into the script. 
 */