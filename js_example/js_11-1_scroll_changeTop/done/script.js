
$(function(){

  $(window).scroll(function(){

    var N = $(window).scrollTop();
    if(N > 140){
      //加入class & 由上往下移動天的位置 & 透明度
      $('.top').addClass('smallTop').animate({top: 0, opacity: 1}, 500);
      //會有空白區塊的跳格問題,加上 margin
      $('.kv').css('marginTop',140);
      //Logo 使用 attr 更換
      $('#logo').attr('src', 'logo_small.png');
    }else{
      //除了class外, 動畫使用 sytle 所以 stop 與移除 style 都要做
      $('.top').removeClass('smallTop').stop(true,false).removeAttr('style');
      $('.kv').removeAttr('style');
      $('#logo').attr('src', 'logo_big.png');
    }

  })
  
})







