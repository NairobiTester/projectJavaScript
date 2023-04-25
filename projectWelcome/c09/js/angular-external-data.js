/** GETTING EXTERNAL DATA - Here, the controller (the JavaScript file) collects the model (the JSON data) from a file on the server. (In a
web app, the JSON data would usually come from a database.) This updates the view in the HTML. To collect the data, Angular uses what it calls
the $http service. Inside the angular.js file, the code uses the XMLHttpRequest object to make Ajax requests.

1. The path to the JSON file is relative to the HTML template, not the JavaScript file (even though the path is written in the JavaScript).
Just like jQuery's .ajax() method, the $http service has several shortcuts to make it easier to create some requests. To fetch data it uses 
get(), post(), and jsonp();to delete data it uses delete(); and to create new records: put(). This example uses get().

2. If the request successfully fetches data, the code in the success() function runs. In this case, if it is successful, the $scope object is
 passed the data from the JSON object. This allows the template to display the data.
3. If it fails, the error() function is run instead. This would show an error message to users. Here it writes to the console.
4. The JSON data contains several objects, each of which is displayed in the page. Note, there is no JavaScript loop written in the controller. 
Instead, the HTML template (or view) is where the loop occurs.
5. The ng-repeat directive on the opening <tr> tag indicates that the table row should act like a loop. It should go through each object in 
the sessions array and create a new table row for each of them.

In the HTML, the value of the ng- repeat directive is: session in sessions. This is just a very high-level introduction to Angular, but does 
demonstrate some popular techniques when using JavaScript to develop web apps, such as:
• sessions matches the JSON data; it corresponds with the object name.
• session is the identifier used in the template to indicate the name of each individual object within the sessions object.
If the ng-repeat attribute used different names than session, the value in the curly braces in the HTML would have to change to reflect that 
name. For example, if it said lecture in sessions, then the curly braces would change to reflect that:
{ { lecture.time }},{{ lecture.title }}, etc.

This is just a very high-level introduction to Angular, but does demonstrate some popular techniques when using JavaScript to develop web apps, 
such as:
• The use of templates that take content from JavaScript and update the HTML page.
• The rise in MVC-influenced frameworks for webbased application development.
• The use of libraries to save developers having to write so much code  **/

function TimetableCtrl($scope, $http) {
    $http.get('js/items.json')
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { console.log('error') });
    // The error could show friendly message to users
}