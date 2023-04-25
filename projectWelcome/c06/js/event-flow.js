/** This example shows the difference between bubbling and capturing. For the case where event handlers have a 
 value of false for their last parameter, it indicates events should be followed in bubbling phase, otherwise, true
 indicates the capturing phase**/
function showElement() {
    alert(this.innerHTML);
  }
  
  el = document.getElementById("list");   // <<< el is reused and not defined
  el.addEventListener('click', showElement, false);
  
  el = document.getElementById("item");
  el.addEventListener('click', showElement, false);
  
  el = document.getElementById("link");
  el.addEventListener('click', showElement, false);
  
  el = document.getElementById("list2");
  el.addEventListener('click', showElement, true);
  
  el = document.getElementById("item2");
  el.addEventListener('click', showElement, true);
  
  el = document.getElementById("link2");
  el.addEventListener('click', showElement, true);