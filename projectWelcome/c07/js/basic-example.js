/** Here, the JavaScript file uses the $() shortcut for the jQuery() function. It selects elements and creates three 
  jQuery objects that hold references to the elements. The methods of the jQuery object fade the list items in, and remove
   them when they are clicked on. 
   1. The first line selects all of the <h1> - <h6> headings, and adds a value of headline to their class attributes. 
   2. The second line selects the first three list items and does two things:
                        • The elements are hidden (in order to allow the next step).
                        • The elements fade into view.
   3. The last three lines of the script set an event listener on each of the <li> elements. When a user clicks on one, 
   it triggers an anonymous function to remove that element from the page.**/

$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
    $(this).remove();
});