
window.onload = function(){

	document.getElementById('fzS').onclick = fzSmall;
  document.getElementById('fzM').onclick = fzMiddle;
  document.getElementById('fzL').onclick = fzLarge;

  function fzSmall(){
    document.getElementById('Text').className = 'typeA';
    // document.getElementById('fzM').className = '';
    // document.getElementById('fzL').className = '';
    // this.className = 'tagNow';
  }

  function fzMiddle(){
    document.getElementById('Text').className = 'typeB';
    // document.getElementById('fzS').className = '';
    // document.getElementById('fzL').className = '';
    // this.className = 'tagNow';
  }

  function fzLarge(){
    document.getElementById('Text').className = 'typeC';
    // document.getElementById('fzS').className = '';
    // document.getElementById('fzM').className = '';
    // this.className = 'tagNow';
  }

}



