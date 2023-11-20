
$(function () {

    //   $('.btnShow').click(function(){
    //     $('img').fadeIn();
    //   })

    //   $('btnHdie').click(function(){
    //     $('img').fadeOut();
    //   }) 

    $('.btnShow').click(function () {
        $('img').fadeIn(1000, .7);
    })

    $('btnHide').click(function(){
        $('img').fadeOut(1000, .2);
    })

    $('btnSwitch').click(function(){
        $('img').fadeToggle();
    })

})







