
// select the element and store it in a variable

var elNodeList = document.getElementsByTagName('h1');
var elNodeList1 = document.getElementsByTagName('li');
var elNodeList2 = document.getElementsByClassName('hot');
var elNodeList3 = document.querySelectorAll('li[id]');


var el = document.getElementById('NodeListTest');

el.textContent = elNodeList + "\n" + elNodeList1 + "\n" + elNodeList2 + "\n" + elNodeList3;

