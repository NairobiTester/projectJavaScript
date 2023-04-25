/* ACCESS & UPDATE TEXT WITH TEXTCONTENT (& INNERTEXT) - The textContent property allows you to collect or update just
the text that is in the containing element (and its children).  There is also another property called innerText which 
should be generally avoided because it's not supported by firefox, is slow in performance, and will not show any
content that has been hidden by CSS.

In most browsers: • textContent collects the words fresh figs. • innerHTML just shows figs (because fresh was hidden by 
the CSS).*/

var firstItem = document.getElementById('one'); // Find first list item
var showTextContent = firstItem.textContent;    // Get value of textContent
var showInnerText   = firstItem.innerText;      // Get value of innerText

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'KingsMeal Bread'; // update the first item