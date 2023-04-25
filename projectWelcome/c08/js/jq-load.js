/***
JQUERY & AJAX: RESPONSES - When using the •load() method, the HTML returned from the server is inserted into a jQuery selection. For the other 
methods, you specify what should be done when the data is returned using the jqXHR object. jQuery has an object called jqXHR, which makes it 
easier to handle the data that is returned from the server. See its properties and methods shown below:

JQXHR PROPERTIES        DESCRIPTION
    responseText - Text-based data returned
    responseXML - XML Data returned
    status - Status code
    status Text - Status description (typically used to display information about an error if one occurs)
JQXHR METHODS       DESCRIPTION
    .done() - Code to run if request was successful
    .fail() - Code to run if request was unsuccessfull
    .always() - Code to run if request succeeded or failed 
    .abort() - Halt the communication 

Because jQuery lets you chain methods, you can use the .done(), .fail(), and .always() methods to run different code depending on the
outcome of loading the data .

RELATIVE URLS
If the content you load via AJAX contain relative URLs (e.g., images and links) those URLs get treated as if they are relative to 
the original page that was loaded. If the new HTML is in a different folder from the original page, the relative paths could be broken.

LOADING HTML INTO A PAGE WITH JQUERY - The •load() method is the simplest of the jQuery Ajax methods. It can only be used to load HTML 
from the server, but when the server responds, the HTML is then loaded into the jQuery Selection for you.

JQUERY SELECTOR - You start by selecting the element that you want the HTML code to appear inside.
URL OF THE PAGE - Then you use the .load() method to specify the URL of the HTML page to load.
SELECTOR - You can specify that you want to load only part of the page (rather than the whole page).

$('#content').load('jq-ajax3.html #content');      

In the following example, links in the top right corner take the user to other pages. If the user has JavaScript enabled, when they click on a 
link, code inside the •on() event method stops it from loading a whole new page. Instead, the .load() method will replace the area highlighted 
in pink (whose id attribute has a value of content) with the equivalent area from the page that the user just requested. Only the pink area is
refreshed - not the whole page. 

LOADING CONTENT - When users click on any of the links in the <nav> element, one of two things will occur:
If they have JavaScript enabled, a click event will trigger an anonymous function that loads new content into the page. If they do not have 
JavaScript enabled, they will move from page to page as normal. 

Inside the anonymous function, five things happen:
1. e.preventDefault() stops the link taking users to a new page.
2. A variable called url holds the URL of the page to load. This is collected from the href attribute of the link the user clicked on. It
indicates which page to load. 
3. The class attributes on the links are updated to indicate which page is the current page.
4. The element holding the content is removed.
5. The container element is selected and .load() fetches the new content. It is hidden straight away using .hide() so that fadeIn() can fade 
it in. 

*****/

$('nav a').on('click', function(e) { // User clicks nav link
    e.preventDefault();              // Stop loading new link
    var url = this.href;            // Get value of href

    $('nav a.current').removeClass('current'); // Clear current indicator
    $(this).addClass('current');        // New current indicator

    $('#container').remove();           // Remove old content
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
});