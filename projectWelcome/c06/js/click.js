/* CLICK - The aim of this example is to use the click event to remove the big note that has been added to the middle of 
the page. But first, the script has to create that note. Because the note is over the top of the page, we only want to 
show it to users who have JavaScript enabled (otherwise they could not hide it). When the click event fires on the 
close link the dismissNote() function is called. This function will remove the note that was added by the same script. 
The click event can be applied to any element, but it is better to only use it on items that are usually clicked or it 
will not be accessible to people who rely upon keyboard navigation. You may also be tempted to use the click event to 
run a script when a user clicks on a form element, but it is better to use the focus event because that fires when the 
user accesses that control using the tab key */

// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m.';
msg += ' During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');     // Create a new element
elNote.setAttribute('id', 'note');          // Add an id of note
elNote.innerHTML = msg;     // Add the message
document.body.appendChild(elNote);  // Add it to the page

function dismissNote()  {   // Declare function
    document.body.removeChild(elNote); // Remove the note
}
var elClose = document.getElementById('close');     // Get the close button
elClose.addEventListener('click', dismissNote, false); // click close-clear note