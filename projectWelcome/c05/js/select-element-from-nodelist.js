var firstItem;
var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
    var firstItem = elements.item(0);
}

var el = document.getElementById('selectTest');
el.textContent = firstItem;