
$(function () {

    var po1 = $('.pic1').position().left;
    var po2 = $('.pic2').position().left;
    var po3 = $('.pic3').position().left;
    var po4 = $('.pic4').position().left;
    var po5 = $('.pic5').position().left;

    $('.sel li').click(function () {
        var N = $(this).attr('class').substr(3)

        if (N == 1) {
            $('.pics').css('left', -po1);
        }
        if (N == 2) {
            $('.pics').css('left', -po2);
        }
        if (N == 3) {
            $('.pics').css('left', -po3);
        }
        if (N == 4) {
            $('.pics').css('left', -po4);
        }
        if (N == 5) {
            $('.pics').css('left', -po5);
        }

        // switch (N) {
        //     case '1':
        //         $('.pics').css('left', -po1);
        //         break;

        //     case '2':
        //         $('.pics').css('left', -po2);
        //         break;

        //     case '3':
        //         $('.pics').css('left', -po3);
        //         break;

        //     case '4':
        //         $('.pics').css('left', -po4);
        //         break;

        //     case '5':
        //         $('.pics').css('left', -po5);
        //         break;
        // }
    })

    $('.sel li').click(function () {
        $('.sel li').removeClass('btnNow');
        $(this).addClass('btnNow');
    })
})







