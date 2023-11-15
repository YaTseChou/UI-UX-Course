
window.onload = function(){

	document.getElementById('fzS').onclick = fzSmall;
  document.getElementById('fzM').onclick = fzMiddle;
  document.getElementById('fzL').onclick = fzLarge;

  function fzSmall(){
    document.getElementById('Text').style.fontSize = '13px';
    // document.getElementById('Text').style.lineHeight = '3';
  }

  function fzMiddle(){
    document.getElementById('Text').style.fontSize = '16px';
  }

  function fzLarge(){
    document.getElementById('Text').style.fontSize = '20px';
  }

}



