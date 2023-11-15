
$(function(){

  $('.btn1').click(function() {
    $('.pic').stop(true,false).animate({left:'-300px'},500)
    return false;
  });

  $('.btn2').click(function() {
    $('.pic').stop(true,false).animate({left:'300px'},500)
    return false;
  });

  $('.btn3').click(function() {
    $('.pic').stop(true,false).animate({width:'800px', height:'500px'},500)
    return false;
  });

  $('.btn4').click(function() {
    $('.pic').stop(true,false).animate({width:'300px', height:'200px'},500)
    return false;
  });

  $('.btn5').click(function() {
    $('.pic').removeAttr('style');
    return false;
  });
  
})







