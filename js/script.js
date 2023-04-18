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
    animation: google.maps.Animation.DROP,
    icon: 'media/eiffeltower.jpg'
  });
  marker.addListener('click', toggleBounce);
  
  var contentString= '<h1>Eiffel Tower</h1><p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.</p>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300,
    
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(myMap, marker);
  });
  
 function toggleBounce(){
   if(marker.getAnimation() !==null){
     marker.setAnimation(null);
   }else {
     marker.setAnimation(google.maps.Animation.BOUNCE);
   }
 }
  
  
}
google.maps.event.addDomListener(window, 'load', init);