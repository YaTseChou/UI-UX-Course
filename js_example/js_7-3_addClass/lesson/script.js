$(function(){

    $('.small').click(function(){
        $('#inbox').removeClass();
        $('#inbox').addClass('fontType1');
    })

    $('.middle').click(function(){
        $('#inbox').removeClass();
        $('#inbox').addClass('fontType2');
    })

    $('.large').click(function(){
        $('#inbox').removeClass();
        $('#inbox').addClass('fontType3');
    })
})