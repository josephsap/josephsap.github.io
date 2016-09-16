$(document).ready(function(){
  $('.fancybox').fancybox();
  
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

  // bike hover squares
  $('.left img').hover(function() {
    var data = $(this).data('closeup');
    $('#rt-big').attr('src', data);
    $('#caption').html($(this).data('caption'));
   });

//   function checkWidth() {
//     var $winSz = $(window).width();

//     var $main = $('.main');
//     var $intro = $('.intro');
//     var $occ = $('.occupation');
//     var $name = $('.name')

//     if($winSz >=961) {
//       $main.removeClass('center-responsive');
//       $intro.removeClass('intro-mobile');
//       $occ.removeClass('occupation-mobile');
//       $name.removeClass('name-mobile');
//     }

//     if(($winSz >=961) && ($winSz <= 641)) {
//       $main.removeClass('center-responsive');
//       $intro.removeClass('intro-mobile');
//       $occ.removeClass('occupation-mobile');
//       $name.removeClass('name-mobile');
//     }

//     if($winSz <= 960) {
//       $main.addClass('center-responsive');
//       $intro.addClass('intro-mobile');
//       $occ.addClass('occupation-mobile');
//       $name.addClass('name-mobile');
//     }

//     if($winSz <=640) {
//       $main.removeClass('center-responsive');

//     }
// }

// checkWidth();
// $(window).resize(checkWidth);


}); // end doc ready