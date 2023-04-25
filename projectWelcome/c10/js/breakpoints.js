/**** DEBUGGER KEYWORD - You can create a breakpoint in your code using just the debugger keyword. When the developer tools are open, this
will automatically create a breakpoint. You can also place the debugger keyword within a conditional statement so that it only triggers
the breakpoint if the condition is met. This is demonstrated in the code below. It is particularly important to remember to remove these
statements before your code goes live as this could stop the page running if a user has developer tools open. ***/

/** var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = (width * height);

    if (area < 100) {
        debbugger;                          // A breakpoint is set if the developer tools are open
    }
    console.log(area + ' This area is over 100');  

    $form.append('<p>' + area + '</p>');
}); ****/


var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    console.log ('if less 100, pause');
    debugger;             // A breakpoint is set if the developer tools are open
  }

  console.log ('Area:' + area);  

  $form.append('<p>' + area + '</p>');
});