/****ACCORDION - When you click on the title of an accordion, its corresponding panel expands to reveal the content. 
 When the page loads, CSS rules are used to hide the panels. Clicking a label prompts the hidden panel that follows it to animate and reveal 
 its full height. This is done using jQuery. Clicking on the label again would hide the panel. 

 ANIMATING CONTENT WITH SHOW, HIDE, AND TOGGLE   - jQuery's .show(), .hide(), and •toggle() methods animate the showing and hiding of elements.
jQuery calculates the size of the box, including its content, and any margins and padding. This helps if you do not know what content appears 
in a box. (To use CSS animation, you would need to calculate the box's height, margin and padding.)

•toggle() saves you writing conditional code to tell whether the box is already being shown or not. (If a box is shown, it hides it, and 
if hidden, it will show it.)

The three methods are all shorthand for the animate() method. For example, the show() method is shorthand for:
$('.accordion-panel')
    .animate( {
        height: 'show',
        paddingTop: 'show',
        paddingBottom: 'show',
        marginTop: 'show',
        marginBottom: 'show'
}) ; 

In the following code example,
1. A jQuery collection is created to hold elements whose class attribute has a value of accordion.
In the HTML you can see that this corresponds to the unordered list element (there could be several lists on the page, each acting as an 
accordion). An event listener waits for the user to click on one of the buttons whose class attribute has a value of accordion-control. 
This triggers an anonymous function.
2. The preventDefault() method prevents browsers treating the button like a submit button. It can be a good idea to use the preventDefault() 
method early in a function so that anyone looking at your code knows that the form element or link does not do what they might expect it to.
3. Another jQuery selection is made using the this keyword, which refers to the element the user clicked upon. Three jQuery methods are applied
to that jQuery selection holding the element the user clicked on.
4 •next ('•accordion-panel') selects the next element with a class of accordion-panel.
5 .not (':animated') checks that it is not in the middle of being animated. (If the user repeatedly clicks the same label, this stops 
the .slideToggle() method from queuing multiple animations.)
6 •slideToggle() will show the panel if it is currently hidden and will hide the panel if it is currently visible. 
 */

$('.accordion').on('click', '.accordion-control', function(e) {
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
});
