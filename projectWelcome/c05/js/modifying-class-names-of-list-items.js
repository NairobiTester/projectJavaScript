/* This code will change the color of the first three list items to aqua by modifying the classname of the three items. 
Without including this script, the color of the first three items are metallic red */

var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
if (hotItems.length > 0) {                          // If it contains items

  for (var i = 0; i < hotItems.length; i++) {       // Loop through each item
    hotItems[i].className = 'cool';         // Change value of class attribute
  }

}