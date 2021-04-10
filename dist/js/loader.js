(function($){
    'use strict';
      $(window).on('load', function () {
        setTimeout(function(){
            $('.preloader').fadeOut('slow');
            $('.loader').fadeOut('slow');
        },1000);
          
      });
  })(jQuery)
  
  document.getElementsByClassName("animsition-loading").style.visibility = "hidden";