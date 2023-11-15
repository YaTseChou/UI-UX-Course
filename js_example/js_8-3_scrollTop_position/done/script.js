
$(function(){

  //以整個網頁為相對位置來抓取座標
  var blockA = $('.about').offset().top;
  var blockB = $('.prd').offset().top;
  var blockC = $('.con').offset().top;

  //往上找父層有寫 relative 的元素為相對位置抓取座標
  // var blockA = $('.about').position().top;
  // var blockB = $('.prd').position().top;
  // var blockC = $('.con').position().top;

  $('.btn1').click(function() {
    // $(window).scrollTop(blockA); //直接跳格

    $('html,body').animate({scrollTop: blockA}, 500)
    return false;
  });

  $('.btn2').click(function() {
    $('html,body').animate({scrollTop: blockB}, 500)
    return false;
  });

  $('.btn3').click(function() {
    $('html,body').animate({scrollTop: blockC}, 500)
    return false;
  });

  $('.toTop').click(function(){
    $('html,body').animate({scrollTop: 0}, 500)
    return false;
  })
  
})







