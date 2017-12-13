const initialize = function() {

  const center = {
    lat: 55.9470,
    lng: -3.2020
  }

  const container = document.querySelector('#main-map');
  const mainMap = new MapWrapper(container, center, 18); //center, zoom

  mainMap.addClickEvent();
  mainMap.addMarker(center);


  const button = document.querySelector('#bounce');
  button.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  const button2 = document.querySelector('#delete');
  button2.addEventListener('click', mainMap.deleteMarkers.bind(mainMap));

document.addEventListener('DOMContentLoaded', initialize);
