var firstItem; 
var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
    var firstItem = elements[0];
}
var el = document.getElementById('selectTest1');
el.textContent = firstItem;