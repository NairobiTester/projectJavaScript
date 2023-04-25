/*** MORE CONSOLE METHODS - To differentiate between the types of messages you write to the console, you can use three different methods. They
use various colors and icons to distinguish them. 
    1. console.info() can be used for general information
    2. console.warn() can be used for warnings
    3. console.error() can be used to hold errors  
    ****/
   console.info('And we\'re off...');               // Info: script running

   var $form, width, height, area;
   $form = $('#calculator');

   $('form input[type="text"]').on('blur', function() {  // On blur
    console.warn('You entered ', this.value);            // Warn: what was entered
   });

   $('#calculator').on('submit', function(e) {
    e.preventDefault();

    width = $('#width').val();
    height = $('#height').val();

    area = width * height;
    console.error(area);                                // Error: show area

    $form.append('<p class="result">' + area + '<p>');
   });