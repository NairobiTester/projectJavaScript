/**** SELECT BOXES - The <select> element is more complex than the other form controls. Its DOM node has a number of extra properties and 
methods. Its <option> elements contain the values a user can select. This example features two select boxes. When the user selects an option 
from the first select box, the contents of the second select box are updated with corresponding options. In the first select box, users can 
choose to rent a camera or a projector. When they make their choice, a list of options are shown in the second select box. 

When the user selects an option from the dropdown list, the change event fires. This event is often used to trigger scripts when the user 
changes the value of a select box. The <select> element also has some extra properties and methods that are specific to it;
these are shown in the tables below. If you want to work with the individual options the user can select from, a collection of <option>
elements is available.

PROPERTY                DESCRIPTION
options                 A collection of all the <option> elements
selected Index          Index number of the option that is currently option
length                  Number of options
multiple                Allows users to select multiple options from the select box (Rarely used because the user-experience is not very good)
selectedOptions         A collection of all the selected <option> elements

METHOD                  DESCRIPTION
add(option, before)     Adds an item to the list: The first parameter is the new option; the second is the element it should go before
                        If no value is given, the item will be added to the end of the options.
remove(index)           Removes an item from the list: Has only one parameter - the index number of the option to be removed 


1. Place the script in an llFE.
2. Variables hold the two select boxes.
3. Two objects are created; each one holds options used to populate the second select box (one has types of cameras, the other has types of 
    projectors).
4. When the user changes the first select box, an event listener triggers an anonymous function.
5. The anonymous function checks if the first select box has a value of choose.
6. If so, the second select box is updated with just one option, which tells the user to select a type.
7. No further processing is needed, and the return keyword exits the anonymous function (until the user changes the first select box again).
8. If a type of equipment has been selected, the anonymous function continues to run, and a models variable is created. It will store one of the objects
defined in step 3 (cameras or projectors). This correct object is retrieved using the getModels() function declared at the end of the 
script (9+10). The function takes one parameter this.value, which corresponds to the value from the option that was selected in first select box.
9. Inside the getModels() function, an if statement checks if the value passed in was cameras; if so, it returns the cameras object.
10. If not, it continues to run, checking to see if the value was projectors, and if so, it returns the projectors object.
11. A variable called options is created. It will hold all the <option> elements for the second select box. When this variable is created the 
first <option> is added to it; it tells users to choose a model.
12. A for loop goes through the contents of the object that was placed in the models variable in step (8-10). Inside the loop, key refers to 
the individual items in the object.
13. Another <option> element is created for every item in the object. Its value attribute uses the property name from the object. The content 
that sits between the <option> tags is that property's value.
14. The options are then added to the second select box using the innerHTML property. 
***/

(function () {
    var type = document.getElementById('equipmentType');  // Type select box
    var model = document.getElementById('model');      // Model select box

    var cameras = {                                    // Object stores cameras
        bolex: 'Bolex Paillard H8',
        yashica: 'Yashica 30',
        pathescape: 'Pathescape Super-8 Relax',
        canon: 'Canon 512'
    };
    var projectors = {                                  // Store projectors
        kodak: 'Kodak Instamatic M55',
        bolex: 'Bolex Sound 715',
        eumig: 'Eumig Mark S',
        sankyo: 'Sankyo Dualux'
    };

    // WHEN THE USER CHANGES THE TYPE SELECT BOX
    addEvent(type, 'change', function() {
        if (this.value === 'choose') {                  // No selection made
            model.innerHTML = '<option>Please choose a type first</option>';
            return;                                     // No need to proceed further
        }
        var models = getModels(this.value);             // Select the right object

        // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
        var options = '<option>Please choose a model</option>';
        for (var key in models) {                       // Loop through models
            options += '<option value="' + key + '">' + models[key] + '</option>';
        }   // If an option could contain a quote, key should be escaped
        model.innerHTML = options;                      // Update select box
    });

    function getModels(equipmentType) {
        if (equipmentType === 'cameras') {              // If type is cameras
            return cameras;                             // Return cameras object
        } else if (equipmentType === 'projectors') {    // If type is projectors
            return projectors;                          // Return projectors object
        }
    }
}());