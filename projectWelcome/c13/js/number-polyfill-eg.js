/*** POLYFILL USING MODERNIZR & YEPNOPE - You can see Modenizr used with a conditional loader so that it only loads a fallback script if one 
is needed. Modernizr lets you test whether or not a browser and device support certain features; this is known as feature detection. You can 
then take different courses of action depending on whether or not the features were supported. For example, if an older browser does not support
a feature, you might decide to use a polyfill. Modernizr is sometimes included in the <head> of an HTML page when it needs to perform checks 
before the page has loaded (for example, some HTML5/CSS3 polyfills must be loaded before the page). 

MODERNIZR ON ITS OWN - Each feature you test using Modernizr becomes a property of the Modernizr object. If the feature is supported, the 
property contains true; if not, it contains false. You then use the properties of the Modernizr object in a conditional statement as
shown below. Here, if Modernizr's cssanimations property does not return true the code in the curly braces runs.
    
    if (!Modernizr.cssanimations){
    //CSS animations are not supported
    //Use jQuery animation instead 
    }

Rather than loading a polyfill script for everyone who visits your site (even if they do not need to use it), you can use something called a 
conditional loader, which will let you load different files depending on whether a condition returns true or false. Modernizr is commonly used 
with a conditional loader called YepNope.js, so polyfills are only loaded if needed. Once you have included the YepNope script in your
page, you can call the yepnope() function. It uses object literal syntax to indicate a condition to test, and then what files to load 
depending on whether the condition returned true or false.

MODERNIZR + YEPNOPE
YepNope is passed an object literal, which usually contains a minimum of three properties:
• test is the condition being checked. Here Modernizr is used to check if cssanimations are supported.
• yep is the file to load if the condition returns true.
• nope is the file to load if the condition returns false (here it loads two files using array syntax).

    yepnope({
        test: Modernizr.cssanimations,
        yep: 'css/animations.css',
        nope: ('js/jquery.js', 'js/animate.js']
    }); 
 
 CONDITIONAL LOADING OF A POLYFILL -  This example tests if the browser supports the <input> element using a type attribute with a value of 
 number. Both Modernizr and YepNope are included in the <head> of the page so that the fallback is shown correctly. The yepnope() function 
 takes an object literal as a parameter. It's properties include:  
 
    • test: the feature you are checking for. In this case it is checking Modernizr to see if the number input is supported.
    • yep: not used in this example, can load files if the feature is supported.
    • nope: what to do if feature is not supported (you can load multiple files in an array).
    • complete: can run a function when the checks are complete, and any necessary files have loaded. Here it adds a message to the console to
    demonstrate how it works.
Note that Modernizr stores the value of the <input> element's type attribute, in a child object called inputtypes. E.g., to check if the HTML5 
date selector is supported, you use: Modernizr.inputtypes.date (not Modernizr.date). ***/

yepnope({
    test: Modernizr.inputtypes.number,
    nope: ['js/numPolyfill.js', 'css/number.css'],
    complete: function() {
        console.log('YepNope + Modernizr are done');
    }
});
