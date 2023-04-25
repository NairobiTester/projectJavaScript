/*** The selector returns the four <li> elements. The .text() method gets the text from these. This is then appended to each of the <li> 
elements in the selection. **/

var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText+ '</i>');