$(function () {

  
  
// https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/49.5638034,34.4923746.json

  var coordinates = '';
  var url;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
  
  $.ajax({
      // send request to the weather server
      //$.ajax( {
     
        url: url,
        success: function api(data) {
          var temperature_c = data.current_observation.temp_c + " <a id='temp_unit_c'>C</a>"
          $("#temp_c").html(temperature_c);

 return new Tags(temperature_c);
  

         

                

          $("#city").html(data.current_observation.observation_location.city);          

          var iconSrc = "images/icons/black/" + data.current_observation.icon +".svg" ;
          $( "#icon" ).attr( "src", iconSrc );

          $("#weather").html(data.current_observation.weather); 







        },


        cache: false
      });       
      

      var userFeed = new Instafeed({
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
//async: false,
tags: new Tags(temperature_c),
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
    filter: function(image) {
     //return image.tags.indexOf('25') >= 0;    
     if (image.tags.indexOf(temperature_c) >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }
    else if(image.tags.indexOf('23') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }
    else if(image.tags.indexOf('25') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }    
        return false;
  }    
});
userFeed.run();
    });

  
  

  }
});



