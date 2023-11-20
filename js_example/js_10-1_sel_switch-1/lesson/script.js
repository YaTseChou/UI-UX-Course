$(function () {

    $('.list1').click(function () {
        $('li div').removeAttr('style');
        $('li div').css('maxHeight', 0);
        $('li div').animate({ maxHeight: 0 }, 500);
        $('.block1').animate({ maxHeight: '200px' }, 500);
    })

    $('.list2').click(function () {
        $('li div').animate({ maxHeight: 0 }, 500);
        $('.block2').animate({ maxHeight: '200px' }, 500);
    })

    $('.list3').click(function () {
        $('li div').animate({ maxHeight: 0 }, 500);
        $('.block3').animate({ maxHeight: '200px' }, 500);
    })

    $('.list4').click(function () {
        $('li div').animate({ maxHeight: 0 }, 500);
        $('.block4').animate({ maxHeight: '200px' }, 500);
    })

    $('.list5').click(function () {
        $('li div').animate({ maxHeight: 0 }, 500);
        $('.block5').animate({ maxHeight: '200px' }, 500);
    })
})







