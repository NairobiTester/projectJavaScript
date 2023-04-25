/**** THROW ERROR FOR NaN - If you try to use a string in a mathematical operation (other than in addition), you do not get an error, you get a 
 special value called NaN (not a number). In this example, a try block attempts to calculate the area of a rectangle. If it is given numbers
to work with, the code will run. If it does not get numbers, a custom error is thrown and the catch block displays the error.

By checking that the results are numeric, the script can fail at a specific point and you can provide a detailed error about what caused the 
problem (rather than letting it cause a problem later in the script). 

There are two different errors shown: one in the browser window for the users and another in the console for the developers. This not only 
catches an error that would not have been thrown otherwise, but it also provides a more descriptive explanation of what caused the error.  
****/

var width = 12;
var height = 'test';

function calculateArea(width, height) {
    try {
        var area = width * height;
        if (!isNaN(area)) {
            return area;
        } else {
            throw new Error ('calculateArea() received invalid number');
        }
    } catch (e) {
        console.log(e.name + ' ' + e.message);
        return 'We were unable to calculate the area.';
    }
}

// TRY TO SHOW THE AREA ON THE PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);

/*** CODE PLAYGROUNDS - If you want to ask about problematic code on a forum, in addition to pasting the code into a post, you could add it to
 a code playground site (such as JSBin.com, JSFiddle.net, or Dabblet.com) and then post a link to it from the forum. (Other popular playgrounds
include CSSDeck.com and CodePen.com - but these sites place more emphasis on show and tell.)  

VALIDATION TOOLS
There are a number of on line validation tools that can help you try to find errors in your code:

JAVASCRIPT
http://www.jslint.com
http://www.jshint.com

JSON
http:// www.jsonlint.com

JQUERY
There is a jQuery debugger plugin available for Chrome which can be found in the Chrome web store. ***/