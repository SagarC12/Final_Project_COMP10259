$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > 0) {
        $('.navbar').addClass('fixed');
      } else {
        $('.navbar').removeClass('fixed');
      }
    });
  });
  
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true,
      'disableScrolling': true
    });
    $( '.slideshow').slick({

    });
 