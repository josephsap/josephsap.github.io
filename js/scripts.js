$(document).ready(function(){
  // $('.fancybox').fancybox();
  
    //start overlays
  $('.menuitem').click(function(e){
    e.preventDefault();
    $("body").addClass("noscroll");
    $('.menubox').hide();
    var related = $(this).attr('href');
    $("" + related).fadeToggle("fast", "linear");
  });

  $(".close").click(function(){
    $(".overlay").fadeOut('fast');
    $("body").removeClass("noscroll");
  });


}); // end doc ready