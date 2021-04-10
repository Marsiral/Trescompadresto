(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".preloader").length > 0)
          {
            setTimeout(function(){
                $('.preloader').fadeOut('slow');
            },1000);
          }
          
      });
  })(jQuery)
  
  