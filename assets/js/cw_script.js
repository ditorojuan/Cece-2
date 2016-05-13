var mq = window.matchMedia( "(max-width: 500px)" );
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var multiplyWindowsH =  $(window).height() * 1.1;
  $(".cw_header_container img"). css({
    'transform' : 'translate(0px, '+wScroll/2+ '%)'
  });
  if (mq.matches) {
    multiplyWindowsH = $(window).height() * 2.1;
  }
  if (wScroll > $('.cw_content_2_icc').offset().top - multiplyWindowsH){
    $('.cw_content_2_icc').addClass('cw_show_zoomin');
    if($('.cw_content_2_icc').hasClass('cw_show_zoomin')){
      setTimeout(function(){$('.cw_quote').addClass('cw_show_zoomin');
    },1000);
    }

}
});
