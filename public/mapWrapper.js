const MapWrapper = function(container, coordinates, zoom) {

  this.googleMap = new google.maps.Map(container, {
    //config settings
    center: coordinates,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap,
     'click',
      function(event){
        const position = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        this.addMarker(position); //this is googlemaps object because they invoked this function
  }.bind(this)); //so you need to bind it
}

MapWrapper.prototype.addMarker = function (coordinates) {
  const marker = new google.maps.Marker({
    position: coordinates,
    map: this.googleMap
  });
  this.markers.push(marker);
}

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function (marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
}

MapWrapper.prototype.deleteMarkers = function() {
  this.markers.forEach(function (marker){
    marker.setMap(null);
  })
  this.markers = [];
}

//marker.setMap(null);

// const MapWrapper = function() {
//   const container = document.querySelector('#main-map');
//
//   this.googleMap = new google.maps.Map(container, {
//     //config settings
//     center: {
//       lat: 55.9470,
//       lng: -3.2020
//     },
//     zoom: 20
//   });
// }
