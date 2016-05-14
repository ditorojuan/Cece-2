$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $(".cw_header_container img"). css({
    'transform' : 'translate(0px, '+wScroll/2+ '%)'
  });

  if (wScroll > $('.cw_content_2_icc').offset().top - ($(window).height() / 1.05)){
    $('.cw_content_2_icc').addClass('cw_show_zoomin');
    if($('.cw_content_2_icc').hasClass('cw_show_zoomin')){
      setTimeout(function(){$('.cw_quote').addClass('cw_show_zoomin');    
    },1000);
    }
}
});
