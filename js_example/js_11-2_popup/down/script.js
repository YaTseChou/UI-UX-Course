$(function(){

  $('button').click(function(){
    $('.mask').css('display', 'block');
  })

  $('.bi').click(function(){
    $('.mask').hide();
  })

  // $('.mask').click(function(e){
  //   if(e.target.className == 'mask'){
  //     $(this).removeAttr('style');
  //   }
  //   console.log(e.target.className);
  // })

  $('.mask').click(function(e){
    $(this).removeAttr('style');
    console.log(e.eventPhase);
  })

  $('.popup').click(function(e){
    e.stopPropagation();
    // return false;
    console.log(e.eventPhase);
  })
    

})