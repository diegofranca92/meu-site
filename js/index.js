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
  }


var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});