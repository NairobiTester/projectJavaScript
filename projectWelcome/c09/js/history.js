/***** HISTORY API AND PUSHSTATE - If you move from one page to another, the browser's history remembers which pages you visited. But Ajax 
applications do not load new pages, so they can use the history API to update the location bar and history.  

WHAT THE HISTORY API DOES - Each tab or window in the browser keeps its own history of pages you have viewed. When you visit a new page in 
that tab or window, the URL is added to the list of pages you have visited in the history. Because of this, you can use the back and forward
buttons in a browser to move between pages you have visited in that tab or window. However, on sites that use Ajax to load information, 
the URL is not automatically updated (and the back button might not show the last thing that the user was viewing).  HTMLS's history API can 
help fix this problem. It lets you interact with the browser's history object:
• You can update the browser history stack using the pushState() and replaceState() methods.
• Extra information can be stored with each item. As you will see, information can be added to the history object when an Ajax request is made,
and the user can be shown the right content when they press back or forward buttons.

BROWSING PAGES - As you browse, the URL in your web browser's address bar updates. The page is also added to the top of something called the 
history stack. 
Pressing back: takes you back down the stack
Pressing forward: takes you up the stack (where possible)
New page: if you request a new page, it will replace anything above the current page in the stack 

State refers to the condition that something is in at a particular time. The browser history is like a pile (or stack) of states, one on top of 
the other. The methods on this page will allow you to manipulate the state in browsers 

ADDING INFORMATION TO THE HISTORY OBJECT  - pushState() adds an entry to the history object. replaceState() updates the current entry. Both take
the same three parameters (below), each of which updates the history object. Because the history object is a child of the window
object, you can use its name directly in the script; you can write history.pushState(), you do not need to write window.history.pushState(). 

    history.pushState(state , title , url );

1. The history object can store information with each item in the history. This is provided in the state parameter and can be retrieved when 
you go back to that page. 
2. Currently unused by most browsers, the title parameter is intended to change the title of the page. (You can specify a string for this value,
 ready for when browsers support it.)
3. The URL that you want the browser to show for this page. It must be on the same origin as the current URL and it should show the correct 
content if the user goes back to that URL. 

GETTING INFORMATION FROM THE HISTORY OBJECT
Adding content to the browser history is only part of the solution; the other half is loading the right content when the user presses the back 
or forward buttons. To help show the right content, the onpopstate event fires whenever the user requests a new page. 

This onpopstate event is used to trigger a function that will load the appropriate content into the page. There are two ways to determine what 
content should be loaded into the page:

• The location object (which represents the browser's location bar)
• The state information in the history object 

The location object: If the user presses back or forward, the address bar will update itself, so you can get the URL for the page that should 
be loaded using location.pathname (the location object is a child of the window object and its pathname property is the current URL). This
works well when you are updating an entire page. 

The state: Because the first parameter of the pushState() method stores data with the history object for that page, you can use it to store 
JSON-formatted data. That data can then be loaded directly into the page. (This is used when the new content loads data rather than a 
traditional web page.)

THE HISTORY OBJECT - The HTML5 history API describes the functionality of the history object in modern web browsers. It lets you access and 
update the browser history (but only for pages the user visited on your site).  Even if the visitor is not taken to a new page in the browser 
window (for example, when only a part of the page is updated using Ajax), you can modify the history object to ensure that the back and 
forward buttons work as the user would expect them to on non-Ajax pages. Again, the table below is indicative of the kind you might see in API 
documentation. As you become comfortable using the methods, properties, and events of an object you will find it easier to work with all kinds 
of APls.

history OBJECT

METHOD                   DESCRIPTION
history.back()           Takes you back in the history, like the browser's back button.
history.forward()        Takes you forward in the history, like the browser's forward button
history.go()             Takes you to a specific page in the history. It is an index number, starting at 0. •go(1) is like clicking the 
                         forward button and .go(-1) is like clicking back
history.pushState()      Adds an item to the history stack (Clicking on a relative link in a page usually triggers a hashchange event, rather 
                         than load, but no event fires if you use pushState() and the url contains a hash)
history.replaceState()   Does the same as pushState() except it modifies the current history entry

PROPERTY                 DESCRIPTION
length                   Tells you how many items are in the history object

EVENT                    DESCRIPTION
window.onpopstate        Used to handle the user moving backwards or forwards 

****/

$ (function() {                                         /*** DOM has loaded. The loadContent() function uses jQuery's .load()
                                                            method to load content into the page **/
    function loadContent(url) {                         // Load new content into page
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    }

    $('nav a').on('click', function(e) {                // Click handler. If a link is clicked on, an anonymous function runs. 
        e.preventDefault();                             // Stop link loading new page
        var href = this.href;                           // Get href attribute of link. The page to load is held in a variable called href. 
        var $this = $(this);                            // Store link in jQuery object
        $('a').removeClass('current');                  // Remove current from links. The current links are updated. 
        $this.addClass('current');                      // Update current link
        loadContent(href);                              // Call function: loads content. The loadContent() function is called.
        history.pushState('', $this.text, href);        // Update history. The pushState() method of the history object updates the history stack. 
    });

    window.onpopstate = function() {                    /** Handle back/forward buttons. When the user clicks backwards or forwards,
                                                            the onpopstate event fires. This is used to trigger an anonymous function **/
        var path = location.pathname;                   /** Get the file path. The browser's location bar will display the corresponding page 
                                                            from the history stack, so location.pathname is used to obtain the path for
                                                            the page that needs to be loaded   ***/
        loadContent(path);                              /** Call function to load page. The loadContent() function (in step 1) is called
                                                            again, to retrieve the specified page. **/ 
        var page = path.substring(location.pathname.lastIndexOf("/") + 1);
        $('a').removeClass('current');                  // Remove current from links
        $('[href="' + page + '"]').addClass('current'); /** Update current link. The file name is retrieved so that the current
                                                        link can be updated. ***/

    }
});