$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
  
      var target = $(this.getAttribute('href'));
  
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop.animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  
  });

  // Loadings
  var loadJS = new ldBar("#loadJS", {
    "type": "fill",
    "img": "../meu-site/images/js.svg",
    "value":"70"
   });

   var loadCSS = new ldBar("#loadCSS", {
    "type": "fill",
    "img": "../meu-site/images/css.svg",
    "value":"90"
   });

   var loadHTML = new ldBar("#loadHTML", {
    "type": "fill",
    "img": "../meu-site/images/html.svg",
    "value":"90"
   });



  //  // Menu SlideOut
  //  var slideout = new Slideout({
  //   'panel': document.getElementById('panel'),
  //   'menu': document.getElementById('menu'),
  //   'padding': 256,
  //   'tolerance': 70
  // });
  
  // // Toggle button
  // document.querySelector('.toggle-button').addEventListener('click', function() {
  //   slideout.toggle();
  // });


  });

