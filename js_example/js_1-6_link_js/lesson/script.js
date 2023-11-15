window.onload = function () {
    function changeImg() {
        document.getElementById('mainPic').src = 'pic02.jpg';
    }

    function changeImg2() {
        document.getElementById('mainPic').src = 'pic01.jpg';
    }

    function changeText() {
        document.getElementById('main').innerHTML = 'CHANGE!';
    }

    function changeText2() {
        document.getElementById('main').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, odit! Consectetur, voluptatem. Pariatur delectus quas similique fugit facere numquam aut, nobis fugiat, porro cumque rem maiores ab quo, repellat praesentium.';
    }

    document.getElementById('mainPic').onmouseover = changeImg;
    document.getElementById('main').onmouseover = changeText;

    document.getElementById('mainPic').onmouseout = changeImg2;
    document.getElementById('main').onmouseout = changeText2;
}