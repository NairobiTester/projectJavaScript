// A basic JavaScript function that updates a message on an HTML file
var msg = 'Welcome to StarCodeCamp - Get 20% off!';
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();