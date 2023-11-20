window.onload = function(){

    var N = 1;
    var mainPic = document.getElementById('mainPic');

	document.getElementById('Btn1').onmouseover = picSwitch;
    document.getElementById('Btn2').onmouseover = picSwitch;
    document.getElementById('Btn3').onmouseover = picSwitch;

    document.getElementById('Btn1').onmouseout = ttEnd;
    document.getElementById('Btn2').onmouseout = ttEnd;
    document.getElementById('Btn3').onmouseout = ttEnd;

    function picSwitch(){
        if(this.id == 'Btn1'){
            N = 1;
        }
        if(this.id == 'Btn2'){
            N = 2;
        }
        if(this.id == 'Btn3'){
            N = 3;
        }
        TT = setTimeout(function(){
            mainPic.src = 'pic' + N + '.jpg';
        }, 500)
    }

    function ttEnd(){
        clearTimeout(TT);
    }
}



