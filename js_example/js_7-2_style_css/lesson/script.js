
$(function () {
    $('.small').click(function () {
        $('#inbox').removeAttr('style');//先清除樣式

        $('#inbox').css({
            'fontSize': '12px',
            'color': 'green',
            'backgroundColor': 'yellow',
        });
    })

    $('.middle').click(function () {
        $('#inbox').removeAttr('style');//先清除樣式

        $('#inbox').css({
            'fontSize': '15px',
            'color': 'pink',
            'lineHeight': '2',
        });
    })

    $('.large').click(function () {
        $('#inbox').removeAttr('style');//先清除樣式

        $('#inbox').css({
            'fontSize': '18px',
            'color': 'purple',
            'fontStyle': 'italic',
            'fontWeight': 'bold',
        });
    })
})