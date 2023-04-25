/* Creating a date object. In the following example, you can see that getFull Year() is used to
return the year of the date being stored in the Date object. In this case, it is being used to write the 
current year in a copyright statement. Other Date methods have also been used */

var  today = new Date();
//getFullYear(), returns the year, (4 digits)
var year = today.getFullYear();
//getMonth() returns the month, (0-11)
var month = today.getMonth();
//getDate() returns the date, i.e, the day of the month, (1-31)
var numDate = today.getDate();
//getDay() returns the day of the week, (0-6)
var dayWeek = today.getDay();
//getHours() Returns the current time in hours, (0-23)
var numTime = today.getHours();
//getMinutes() returns the current minutes, (0-59)
var numMinutes = today.getMinutes();
/* getTime() gets the number of milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time)
and a negative number for any time before */
var gTime = today.getTime();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + ', Month: ' + month + ', Date: ' + numDate + ', Day of the Week: ' + dayWeek + ', Time in Hrs: ' + numTime + ', Minutes: ' + numMinutes + ', Time in Milliseconds: ' + gTime + '</p>';