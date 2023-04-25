/*** PLATFORM APIS - Many large websites expose their APls that allow you to access and update the data on their sites, including Facebook, 
        Google, and Twitter. 
    GOOGLE MAPS API - allows you to add maps to web pages. It also allows you to customize the look of the maps and what information is shown on 
        them. Google Maps API documentation (https://developers.google.com/maps/) will show you other things that you can do with the API.
    API KEY - Some APls require that you register and request an API key in order to get data from their servers. An API key is a set of 
        letters and numbers that uniquely identify you to the application so the owners of the site can track how much you use the API and what you
        use it for.  For Google API key, see https://cloud.google.com/console 
    BASIC MAP SETTINGS - Once you have included the Google Maps script in your page, you can use their maps object. It lets you display
         Google maps in your pages. 
    CREATING A MAP - The maps object is stored within an object called google. This creates scope for all Google objects. To add a map to your 
        page, you create a new map object using a constructor: Map(). The constructor is part of the maps object, and it has two parameters:
        • The element into which you want the map drawn
        • A set of map options that control how it is displayed given using object literal notation 
    MAP OPTIONS - The settings that control how the map should look are stored inside another JavaScript object called mapOptions. It is 
        created as an object literal before you call the Map() constructor. In the JavaScript on the right, you can see that the mapOptions 
        object uses three pieces of data:
            • Longitude and latitude of the center of the map
            • The zoom level for the map
            • The type of map data you want to show
    Zoom level is typically set using a number between 0 (the full earth) and 16. (Some cities can go higher.) 
        Map Types - Roadmap, satellite, hybrid, terrain
A BASIC GOOGLE MAP ***/

// init() loads the map into the HTML page. First it creates a mapOptions object with three properties. 
function init() {
    var mapOptions = {                                 // Set up the map options
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    /***Here, the function uses the Map() constructor to create a map and draw the map into the page. The constructor takes two parameters:
        • The element that the map will appear inside • The mapOptions object  ***/
    var venueMap;                                       // Map() draws a map
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
//loadScript() creates a <script> element to load the Google Maps API. When it has loaded, it calls init(), to initialize the map.
function loadScript() {
    var script = document.createElement('script');      // Create script element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);                  // Add element to page

}
window.onload = loadScript;                             // Onload calls loadScript() function.