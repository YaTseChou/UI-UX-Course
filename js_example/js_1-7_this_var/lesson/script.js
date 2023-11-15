window.onload = function(){
    function changeImg(){
        this.src = 'pic02.jpg';
    }

    function changeImg2(){
        this.src = 'pic01.jpg';
    }

    var workImg = document.getElementById('mainPic');

    workImg.onmouseover = changeImg;
    workImg.onmouseout = changeImg2;
}