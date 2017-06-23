$(function() {

  var coordinates = '';
  var url;
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates+=position.coords.latitude + ',' + position.coords.longitude;
      
      url = 'https://api.wunderground.com/api/7f0451b8da14a202/conditions/forecast/q/' + coordinates + '.json'     
function ajaxRequest() {
var temperature_c = false;
   $.ajax({
          
        url: url,
        async: false,
        success: function(data) {
         temperature_c = data.current_observation.temp_c + " <a id='temp_unit_c'>C</a>"
          $("#temp_c").html(temperature_c);

          $("#temp_unit_c").on('click', function(){
            $("#temp_c").toggle();
            $("#temp_f").toggle();
          });
          
        },
        cache: false
        }); 
        return temperature_c;
        }//ajaxRequest()
var something = ajaxRequest();

var userFeed = new Instafeed({ 
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
     tags: something,
     cache: false
    //data: {access_token: tok, count: kolichestvo},//+++++++++++
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
    filter: function(image) {
        
            if (image.tags.indexOf('tags') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
            }
    
            return false;
       }               
  }    

});
    userFeed.run(); 


    });
  } 
  

});
//           var temperature_c = data.current_observation.temp_c + " <a id='temp_unit_c'>C</a>"
//           $("#temp_c").html(temperature_c);

//           $("#temp_unit_c").on('click', function(){
//             $("#temp_c").toggle();
//             $("#temp_f").toggle();
//           });

//           var temperature_f = data.current_observation.temp_f + " <a id='temp_unit_f'>F</a>"
//           $("#temp_f").html(temperature_f);
// //on naznachenie 1 i bolshe callback dlya odnogo i togoge sobytia sobytiy
//           $("#temp_unit_f").on('click', function(){
//             $("#temp_c").toggle();
//             $("#temp_f").toggle();
//           });          

//           $("#city").html(data.current_observation.observation_location.city);          

//           var iconSrc = "images/icons/black/" + data.current_observation.icon +".svg" ;
//           $( "#icon" ).attr( "src", iconSrc );

//           $("#weather").html(data.current_observation.weather); 
          
                 
            
      
