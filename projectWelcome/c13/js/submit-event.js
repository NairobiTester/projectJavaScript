/*** THE FORM ELEMENT - DOM nodes for form controls have different properties, methods, and events than some of the other elements you have 
met so far. Here are some you should note for the <form> element.

PROPERTY            DESCRIPTION
action              The URL the form is submitted to
method              If it is to be sent via GET or POST
name                Rarely used, more common to select a form by the value of its id attribute
elements            A collection of the elements in the form that users can interact with. They can be accessed via index numbers or
                    the values of their name attributes.
                    
METHOD              DESCRIPTION
submit()            This has the same effect as clicking the submit button on a form
reset()             Resets the form to the initial values it had when the page loaded

EVENT               DESCRIPTION
submit              Fires when the form is submitted
reset               Fires when the form is reset

The DOM methods, such as getElementByld(), getElementsByTagName(), and querySelector(), are the most popular techniques for accessing both 
the <form> element and the form controls within any form. However, the document object also has something called the forms collection. The 
forms collection holds a reference to each of the <form> elements that appear on a page. Each item in a collection is given an index number
(a number starting at 0, like an array). This would access the second form using its index number: 
    
    document.forms[1];

You can also access a form using the value of its name attribute. The following would select a form whose name attribute has a value of login:

    document.forms.login 

Each <form> element in the page also has an elements collection. It holds all of the form controls within that form. Each item in the elements
collection can also be accessed by index number or by the value of its name attribute. The following would access the second form on the page 
and then select the first form control within it:
    
    document.forms[1].elements[O];

The following would access the second form on the page, then select the element whose name attribute had a value of password from that form:
    
    document.forms[1].elements.password;

Note: index numbers in a collection of elements can change if the markup of a page is altered. So, use of index numbers ties a script to the 
HTML markup (-it does not achieve a separation of concerns). 

FORM CONTROLS - Each type of form control uses a different combination of the properties, methods, and events shown below. Note that the methods can be used to
simulate how a user would interact with the form controls. 

PROPERTY                DESCRIPTION
value                   In a text input, it is the text the user entered; otherwise, it is the value of the value attribute
type                    When a form control has been created using the <input> element, this defines the type of the
                        form element (e.g., text, password, radio, checkbox)
name                    Gets or sets the value of the name attribute
defaultValue            The initial value of a text box or text area when the page is rendered
form                    The form that the control belongs to
disabled                Disables the <form> element
checked                 Indicates which checkbox or radio buttons have been checked. This property is a Boolean; in JavaScript it will have a
                        value of true if checked
defaultChecked          Whether the checkbox or radio button was checked or not when the page loaded (Boolean)
selected                Indicates that an item from a select box has been selected (Boolean - true if selected)

SUBMITTING FORMS - In this example, a basic login form lets users enter a username and password. When the user submits the form, a welcome 
message will replace the form. 

1. Place the script in an Immediately Invoked Function Expression (llFE).
2. A variable called form is created and it is set to hold the <form> element. It is used in the event listener in the next line of code.
3. An event listener triggers an anonymous function when the form is submitted. Note how this is set using the addEvent() function that was 
created in the utilities.js file.
4. To prevent the form being sent (and to allow this example to show a message to the user) the preventDefault() method is used on the form.
5. The collection of elements in this form is stored in a variable called elements.
6. To get the username, first select the username input from the elements collection using the value of its name attribute. Then, to get the 
text the user entered, the value property of that element is used.
7. A welcome message is created and stored in a variable called msg; this message will incorporate the username that the visitor entered.
8. The message replaces the form within the HTML.

The event listener waits for the submit event on the form (rather than a click on the submit button) because the form can be submitted in 
other ways than clicking on the submit button. For example, the user might press the Enter key.

(function(){
    var form = document.getElementById('login');        // Get form element

    addEvent(form, 'submit', function(e) {              // When user submits form
        e.preventDefault();                             // Stop it being sent
        var elements = this.elements;                   // Get all form elemnts
        var username = elements.username.value;         // Select username entered
        var msg = 'Welcome ' + username;                 // Create welcome message
        document.getElementById('main').textContent = msg;  // write welcome message
    });
}()); ****/

/** When selecting a DOM node, if you are likely to use it again, it should be cached. Below, you can see a variation of the above code,
 where the username and the main element have both been stored in variables outside of the event listener. If the user had to resubmit the 
 form, the browser would not have to make the same selections again.***/
 
     var form = document.getElementById('login');
     var elements = form.elements;
     var elUsername = elements.username;
     var elMain = document.getElementById('main');

    addEvent(form, 'submit', function(e) {
        e.preventDefault();      
        var msg = 'Welcome ' + elUsername.value;
        elMain.textContent = msg;
    });



 
 



