
$(function(){

  var ShowTT = new Array();

  ShowTT[0] = '1. First text';
  ShowTT[1] = '2. Second text';
  ShowTT[2] = '3. Third text';
  ShowTT[3] = '4. Ford text';

  // 陣列長度 ShowTT.length
  for(var i=0; i<=3; i++){
  	$('#btn'+i).hover(changeText);
  }

  function changeText(){
  	var P = this.id.substr(3)
  	$('.mainText').html(ShowTT[P])
  }
  
})







