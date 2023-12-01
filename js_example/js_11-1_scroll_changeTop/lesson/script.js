$(function () {
    $(window).scroll(function(){

        var N = $(window).scrollTop();

        if(N > 140){
            $('.top').addClass('smallTop').animate({top: 0, opacity: 1}, 1);
            $('.kv').css('marginTop', 140);
            $('#logo').attr('src', 'logo_small.png');
        }else{
            $('.top').removeClass('smallTop').stop(true, false).removeAttr('style');
            $('.kv').removeAttr('style');
            $('#logo').attr('src', 'logo_big.png');
        }
    })
})