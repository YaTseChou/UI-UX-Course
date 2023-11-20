
$(function () {

    var po1 = $('.pic1').position().left;
    var po2 = $('.pic2').position().left;
    var po3 = $('.pic3').position().left;
    var po4 = $('.pic4').position().left;
    var po5 = $('.pic5').position().left;

    $('.btn1').click(function(){
        $('.pics').css('left', -po1);
    })

    $('.btn2').click(function(){
        $('.pics').css('left', -po2);
    })

    $('.btn3').click(function(){
        $('.pics').css('left', -po3);
    })

    $('.btn4').click(function(){
        $('.pics').css('left', -po4);
    })

    $('.btn5').click(function(){
        $('.pics').css('left', -po5);
    })

    $('.sel li').click(function(){
        $('.sel li').removeClass('btnNow');
        $(this).addClass('btnNow');
    })
})




