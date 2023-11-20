window.onload = function(){

	document.getElementById('man1').onclick = picList;
    document.getElementById('man2').onclick = picList;
    document.getElementById('man3').onclick = picList;
    document.getElementById('man4').onclick = picList;

    var changePic = document.getElementById('mainPic');

    function picList(){
        if(this.id == 'man1'){
            changePic.src = 'pic01.jpg';
        }
        if(this.id == 'man2'){
            changePic.src = 'pic02.jpg';
        }
        if(this.id == 'man3'){
            changePic.src = 'pic03.jpg';
        }
        if(this.id == 'man4'){
            changePic.src = 'pic04.jpg';
        }
    }
}