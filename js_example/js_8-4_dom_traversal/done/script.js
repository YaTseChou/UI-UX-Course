
$(function(){

  //has()
  $('.block1 div').has('p').css('backgroundColor','#ccc');

  //eq()
  $('.block2 li').eq(2).css('backgroundColor','#ccc');

  //parent()
  $('.block3Text').parent().css({
    'backgroundColor':'#ccc',
    'borderWidth': 1,
    'padding': 20,
  })

  //prev() next()
  $('.block4 .item').prev().css('backgroundColor','#ccc');
  $('.block4 .item').next().css('backgroundColor','#999');

  //children()
  $('.block5').children().css({
    'backgroundColor':'#ccc',
    'borderWidth': 1,
    'borderColor': '#999',
    'borderStyle': 'solid',
  })

  //siblings()
  $('.block6 .sec').siblings().css('backgroundColor','#ccc');
  // $('.block6').children('.sec').siblings().css('backgroundColor','#ccc');
  
})







