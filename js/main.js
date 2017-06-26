
$(function () {
  
// https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/49.5638034,34.4923746.json

  var coordinates = '';
  var url;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
      
      // send request to the weather server
      $.ajax( {
        url: url,
        success: function(data) {

          var temperature_c = data.current_observation.temp_c + " <a id='temp_unit_c'>C</a>"
          $("#temp_c").html(temperature_c);

          $("#temp_unit_c").on('click', function(){
            $("#temp_c").toggle();
            $("#temp_f").toggle();
          });

          var temperature_f = data.current_observation.temp_f + " <a id='temp_unit_f'>F</a>"
          $("#temp_f").html(temperature_f);
//on naznachenie 1 i bolshe callback dlya odnogo i togoge sobytia sobytiy
          $("#temp_unit_f").on('click', function(){
            $("#temp_c").toggle();
            $("#temp_f").toggle();
          });          

          $("#city").html(data.current_observation.observation_location.city);          

          var iconSrc = "images/icons/black/" + data.current_observation.icon +".svg" ;
          $( "#icon" ).attr( "src", iconSrc );

          $("#weather").html(data.current_observation.weather); 

  var c = data.current_observation.temp_c;   
        var userFeed = new Instafeed({
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
//tags: c,            
            
    //data: {access_token: tok, count: kolichestvo},//+++++++++++
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
          //window.setTimeout(function() {
    filter: function(image) {
  if (c == '25') {
    if (image.tags.indexOf('25') >= 0 && foundImages < maxImages) foundImages = foundImages + 1;


return true;
    else

return false;
  }
  else if (c == '30'){
    if (image.tags.indexOf('30') >= 0 && foundImages < maxImages) foundImages = foundImages + 1;


return true;
    else

return false;


  }
      
//       if(c == '30'){
//          if (image.tags.indexOf('30') >= 0 && foundImages < maxImages) {//++++
//             foundImages = foundImages + 1;
//             return true;
//          }
// //     else if(image.tags.indexOf(tags) >= 0 && foundImages < maxImages) {
// //             foundImages = foundImages + 1;
// //             return true;
// //         }
// //     else if(image.tags.indexOf('25') >= 0 && foundImages < maxImages) {
// //             foundImages = foundImages + 1;
// //             return true;
// //         }    
//         return false;
//       }
  }  //filter
                                  //   }, 10000);

}); 
userFeed.run();           
          
        },
        cache: false
      });       
      
    });
  }    

});

