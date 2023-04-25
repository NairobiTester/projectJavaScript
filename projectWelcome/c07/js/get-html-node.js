/***
 The selector returns the four <li> elements, but the .html() method returns only the contents of the first one. This is then appended to the
end of the selection, in this case after each existing <li> element. **/

var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '<i>');
