/*** The selector returns the <ul> element. The .text() method gets the text from all of the <ul> element's children. This is then 
appended to the end of the selection, in this case after the existing <ul> element. 
 */

var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');