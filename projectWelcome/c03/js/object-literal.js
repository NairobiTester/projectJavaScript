/* Creating objects using literal notation. To create an empty object using literal notation use: var hotel = {}
The curly brackets create an empty object */

var hotel = {
    name: "Dreams Hotel",
    rooms: 65,
    booked: 28,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
