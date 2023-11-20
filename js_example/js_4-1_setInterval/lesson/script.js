
window.onload = function(){

    var N = 1;
    var el = document.getElementById('mainPic');

    function picRun(){
        if(N < 5){
            N++;
        }else{
            N = 1;
        }
        mainPic.src = 'pic' + N + '.jpg';
    }
    setInterval(picRun, 1000);
}