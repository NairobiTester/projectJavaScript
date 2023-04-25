/** In this example, the values true or fa1se are used in the class attributes of HTML
elements. These values trigger different CSS class rules: true shows a check, fa1se shows a cross **/

var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;