/*** The angular-controller.js file uses a a constructor function to create an object called BasketCtrl. This object is known as a
controller or ViewModel. It is passed another object called $scope as an argument. Properties of the $scope object are set in the 
constructor function.
1. Note the object's name (BasketCtrl) matches the value of the ng-controller attribute on the opening <table> tag. In this example, 
there is no database, so the controller will also act as the model: sharing data with the view.  

The HTML file (the view) gets its data from the BasketCtrl object in the JavaScript controller. In the HTML, note how the names in curly braces,
e.g., { { cost } } and { { qty } } , match the properties of the $scope object in the JavaScript. The HTML file is now called a template 
because it will display whatever data is in the corresponding controller. The names in curly braces are like variables that match the data in 
the object. If the JavaScript object had different values, the HTML would show those values.

2. It is also possible to evaluate expressions inside the curly braces. In the final step in the code below (}), the subtotal is calculated
in the template. This is then formatted as a currency. Furthermore, if you update the quantity in the form, the underlying data model (in the 
JavaScript object) is updated along with the subtotal. Try updating the values in the JavaScript file, then refreshing the HTML to see the 
connection. This is an example of something programmers call data binding; the data in the JavaScript file is bound to the HTML and viceversa. 
If the ViewModel changes, the view updates. If the view changes, the View Model updates. 

As this shows, Angular is particularly helpful when you load data from a separate file into the view. A page can have multiple controllers, 
each of which has its own scope. In the HTML, the ng-controller attribute is used on an element to define the scope of that controller. This is 
similar to variable scope. For example, a different element might have a different controller (e.g., StoreCtrl), and both controllers would be 
able to have a property called description. Because the scope is only within that element, each controller's description property would only be 
used within that controller's scope. */

function BasketCtrl($scope) {
 $scope.description = 'Single ticket';
 $scope.cost = 8;
 $scope.qty = 3;
}