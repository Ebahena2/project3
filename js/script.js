function init(){
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(48.858241991407624, 2.2944583877067566);
  var mapOptions = {
    center: myLocation, 
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    icon: 'media/eiffeltower.jpg'
  });
  
  
  
}
google.maps.event.addDomListener(window, 'load', init);