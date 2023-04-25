/** SELECTING FORM ELEMENTS - jQuery has selectors that are designed specifically to work with forms, however, they are not always the 
quickest way to select elements. If you use one of these selectors on its own, jQuery will examine each element in the document to find a 
match (using code in the jQuery file, which is not as quick as CSS selectors). Therefore, you should narrow down the part of the document
the script needs to look through by placing an element name or other jQuery selector before using the selectors shown on this page.
You can also access elements in a form using the same selectors used to pick any element in jQuery. This will often be the faster option.
It is also worth noting that because jQuery handles inconsistencies in the way browsers treat whitespace, it is easier to traverse between 
form elements using jQuery than it is when you are using plain JavaScript.

SELECTORS FOR FORM ELEMENTS
SELECTOR DESCRIPTION    
:button - <button> and <input> elements whose type attribute has a value of button
:checkbox - <input> elements whose type attribute has a value of checkbox. Note that you get better performance with
            $('[type="checkbox"]')
:checked - Checked elements from checkboxes and radio buttons (see :selected for select boxes)
:disabled - All elements that have been disabled
:enabled - All elements that are enabled
:focus - Element that currently has focus. Note that you get better performance with $(document.activeElement)
:file - All elements that are file inputs
:image - All image inputs. Note that you get better performance using [type="image"]
:input - All <button>, <input>. <select>, and <textarea> elements. Note that you get better performance from selecting elements, then 
                    using •filter (":input")
:password - All password inputs. Note that you get better performance using $('input:password')
:radio - All radio inputs. To select a group of radio buttons, you can use $('input[name="gender"]:radio')
:reset - All inputs that are reset buttons
:selected - All elements that are selected. Note that you get better performance using a CSS selector inside the •filter() method, e.g. 
            .filter(":selected")
:submit - <button> and <input> elements whose type attribute has a value of submit. Note that you will get better performance 
            using [type="submit"]
:text - Selects <input> elements with a type attribute whose value is text, or whose type attribute is not present. You will likely get better 
        performance from ('input:text')

FORM METHODS & EVENTS  - When submitting a form, there is also a helpful method called •serialize() which you will learn later

RETRIEVE THE VALUE OF ELEMENTS

METHOD          DESCRIPTION
. val() - Primarily used with <input>, <select>, and <textarea> elements. It can be used to get the value of the first element in a matched set,
 or update the value of all of them.

OTHER METHODS
METHOD          DESCRIPTION
.filter() - Used to filter a jQuery selection using a second selector (especially form-specific filters) 
.is() -  Often used with filters to check whether a form input is selected/checked
$.isNumeric() - Checks whether the value represents a numeric value and returns a Boolean. It returns true for the following:
        $.isNumeric(l)          $.isNumeric(-3)
        $.isNumeric("2")        $.isNumeric(4.4)
        $.isNumeric(+2)         $.isNumeric(OxFF)

EVENTS
METHOD          DESCRIPTION
. on() - Used to handle all events
EVENT           DESCRIPTION
blur - When an element loses focus
change - When the value of an input changes
focus - When an element gains focus
select - When the option for a <select> element is changed
submit - When a form is submitted 

The .val() - method gets the value of the first <input>, <select>, or <textarea> element in a jQuery selection. It can also be used to set the 
value for all matching elements. The .filter() and .is() methods are commonly used with form elements (described earlier). $.isNumeric() is a 
global method. It is not used on a jQuery selection; rather, the value you want to test is passed as an argument. All of the event methods on 
the left correspond to JavaScript events that you might use to trigger functions. As with other jQuery code, they handle the inconsistencies 
between browsers behind the scenes. jQuery also makes it easier to work with a group of elements (such as radio buttons,checkboxes, and the 
options in a select box), because, once you have selected the elements, you can simply apply individual methods to each of them without having 
to write a loop. 

WORKING WITH FORMS - In this example, a button and form have been added under the list. When the user clicks on the button to add a new item, 
the form will come into view. The form lets users add a new item to the list with a single text input and a submit button. (The new item button
is hidden when the form is in view.) When the user presses the submit button, the new item is added to the bottom of the list. (The form is 
also hidden and the new item button is shown again.) **/

 

/** New jQuery objects are created to hold the new item button, the form to add new items, and the add button. These are cached in variables.**/
$(function () {
        var $newItemButton = $('#newItemButton');
        var $newItemForm = $('#newItemForm');
        var $textInput = $('input:text');
/** When the page loads, the CSS hides the new item button (and shows the form), so jQuery methods show the new item button and hide the form. **/
        $newItemButton.show();
        $newItemForm.hide();
/** If a user clicks on the new item button (the <button> element whose id attribute has a value of showForm), the new item button is hidden 
and the form is shown. ***/
        $('#showForm').on('click', function() {
                $newItemButton.hide();
                $newItemForm.show();
        });

        $newItemForm.on('submit', function(e) { // When the form is submitted, an anonymous function is called. It is passed the event object.                
                e.preventDefault(); // The .preventDefault() method can stop the form being submitted. 
                var newText = ('input:text').val(); /** The :text selector picks the <input> element whose type attribute has a value of text,
                                                        and the •val() method gets the value the user entered into it. This value is stored in a 
                                                        variable called newText. NB: You can use $textInput in place of $('input:text') **/
                $('li:last').after('<li>' + newText + '</li>'); // A new item is added to the end of the list using the .after() method.
                $newItemForm.hide();         // The form is hidden,                                                       
                $newItemButton.show();       //the new item button is shown again,   
                $textInput.val('');          // and the content of the text input is emptied (so the user can add a new entry if they want to).
        });
});

