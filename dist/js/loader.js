(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".ploader").length > 0)
          {
              $(".ploader").fadeOut("slow");
          }
      });
  })(jQuery)