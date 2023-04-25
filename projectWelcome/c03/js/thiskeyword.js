// This keyword: Global Variables
/* All global variables also become properties of the window object. So when a function is in the global
context, you can access global variables using the window object, as well as its other properties. Here, the 
showWidth() function is in global scope, and this.width refers to the width variable: the function would write
a value of 600 into the page (using the document object's write() method).  */

var width = 600;
var shape = {width: 300};

var showWidth = function () {
    document.write(this.width);
};

//solve the below code, there are issues

var windowsWidth = showWidth();


//shape.getWidth = showWidth;
//var wWidth = shape.getWidth();

var elThisKeyword = document.getElementById('message');
 elThisKeyword.textContent = 'Windows Width: ' + windowsWidth;