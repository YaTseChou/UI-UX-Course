
$(function () {

    $('h1').click(function(){
        $(this).parent().siblings().children('div').animate({maxHeight: 0}, 500);

        // $('ul div').animate({maxHeight: 0}, 500);
        $(this).next().animate({maxHeight: '200px'}, 500);
    })

})







