
// map styles
var mapStyles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];

var svg = "<svg width=\"64\" height=\"64\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#000000\" fill-opacity=\"0.15\"/>\n                  <circle cx=\"16\" cy=\"16\" r=\"15\" fill=\"#000000\" fill-opacity=\"0.15\"/>\n                  <circle cx=\"16\" cy=\"16\" r=\"3\" fill=\"#ffffff\"/>\n </svg>\n";

var markerIcon = {
  url: "data:image/svg+xml;charset=UTF-8;base64,".concat(btoa(svg)),
  fillColor: '#002349',
  fillOpacity: 0.6,
  anchor: new google.maps.Point(32, 32),
  strokeWeight: 0,
  scale: 1
};

// -------------------------
let ashbourne = document.querySelector("#".concat("ashbourne-circle-san-ramon-ca", " .map-container"));

if (ashbourne) {
  var mapContainer = ashbourne;
}
// -----------------------------

//  init map definition
var initializeMap = function initializeMap(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  var url = "https://www.google.com/maps/search/?api=1&query=".concat(lat, ",").concat(lng);
  var map = new google.maps.Map(mapContainer, {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 14,
    styles: _ref.mapStyles
  });
  var marker = new google.maps.Marker({
    position: {
      lat: lat,
      lng: lng
    },
    map: map,
    icon: markerIcon
  });
  marker.addListener("click", function () {
    window.open(url, '_blank');
  });
};

if(mapContainer){
  // get lat, lng from div
  var lat = mapContainer.getAttribute('data-lat');
  var lng = mapContainer.getAttribute('data-lng');
  // call func
  initializeMap({
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    mapStyles: mapStyles
  });
}