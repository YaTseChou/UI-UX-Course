window.onload = function () {
    var schoolName = '赫綵設計學院';
    var N = 4;
    var P = 1;

    document.getElementById('btn').onclick = ChangePic;

    function ChangePic() {
        P += 1;
        document.getElementById('picB').src = 'https://picsum.photos/450/300?image=' + P;
    }
}