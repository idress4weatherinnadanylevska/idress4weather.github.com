$(function api() {

  
  
// https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/49.5638034,34.4923746.json

  var coordinates = '';
  var url;
  var temperature_c = '';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
      
   $.ajax({
      // send request to the weather server
      //$.ajax( {
     
        url: url,
        success: function(data) {
          temperature_c = data.current_observation.temp_c; 
          //$("#temp_c").html(temperature_c);

         });//succ

          

        cache: false
      });//ajax       
      
    });

    

  }//if
  return temperature_c;
});





var userFeed = new Instafeed({
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
//async: false,
beforeSend: api,

tags: api,

    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
    filter: function(image) {
      //var c = temperature_c = data.current_observation.image.tags.indexOf;
      //if(c == '25'){ 
     //return image.tags.indexOf('25') >= 0;} 
     //else if(c == '24'){ 
     //return image.tags.indexOf('24') >= 0;}
     //else if(c == '23'){ 
     //return image.tags.indexOf('23') >= 0;}     
     if (image.tags.indexOf(api) >= 0 && foundImages < maxImages) {
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
         //alert(temperature_c);
  } 

  10000);
  //alert(my_superglobal);    
});//user
