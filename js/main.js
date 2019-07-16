var map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  });
  
  
GMaps.geocode({
  address: 'Germany',
  callback: function(results, status){
    var firstResult = results[0];
    map.setCenter(firstResult.geometry.location.lat(), firstResult.geometry.location.lng());
    map.setZoom(7);
  }
}); 



var mixer = mixitup('.wrapper');
new WOW().init();


// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });



$(document).ready(function(){


  $(".navbar__toggler").click(function(){
    $(".navbar__menu").hide();
    $(this).toggleClass("open");
  })
  $('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
  $('.owl-carousel2').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:5000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })


});

