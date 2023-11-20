
window.onload = function () {

  // document.getElementById('Btn01').onclick = changePic;
  //  document.getElementById('Btn02').onclick = changePic;
  //  document.getElementById('Btn03').onclick = changePic;
  //  document.getElementById('Btn04').onclick = changePic;
  //  document.getElementById('Btn05').onclick = changePic;

  for (var i = 1; i <= 5; i++) {
    document.getElementById('Btn0' + i).onclick = changePic;
  }

  function changePic() {

    var P = this.id.substr(4);//由0開始計算到4
    document.getElementById('modelPic').src = 'pic0' + P + '.jpg';

    return false;

  }

}



