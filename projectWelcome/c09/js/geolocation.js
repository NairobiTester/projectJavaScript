/*** THE GEOLOCATION API  - There are three objects involved in adding geolocation to your web page.
The tables demonstrate how API documentation typically describes the objects, properties, and the methods you can use.

Geolocation OBJECT - The geolocation object is used to request location data. It is a child of the navigator object.

METHOD                               RETURNS
getCurrentPosition(success , fail) - Requests the position of the user and, if the user permits, returns the
user's latitude/longitude plus other location information.
success - is the name of a function to call if coordinates are retrieved
fail - is the name of a function to call if coordinates are not returned

Position OBJECT - If a user's location is found, a Position object is sent to the callback function. It has a child object called coords
whose properties hold the user's location. If a device supports geolocation, it must provide a minimum amount of data (see the 
required column); other properties are optional (they may depend on the device's capabilities). 

 
PROPERTY                           `RETURNS                                            REQUIRED
Position.coords.latitude            Latitude in decimal degrees                        Yes
Position.coords.longitude           Longitude in decimal degrees                       Yes
Position.coords.accuracy            Accuracy of latitude and longitude in meters       Yes
Position.coords.altitude            Meters above sea level                             Yes (value can be null)
Position.coords.altitudeAccuracy    Accuracy of altitude in meters                     Yes (value can be null)
Position.coords.heading             Degrees clockwise from north                       No (up to device)
Position.coords.speed               Speed traveling in meters per second               No Cup to device)
Position.coords.timestamp           Time since created (formatted as Date object)      No (up to device) 

PositionError OBJECT
If location is not determined, the callback function is passed the Position Error object. 

PROPERTY                    RETURNS                                             REQUIRED
PositionError.code          An error number with the following values:          Yes
                            1 Permission denied 2 Unavailable 3 Timeout
PositionError.message       A message (not intended for the end user)           Yes 


 WORKING WITH LOCATION
    1. In this example, the Modenizr checks if geolocation is supported by the browser and enabled by the user.
    2. When getCurrentPosition() is called, the user will be asked for permission to share their location.
    3. If the location is gained, the user's latitude and longitude are written into the page.
    4. If it is not supported, then the user will see a message that shows their location could not be found.  
    5. If the location is not gained (for any reason), again the message will say that a location cannot be found.
    The error code is logged to the browser console. 
***/

var elMap = document.getElementById('loc');          // HTML element
var msg = 'Sorry, we are unable to get your location.'; // No location message

if(Modernizr.geolocation) {                         // Is geo supported
    navigator.geolocation.getCurrentPosition(success, fail); // Ask for location
    elMap.textContent = 'Checking location...';     // Say checking....
} else {                                            // Not supported
    elMap.textContent = msg;                        // Add manual entry
}

function success(position) {                        // Got location
    msg = '<h3>Latitude:<br>';                      // Create message
    msg += position.coords.latitude + '</h3>';      // Add latitude
    msg += '<h3>Longitude:<br>';                    // Create message
    msg += position.coords.longitude + '</h3>';     // Add longitude
    elMap.innerHTML = msg;                          // Show location
}

function fail(msg) {                                // Not got location
    elMap.textContent = msg;                        // Show text input
    console.log(msg.code)                           // Log the error
}