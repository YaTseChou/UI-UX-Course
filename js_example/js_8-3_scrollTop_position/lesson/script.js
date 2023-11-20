
$(function(){

    var blockA = $('.about').offset().top;
    var blockB = $('.prd').offset().top;
    var blockC = $('.con').offset().top;

    $('.btn1').click(function(){
        $('html,body').animate({scrollTop: blockA}, 500)
        return false;
    });

    $('.btn2').click(function(){
        $('html,body').animate({scrollTop: blockB}, 500)
        return false;
    });

    $('.btn3').click(function(){
        $('html,body').animate({scrollTop: blockC}, 500)
        return false;
    });

    $('.toTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500)
        return false;
    });
})







