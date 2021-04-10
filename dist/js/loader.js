(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".ploader").length > 0)
          {
            setTimeout(function(){
                $('.ploader').fadeOut('slow');
            },1000);
          }
          
      });
  })(jQuery)
  
  