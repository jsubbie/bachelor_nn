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
      });
      $('#bachelorette-form').hide();
    } else {
      $('#bachelor-form').hide();
      $('#bachelorette-form').show("fadeIn", function() {
      });
    }
  });

  $(".submit-form").on("click", function(e) {
    e.preventDefault();
    
    var formName = $(this).attr("data-form");
    
    if (formName === "bachelor") {
      postForm("#bachelor-form", "/bachelor");
    } else {
      postForm("#bachelorette-form", "/bachelorette");
    }
    
  });
  
  //Post request to server
  function postForm(formId, queryUrl) {
    console.log(formId)
    
    var contestantInfo = {
      name: $(`${formId} [name="name"]`).val(),
      age: $(`${formId} [name="age"]`).val(),
      occupation: $(`${formId} [name="occupation"]`).val(),
      hometown: $(`${formId} [name="hometown"]`).val(),
      height: $(`${formId} [name="height"]`).val(),
      weight: $(`${formId} [name="weight"]`).val(),
      hairColor: $(`${formId} [name="hairColor"]`).val(),
      eyeColor: $(`${formId} [name="eyeColor"]`).val()
    }
    
    if (formId === "#bachelorette-form") {
      contestantInfo.pushups = $(`${formId} [name="pushups"]`).val();
      contestantInfo.pullups = $(`${formId} [name="pullups"]`).val();
    }
    
    console.log(contestantInfo);
    
    $.post(queryUrl, contestantInfo)
      .then(function(data) {
      console.log(data)   
     });
  }