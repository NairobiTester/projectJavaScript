
/***CREATING TAB PANELS - 
 1. A jQuery selection picks all sets of tabs within the page. The .each() method calls an anonymous function that is run for each set of 
 tabs (like a loop). The code in the anonymous function deals with one set of tabs at a time, and the steps would be repeated for each set of 
 tabs on the page.
2. Four variables hold details of the active tab:
i) $this holds the current set of tabs.
ii) $tab holds the currently active tab.
The .find() method selects the active tab.
iii) $link holds the <a> element within that tab.
iv) $panel holds the value of the href attribute for the active tab (this variable will be used to hide the panel if the user selects a 
different one).
3. An event listener is set up to check for when the user clicks on any tab within that list. When they do, it runs another anonymous function.
4. e.preventDefault() prevents the link that users clicked upon taking them to that page.
5. Creates a variable called $link to hold the current link inside a jQuery object.
6. Creates a variable called id to hold the value of the href attribute from the tab that was clicked. It is called id because it is used to 
select the matching content panel (using its id attribute).
7. An if statement checks whether the id variable contains a value, and the current item is not active.
• If both conditions are met: 
8. The previously active tab and panel have the class of active removed (which deactivates the tab and hides the panel).
9. The tab that was clicked on and its corresponding panel both have active added to their class attributes (which makes the tab look active 
and displays its corresponding panel, which was hidden). At the same time, references to these elements are stored in the $panel and 
$tab variables. 
 */

$('.tab-list').each(function() {                    // Find lists of tab
    var $this = $(this);                            // Store this list
    var $tab = $this.find('li.active');             // Get the active list item
    var $link = $tab.find('a');                     // Get link from active tab
    var $panel = $($link.attr('href'));             // Get active panel

    $this.on('click', '.tab-control', function(e) { // When click on a tab
        e.preventDefault();                         // Prevent link behaviour
        var $link = $(this);                        // Store the current link
        var id = this.hash;                         // Get href of clicked tab

        if (id && !$link.is('.active')) {       // If not currently active
            $panel.removeClass('active');       // Make panel inactive
            $tab.removeClass('active');         // Make tab inactive

            $panel = $(id).addClass('active');  // Make new panel active
            $tab = $link.parent().addClass('active');   // Make new tab active
        }
    });
});