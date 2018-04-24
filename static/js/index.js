(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict

// Show or hide bachelorette form on click
$('#bachelor-form').hide();
  $('#bachelorette-form').hide();
  
  $('.form-picker').on('click', function(e) {
    /* unecessary for this case, but it stops any form elements from reloading the page on click (default is to reload, we don't want that) */
    e.preventDefault();
    
    const showPick = $(this).attr("data-show");
    console.log(showPick);
    
    if (showPick === 'bachelor') {
      $('#bachelor-form').show("fadeIn", function() {
        // Animation complete.
      });
      $('#bachelorette-form').hide();
    } else {
      $('#bachelor-form').hide();
      $('#bachelorette-form').show("fadeUp", function() {
        // Animation complete.
      });
    }
  });