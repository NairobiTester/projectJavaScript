/* Working with dates and times. In this example, you can see a date being set in the past. If you try to find the
 difference between two dates, you will end up with a result in milliseconds. To get the difference in
days/weeks/years, you divide this number by the number of milliseconds in a day/week/year. Here the number is divided by
31,556,900,000 - the number of milliseconds in a year (that is not a leap year).  */

// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Get the year this year
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date('Dec 29, 1989 15:45:55');
// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000);

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('message');
// Write the message into that element
elMsg.textContent = Math.floor(difference) + ' years of travel business';

