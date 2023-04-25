/***STYLING A GOOGLE MAP - To style the map you need to specify three things:
        • feature Types: the map feature you want to style: e.g., roads, parks, waterways, public transport.
        • elementTypes: the part of that feature you want to style, such as its geometry (shapes) or labels. 
        • stylers: properties that allow you to adjust the color or visibility of items on the map. 
The styles property in the mapOptions object sets the map style. It's value is an array of objects. Each object affects a different feature 
of the map.  The first stylers property alters the colors of the map as a whole. It, too, contains an array of objects.
    • hue property adjusts color, its value is a hex code
    • lightness or saturation can take a value from - 100 to 100  
Then each feature that shows up on the map can have its own object, and its own stylers property. In it, the visibility property can have 
three values:
      • on to show the feature type
      • off to hide it
      • simplified to show a more basic version  */

//var venueMap;
function init() {

  var pinLocation = new google.maps.LatLng(40.782710,-73.965310);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
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
    overviewMapControl: false,

      styles: [                               // styles property in an array of objects
    {
        stylers: [                      // stylers property holds array of objects
            { hue: "#00ff6f"},           // overall map colors
            { saturation: -50}           // Overall map saturation
        ]
    }, {
        featureType: "road",            // Road features
        elementType: "geometry",        // Their geometry (lines)
        stylers: [
            { lightness: 100},           // Lightness of roads
            { visibility: "simplified"}  // Level of road detail
        ]
    }, {
        featureType: "transit",         // Public transport features
        elementType: "geometry",        // Their geometry (lines)
        stylers: [
            { hue: "#ff6600" },         // Color of public transport
            { saturation: +80 }         // Saturation of public transport
        ]
    }, {
        featureType: "transit",         // Public transport features
        elementType: "labels",          // Their labels
        stylers: [
            { hue: "#ff0066" },         // Label color
            { saturation: +80 }         // Label saturation
        ]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  }

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  var startPosition = new google.maps.Marker({
    position: pinLocation,
    map: venueMap,
    icon: "img/go.png"
  });

}
function  loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}
window.onload = loadScript;

/***  Here you can see how to add a marker to a map. The map has been created, and its name is venueMap.
1. Create a LatLng object to store the position of the marker using object constructor syntax. Below that object is called pinLocation.
2. The Marker() constructor creates a marker object. It has one parameter: an object that contains settings using object literal notation.

The settings object contains three properties:
3. position is the object storing the location of the marker (pinLocation).
4. map is the map that the marker should be added to (because a page can have more than one map).
5. icon is the path to the image that should be displayed as the marker on the map (this should be provided relative to the HTML page). 
***/