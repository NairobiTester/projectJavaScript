/*** WEB STORAGE API: STORING DATA IN BROWSERS - Web storage (or HTMLS storage) lets you store data in the browser. There are two different
 types of storage: local and session storage.
 
 STORAGE                         LOCAL      SESSION
Is the data stored when you      Yes        No
close a window/tab?

Can all open windows/tabs        Yes        No
access the data? 

Commonly, browsers store 5MB of data per domain in a storage object. If a site tries to store more than 5mb of data, the browser will usually 
ask the user whether they want to allow this site to store more information (never rely on users agreeing to give a site more space).

The data is stored as properties of the storage objects (using key/value pairs). The value in the pair is always a string. To protect the
information that a website stores in these storage objects, browsers employ a same origin policy, which means data can only be accessed by
other pages in the same domain.

For example, in http://www.google.com:80 , the following four parts of the URL must match.

1. Protocol (http://): The protocol must be a match. If data was stored by a page that starts http, the storage object cannot be accessed via
 https.
2. Subdomain (www): The subdomain name must match. For example, maps.google.com cannot access data stored by www.google.com.
3. Domain (google.com): The domain name must match. For example, google.com cannot access local storage from facebook.com.
4. Port (80): The port number must match. Web servers can have many ports. Usually a port number is not specified in a URL, and the site uses
 port 80 for web pages, but the port number can be changed.

The storage objects are just one of the new HTML5 APls for storing data. Others include access to the file system (through the FileSystem API)
and client side databases such as the Web SQL database. 

HOW TO ACCESS THE STORAGE API
Both of these objects are implemented on the window object, so you do not need to prefix the method names with any other object name.
To save an item into the storage object, you use the setltem() method, which takes two parameters: the name of the key and the value associated
with it. To retrieve a value from the storage object you use the getItem() method, passing it the key.

// Store information
localStorage.setItem('age', '12');
localStorage.setltem('color', 'blue');

// Access information and store in variable
var age = localStorage.getltem('age');
var color= localStorage.getItem('color');

//Number of items stored
var items = localStorage.length;

You can also set and retrieve keys and values of the storage objects as you might with other objects using dot notation. The storage objects 
are commonly used to store JSON-formatted data. The JSON object's:
• parse() method is used to turn the JSON-formatted data into a JavaScript object
• stringify() method is used to transform objects into JSON-formatted strings

//Store information (object notation)
localStorage.age = 12;
localStorage.color = 'blue';

//Access information (object notation)
var age = localStorage.age;
var color = localStorage.color;

//Number of items stored
var items= localStorage.length; 

Data for the storage objects is stored and accessed in a synchronous manner: all other processing stops while the script accesses or saves the
data. Therefore, if a lot of data is regularly accessed or stored, the site can appear slower to use. The following table shows the methods
and property of the storage objects.

METHOD                  DESCRIPTION
setItem(key, value)     Creates a new key/value pair
getItem(key)            Gets the value for the specified key
removeItem(key)         Removes the key/value pair for the specified key
clear()                 Clears all information from that storage object

PROPERTY                DESCRIPTION
length                  Number of keys 


LOCAL STORAGE -  Both the local storage and session storage examples store what the user enters into text boxes, but both examples store it for 
different lengths of time 
In this example,
1. A conditional statement is used to check if the browser supports the relevant storage API
2. References to the inputs for the username and answer are stored in variables. 
3. The script checks to see if the storage object has a value for either of these elements using the getItem() method. If so, it is written 
into the appropriate input by updating its value property. 
4. Each time an input event fires on one of the inputs, the form will save the data to the localStorage or sessionStorage object. It will
automatically be shown if you refresh the page.
****/

if (window.localStorage) {

    var txtUsername = document.getElementById('username'); // Get form elements
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = localStorage.getItem('username');       // Elements populated
    txtAnswer.value = localStorage.getItem('answer');       // by localStorage data

    txtUsername.addEventListener('input', function () {     // Data saved
        localStorage.setItem('username', txtUsername.value);        
    }, false);

    txtAnswer.addEventListener('input', function () {      // Data saved
        localStorage.setItem('answer', txtAnswer.value);
    }, false);
}