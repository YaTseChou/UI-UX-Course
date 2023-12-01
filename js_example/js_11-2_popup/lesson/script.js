$(function () {

    $('button').click(function(){
        $('.mask').css('display', 'block');
    })

    $('.bi').click(function(){
        $('.mask').hide();
    })

    $('.mask').click(function(e){
        $(this).removeAttr('style');
        console.log(e.eventPhase);
    })

    $('.popup').click(function(e){
        e.stopPropagation();
        console.log(e.eventPhase);
    })

})