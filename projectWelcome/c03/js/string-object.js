/* Global Objects: String Objects - Whenever you have a value that is a string, 
you can use the properties and methods of the String object on that value
Some Methods:
    charAt() - Takes an index number as a parameter, and returns the character found at that position
    indexOf() - Returns index number of the first time a character or
                set of characters is found within the string 
    lastindexOf() - Returns index number of the last time a character or
                 set of characters is found within the string 
    substring() - Returns characters found between two index numbers where the character for the first index 
                    number is included and the character for the last index number is not included 
    split() - When a character is specified, it splits the string each time it is found, then stores each
                individual part in an array 
    trim() - Removes whitespace from start and end of string 
    replace() - Like find and replace, it takes one value that should be found, and another to replace it
                 (by default, it only replaces the first match it finds) 
If a variable or the property of an object contains a string, you can use the properties and methods of the
 String object on it.  */

var saying = 'Home sweet home ';
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;