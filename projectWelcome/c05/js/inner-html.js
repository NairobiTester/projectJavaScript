/* ACCESS & UPDATE TEXT AND MARKUP WITH INNER HTML - 

consider: <li id="one"><em>fresh</ em> figs</ li>

GET CONTENT
The following line of code collects the content of the list item and adds it to a variable called elContent:
var elContent = document.getElementByld('one').innerHTML;
The elContent variable would now hold the string:
' <em>fresh</ em> figs'

SET CONTENT
The following line of code adds the content of the elContent variable (including any markup) to the first list item:
document.getElementByld('one').innerHTML = elContent;  

When adding new content using innerHTML, be aware that one missing closing tag could throw out the design of the entire 
page. Even worse, if innerHTML is used to add content that your users created to a page, they could add malicious 
content **/

/*UPDATE TEXT AND MARK-UP */

// Store the first list item in a variable
var firstItem = document.getElementById('one');

//Get the content of the first list item
var itemContent = firstItem.innerHTML;

//Update the content of the first list item so it is a link
firstItem.innerHTML = '<a href=http://example.org>' + itemContent + '</a>';