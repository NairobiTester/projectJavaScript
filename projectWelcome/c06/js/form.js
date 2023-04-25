/* USING FORM EVENTS - When a user interacts with the drop-down select box, the change event will trigger the packageHint() 
function. This shows messages below the select box that reflect the choice. When the form is submitted, the checkTerms() 
function is called. This tests to see if the user has checked the box that indicates they agree to the terms and 
conditions. If not, the script will prevent the default behavior of the form element (and stop it from submitting the 
form data to the server) and it will show an error message to the user.  */

var elForm, elSelectPackage, elPackageHint, elTerms;        // Declare variables
elForm = document.getElementById('formSignup');     // Store elements
elSelectPackage = document.getElementById('package');   // Store elements
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {                // Declare function
    var package = this.options[this.selectedIndex].value;   // Get selected option
    if (package == 'monthly') {     // If monthly package
        elPackageHint.innerHTML = ' Save $10 if you pay for 1 year!'; // Show this msg

    } else {
        elPackageHint.innerHTML = 'Wise Choice!';   // Show this message
    }

}

function checkTerms(event) {
    if(!elTerms.checked) { // If checkbox ticked
        elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
        event.preventDefault(); // Don't submit form
    } else {
        elTermsHint.innerHTML = ''; 
    }
}

// Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);

