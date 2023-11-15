
$(function(){

  //點擊後圖片移動
  //點擊後再抓取相對應的圖片座標 P
  $('.sel li').click(function(){
    
    var N = $(this).attr('class').substr(3);
    var P = $('.pic' + N).position().left;
    
    $('.pics').css('left', -P);

  })

  //點擊時按鈕加上 class
  $('.sel li').click(function(){
    $('.sel li').removeClass('btnNow');
    $(this).addClass('btnNow');
  })
})







