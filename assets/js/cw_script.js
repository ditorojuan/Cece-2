var mq = window.matchMedia( "(max-width: 500px)" );
var headerSize = $('.cw_header').height();
var quoteSize = $('.cw_content_2_icc').height();
var canSee = $(this).height();
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var multiplyWindowsH =  $(window).height() * 1.1;
  if(headerSize => wScroll){
  $(".cw_header_container img"). css({
    'transform' : 'translate(0px, '+wScroll/2+ '%)'
  });
}

  if (mq.matches) {
    multiplyWindowsH = $(window).height() * 2.1;
  }
  if( quoteSize  =>  wScroll){
    if (wScroll > $('.cw_content_2_icc').offset().top - multiplyWindowsH){
      $('.cw_content_2_icc').addClass('cw_show_zoomin');
        if($('.cw_content_2_icc').hasClass('cw_show_zoomin')){
          setTimeout(function(){$('.cw_quote').addClass('cw_show_zoomin');
        },500);
      }
    }
  }

  if(wScroll > $('.row.ponentes').offset().top - multiplyWindowsH){
    $('.row.ponentes').addClass('canSee');
    $('.ponente').each(function(i){
      setTimeout(function(){
        $('.ponente').find('.ponente_perfil').eq(i).addClass('ponente_show_zoomin');
        $('.ponente').find('.ponente_info').eq(i).slideDown();
     }, (150 * (i+3)));
   });
 }
});
