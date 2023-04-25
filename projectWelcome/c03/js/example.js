/*Example: functions, methods, objects: This example is split into two parts. The first shows you the details about 
the hotel, room rate, and offer rate. The second part indicates when the offer expires. All of the code is placed 
inside an immediately invoked function expression (llFE) to ensure any variable names used in the script do not
clash with variable names used in other scripts. The first part of the script creates a hotel object; it has
 three properties (the hotel name, room rate, and percentage discount being offered), plus a method to calculate the
 offer price which is shown to the user. The details of the discount are written into the page using information
from this hotel object. To ensure that the discounted rate is shown with two decimal places (like most prices are shown) 
the .to Fixed () method of the Number object is used. The second part of the script shows that the offer will expire in 
seven days. It does this using a function called offerExpires(). The date currently set on the user's computer is 
passed as an argument to the offerExpires() function so that it can calculate when the offer ends. Inside the function, 
a new Date object is created; and seven days is added to today's date. The Date object represents the days and months
as numbers (starting at 0) so - to show the name of the day and month - two arrays are created storing all possible 
day and month names. When the message is written, it retrieves the appropriate day/month from those arrays. The message 
to show the expiry date is built up inside a variable called expiryMsg.The code that calls the offerExpires () function 
and displays the message is at the end of the script. It selects the element where the message should appear and updates
its content using the innerHTML property*/

/* The script is placed inside an immediately invoked function expression which helps protect the scope of variables */
(function() {
    //PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
    
    //Create a hotel object using object literal syntax
    var hotel = {
        name: "Nairobi New Park",
        roomRate: 500, // Amount in dollars
        discount: 20, // Percentage discount
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }

    }

    //Write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate;           // Declare variables

    hotelName = document.getElementById('hotelName');  // Get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;     // Write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Write room rate
    specialRate.textContent = '$' + hotel.offerPrice();    // Write offer price

    //PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg; // Message displayed to users
    var today;     //Today's date
    var elEnds;    //The element that shows the message about the offer ending

    function offerExpires(today) {
        //Declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hold the names of days/months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
        'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'];
        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();                 //Put today's date in variable
    elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);

// Finish the immediately invoked function expression
}());