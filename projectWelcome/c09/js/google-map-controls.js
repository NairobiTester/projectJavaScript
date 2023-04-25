/*** CHANGING CONTROLS - To show or hide the controls, use the control name followed by a value of true (to show it) or false (to hide it).
Although Google Maps tries to prevent overlaps, use judgement to position controls on your map.

CONTROL                 DESCRIPTION                                                                                             DEFAULT
zoomControl (1)         Sets the zoom level of the map. It uses a slider (for large maps), "+/-" buttons (for small maps)       On
panControl (2)          Allows panning across the map                                                                           On for non-touch devices
scaleControl (3)        Shows the scale of the map                                                                              Off
mapTypeControl (4)      Switch map types (e.g., ROADMAP and SATELLITE)                                                          On
streetViewControl(5)    A Pegman icon that can be dragged and dropped onto the map to show a street view                        On                                                     On
rotateControl           Rotates maps that have oblique imagery (not shown)                                                      On when available
overviewMapControl      A thumbnail showing a larger area, that reflects where the current map is within that wider             On when map is collapsed, e.g., street view
                        area (not shown) 

GOOGLE MAP WITH CUSTOM CONTROLS

APPEARANCE OF CONTROLS POSITION OF THE CONTROL - To alter the appearance and position of map controls, you add to the mapOptions object.
1. To show or hide a control, the key is the name of the control, and the value is a Boolean (true will show the control; false will hide it).
2. POSITION OF THE CONTROL
2. Each control has its own options object used to control its style and position. The word Options follows the control name, e.g., 
zoomControlOptions. Styles are discussed below.  
STYLE OF MAP CONTROLS
3. You can change the appearance of the zoom and map type controls using the following options:

zoomControlStyle:                                       MapTypeControlStyle:
SMALL   Small +/- buttons                               HORIZONTAL_BAR  Buttons side-by-side
LARGE   Vertical slider                                 DROPDOWN_MENU   Dropdown select box
DEFAULT The default for that device                     DEFAULT         The default for that device

**/
function init() {
    // the mapOptions object contains the information to initialise the map to how we want it
var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.782710, -73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scaleControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false
};

var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;