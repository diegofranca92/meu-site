

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
    "value":"90",
    "img": "../meu-site/images/js.svg",
    "fill-dir": "btt"
   });

   var loadCSS = new ldBar("#loadCSS", {
    "type": "fill",
    "value":"90",
    "img": "../meu-site/images/css.svg",
    "fill-dir": "btt"
   });

   var loadHTML = new ldBar("#loadHTML", {
    "type": "fill",
    "value":"90",
    "img": "../meu-site/images/html.svg",
    "fill-dir": "btt"
   });

   setInterval(reloading(), 3000);
    setInterval(loadJS.set(70), 3000);
    setInterval(loadCSS.set(90), 3000);
    setInterval(loadHTML.set(90), 3000);
       


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

