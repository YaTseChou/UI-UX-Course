
$(function () {
    $('.sel li').click(function () {
        var N = $(this).attr('class').substr(3);
        var P = $('.pic' + N).position().left;

        $('.pics').css('left', -P);
    })

    $('.sel li').click(function(){
        $('.sel li').removeClass('btnNow');
        $(this).addClass('btnNow');
    })
})







