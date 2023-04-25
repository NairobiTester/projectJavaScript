/**** SESSION STORAGE - sessionStorage is more suited to information that: 
•Changes frequently (each time the user visits the site - such as whether they are logged in or location data).
• Is personal and should not be viewed by other users of the device. 

Local Storage is best suited to information that:
• Only changes at set intervals (such as timetables / price lists), which can be helpful to store offline.
• The user might want to come back and use again (such as saving preferences / settings).
 ***/

if (window.sessionStorage) {

    var txtUsername = document.getElementById('username'); // Get form elements
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username'); // Elements populated by session storage
    txtAnswer.value = sessionStorage.getItem('answer');

    txtUsername.addEventListener('input', function () {      // Save data
        sessionStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function () {       // Save data
        sessionStorage.setItem('answer', txtAnswer.value);
    }, false);
}