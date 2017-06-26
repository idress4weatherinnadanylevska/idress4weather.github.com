
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


          
                 
//          var c = data.current_observation.temp_c;  
//          var f = data.current_observation.temp_f;   
//         var userFeed = new Instafeed({
// get: 'user',
// userId: '2321088784',
// accessToken: '2321088784.1677ed0.bde13057fffd4b30aad200715ee85b61',
//     template: '<a href="{{link}}"><img src="{{image}}" /></a>',
//      limit: 60,
// //tags: c,            
            
//     //data: {access_token: tok, count: kolichestvo},//+++++++++++
//     success: function() {
//         foundImages = 0;
//         maxImages = 5;
//     },
//           window.setTimeout(function() {
//     filter: function(image) {//'self',func(immage)??????????????????????
//      if(c == '25'){
//      if (image.tags.indexOf('25') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
                                     
                                     
                                     
                                     
                                     
   
                                              
                                    
                                            
//        else if(f == '85'){
//      if (image.tags.indexOf('85') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                            
//        else if(f == '84'){
//      if (image.tags.indexOf('84') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                              
//        else if(f == '83'){
//      if (image.tags.indexOf('83') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                             
//        else if(f == '82'){
//      if (image.tags.indexOf('82') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                            
//        else if(f == '81'){
//      if (image.tags.indexOf('81') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                      
//        else if(f == '80'){
//      if (image.tags.indexOf('80') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                              
//        else if(f == '79'){
//      if (image.tags.indexOf('79') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                             
//        else if(f == '78'){
//      if (image.tags.indexOf('78') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                               
//        else if(f == '77'){
//      if (image.tags.indexOf('77') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                            
//        else if(f == '76'){
//      if (image.tags.indexOf('76') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                             
//        else if(f == '75'){
//      if (image.tags.indexOf('75') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                           
//        else if(f == '74'){
//      if (image.tags.indexOf('74') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                         
//        else if(f == '73'){
//      if (image.tags.indexOf('73') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                         
//         else if(f == '72'){
//      if (image.tags.indexOf('72') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
       
//        else if(f == '71'){
//      if (image.tags.indexOf('71') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                                  
//     else if(f == '70'){
//      if (image.tags.indexOf('70') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                              
//     else if(f == '69'){
//      if (image.tags.indexOf('69') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                             
//     else if(f == '68'){
//      if (image.tags.indexOf('68') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                                  
//     else if(f == '67'){
//      if (image.tags.indexOf('67') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                               
//     else if(f == '66'){
//      if (image.tags.indexOf('66') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                               
//     else if(f == '65'){
//      if (image.tags.indexOf('65') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                               
//     else if(f == '64'){
//      if (image.tags.indexOf('64') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                              
//     else if(f == '63'){
//      if (image.tags.indexOf('63') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                                
//     else if(f == '62'){
//      if (image.tags.indexOf('62') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                             
//     else if(f == '61'){
//      if (image.tags.indexOf('61') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                             
//     else if(f == '60'){
//      if (image.tags.indexOf('60') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                          
//     else if(f == '59'){
//      if (image.tags.indexOf('59') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                         
//     else if(f == '58'){
//      if (image.tags.indexOf('58') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                          
//     else if(f == '57'){
//      if (image.tags.indexOf('57') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                          
//     else if(f == '56'){
//      if (image.tags.indexOf('56') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                           
//     else if(f == '55'){
//      if (image.tags.indexOf('55') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                         
//     else if(f == '54'){
//      if (image.tags.indexOf('54') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                         
//     else if(f == '53'){
//      if (image.tags.indexOf('53') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                          
//     else if(f == '52'){
//      if (image.tags.indexOf('52') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
                                         
//     else if(f == '51'){
//      if (image.tags.indexOf('51') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                          
//     else if(f == '50'){
//      if (image.tags.indexOf('50') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                        
//     else if(f == '49'){
//      if (image.tags.indexOf('49') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                         
//     else if(f == '48'){
//      if (image.tags.indexOf('48') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                       
//     else if(f == '47'){
//      if (image.tags.indexOf('47') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                         
//     else if(f == '46'){
//      if (image.tags.indexOf('46') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                                                         
//     else if(f == '45'){
//      if (image.tags.indexOf('45') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                      
                                     
//     else if(f == '44'){
//      if (image.tags.indexOf('44') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                   
//    else if(f == '43'){
//      if (image.tags.indexOf('43') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                   
//   else if(f == '42'){
//      if (image.tags.indexOf('42') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                        
//   else if(f == '41'){
//      if (image.tags.indexOf('41') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                                                               
                                     
//   else if(c == '40'||f == '40'){
//      if (image.tags.indexOf('40') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                           
//      else if(c == '39'||f == '39'){
//      if (image.tags.indexOf('39') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                               
                                         
//      else if(c == '38'||f == '38'){
//      if (image.tags.indexOf('38') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                 
                                           
//      else if(c == '37'||f == '37'){
//      if (image.tags.indexOf('37') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}               
                                      
//      else if(c == '36'||f == '36'){
//      if (image.tags.indexOf('36') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                    
                                     
//      else if(c == '35'||f == '35'){
//      if (image.tags.indexOf('35') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}    
                                     
//      else if(c == '34'||f == '34'){
//      if (image.tags.indexOf('34') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
                                     
//      else if(c == '33'||f == '33'){
//      if (image.tags.indexOf('33') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                     
//      else if(c == '32'||f == '32'){
//      if (image.tags.indexOf('32') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}      
                                          
//      else if(c == '31'||f == '31'){
//      if (image.tags.indexOf('31') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                  
                                     
//      else if(c == '30'||f == '30'){
//      if (image.tags.indexOf('30') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                               
                                     
//      else if(c == '29'||f == '29'){
//      if (image.tags.indexOf('29') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                   
                                       
//      else if(c == '28'||f == '28'){
//      if (image.tags.indexOf('28') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                   
                                     
//      else if(c == '27'||f == '27'){
//      if (image.tags.indexOf('27') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                     
//      else if(c == '26'||f == '26'){
//      if (image.tags.indexOf('26') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}                                     
                                     
//      else if(c == '25'||f == '25'){
//      if (image.tags.indexOf('25') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//      else if(c == '24'||f == '24'){
//      if (image.tags.indexOf('24') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
//                else if(c == '23'||f == '23'){
//      if (image.tags.indexOf('23') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '22'||f == '22'){
//      if (image.tags.indexOf('22') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '21'||f == '21'){
//      if (image.tags.indexOf('21') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '20'||f == '20'){
//      if (image.tags.indexOf('20') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '19'||f == '19'){
//      if (image.tags.indexOf('19') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '18'||f == '18'){
//      if (image.tags.indexOf('18') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '17'||f == '17'){
//      if (image.tags.indexOf('17') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '16'||f == '16'){
//      if (image.tags.indexOf('16') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '15'||f == '15'){
//      if (image.tags.indexOf('15') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '14'||f == '14'){
//      if (image.tags.indexOf('14') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '13'||f == '13'){
//      if (image.tags.indexOf('13') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '12'||f == '12'){
//      if (image.tags.indexOf('12') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '11'||f == '11'){
//      if (image.tags.indexOf('11') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '10'||f == '10'){
//      if (image.tags.indexOf('10') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '9'||f == '9'){
//      if (image.tags.indexOf('9') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '8'||f == '8'){
//      if (image.tags.indexOf('8') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '7'||f == '7'){
//      if (image.tags.indexOf('7') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '6'||f == '6'){
//      if (image.tags.indexOf('6') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '5'||f == '5'){
//      if (image.tags.indexOf('5') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '4'||f == '4'){
//      if (image.tags.indexOf('4') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '3' || f == '3'){
//      if (image.tags.indexOf('3') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '2'|| f == '2'){
//      if (image.tags.indexOf('2') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '1'||f == '1'){
//      if (image.tags.indexOf('1') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '0'){
//      if (image.tags.indexOf('0') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-1'||f == '-1'){
//      if (image.tags.indexOf('-1') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-2'||f == '-2'){
//      if (image.tags.indexOf('-2') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-3'||f == '-3'){
//      if (image.tags.indexOf('-3') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-4'||f == '-4'){
//      if (image.tags.indexOf('4') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-5'||f == '-5'){
//      if (image.tags.indexOf('-5') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-6'||f == '-6'){
//      if (image.tags.indexOf('-6') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-7'||f == '-7'){
//      if (image.tags.indexOf('-7') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-8'||f == '-8'){
//      if (image.tags.indexOf('-8') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-9'||f == '-9'){
//      if (image.tags.indexOf('-9') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-10'||f == '-10'){
//      if (image.tags.indexOf('-10') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-11'||f == '-11'){
//      if (image.tags.indexOf('-11') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
          
//                else if(c == '-12'||f == '-12'){
//      if (image.tags.indexOf('-12') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-13'||f == '-13'){
//      if (image.tags.indexOf('-13') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-14'){
//      if (image.tags.indexOf('-14') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-15'){
//      if (image.tags.indexOf('-15') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-16'){
//      if (image.tags.indexOf('-16') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-17'){
//      if (image.tags.indexOf('-17') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-18'){
//      if (image.tags.indexOf('-18') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                else if(c == '-19'){
//      if (image.tags.indexOf('-19') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-20'){
//      if (image.tags.indexOf('-20') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-21'){
//      if (image.tags.indexOf('-21') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-22'){
//      if (image.tags.indexOf('-22') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-23'){
//      if (image.tags.indexOf('-23') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-24'){
//      if (image.tags.indexOf('-24') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-25'){
//      if (image.tags.indexOf('-25') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-26'){
//      if (image.tags.indexOf('-26') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-26'){
//      if (image.tags.indexOf('-26') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-27'){
//      if (image.tags.indexOf('-27') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-28'){
//      if (image.tags.indexOf('-28') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-29'){
//      if (image.tags.indexOf('-29') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
//                          else if(c == '-30'){
//      if (image.tags.indexOf('-30') >= 0 && foundImages < maxImages) {//++++
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
//         return false;}
          
          
          
          
          
          
//   }//succ  
//                                      }, 10000);

// }); 
// userFeed.run(); 

         },
        cache: false
      });       
      
    });
  }    

});

