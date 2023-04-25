/** adding and removing object properties. Once you have created an object (using literal or constructor notation), 
 * you can add new properties to it. You do this using the dot notation that you saw for adding properties to objects.
 * If an object is created using a constructor function, this syntax only adds or removes the properties from the one 
 * instance of the object (not all objects created with that function).  */

var hotel = {
    name: 'Nairobi New Park',
    rooms: 120,
    booked: 77,
};
 hotel.gym = true;
 hotel.pool = false;
 delete hotel.booked;

 var elName = document.getElementById('hotelName');
 elName.textContent = hotel.name;

 var elPool = document.getElementById('pool');
 elPool.className = 'Pool: ' + hotel.pool;

 var elGym = document.getElementById('gym');
 elGym.className = 'Gym: ' + hotel.gym;