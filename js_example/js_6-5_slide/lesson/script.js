
$(function () {
    $('btnShow').click(function () {
        $('div').slideDown();
    })

    $('btnHide').click(function () {
        $('div').slideUp();
    })

    $('.btnSwitch').click(function () {
        $('div').slideToggle();
    })
})







