// Creating objects using constructor syntax

var hotel = new Object();

hotel.name = 'New Park';
hotel.rooms = 130;
hotel.booked = 89;

hotel.checkAvailability = function (){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();