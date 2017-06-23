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
          
                 
            
        var userFeed = new Instafeed({
get: 'user',
userId: '2321088784',
accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     limit: 60,
//tags: temp_c,            
            
    //data: {access_token: tok, count: kolichestvo},//+++++++++++
    success: function() {
        foundImages = 0;
        maxImages = 5;
    },
    filter: function(image) {
        
         //return image.tags.indexOf('TAG1') >= 0 && image.tags.indexOf('TAG2') >= 0;
     //return image.tags.indexOf('25') >= 0;
        
       // str.indexOf(searchValue[, fromIndex])
        //var image.tags = ['25'];
        //var temperature_c1 = data.current_observation.temp_c1;+++++++++
        //==data.current_observation.temp_c1+++++++++++++++++++++
     if (image.tags.indexOf(temp_c) >= 0 && foundImages < maxImages) {//++++
            foundImages = foundImages + 1;
            return true;
        }
    else if(image.tags.indexOf('23') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }
    else if(image.tags.indexOf('27') >= 0 && foundImages < maxImages) {
            foundImages = foundImages + 1;
            return true;
        }    
        return false;
  }    

}); 
userFeed.run(); 

        },
        cache: false
      });       
      
    });
  }    

}); 
