/* Creating and accessing objects using constructor notation. The example below shows how to create multiple objects
on the same page: two hotels are created and their rooms availability displayed*/

function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

var aquaticHotel = new Hotel('Aquatic', 70, 32);
var newParkHotel = new Hotel('New Park', 59, 27);

var details1 = aquaticHotel.name + ', rooms: ';
    details1 += aquaticHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = newParkHotel.name + ', rooms: ';
    details2 += newParkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;