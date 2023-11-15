
$(function(){

  $('h1').click(function(){
    // JQ 原始選取器,速度較快
    // $(this).parent().siblings().children('div').animate({maxHeight: 0}, 500);

    //CSS 類別選取器,速度較慢
    $('ul div').animate({maxHeight: 0}, 500);
    $(this).next().animate({maxHeight: '200px'}, 500);
  })

})







