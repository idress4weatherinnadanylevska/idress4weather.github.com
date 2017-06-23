$(function() {
// https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/49.5638034,34.4923746.json

  var coordinates = '';
  var url;
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
function ajaxRequest() {
var temperature_c = false;
   $.ajax({
      // send request to the weather server
      //$.ajax( {
     
        url: url,
        async: false,
        success: function(data) {
         temperature_c = data.current_observation.temp_c;
          
               },
        cache: false
      });       
      
  return temperature_c; 

  }//
  alert(temperature_c);    
var something = ajaxRequest();
//
var userFeed = new Instafeed({
  something,
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
     //tags: something,
    //data: {access_token: tok, count: kolichestvo},//+++++++++++
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
    filter: function(image) {
        if(something == '21'){
          // return image.tags.indexOf('25') >= 0;
       
          if (image.tags.indexOf('21') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
          }
    
               return false;
       }//if    
  }    

});
userFeed.run(); 


    });
  } 
  

}); 
 
       





