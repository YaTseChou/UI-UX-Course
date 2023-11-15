
window.onload = function(){

	document.getElementById('man1').onclick = man1Pic;
	document.getElementById('man2').onclick = man2Pic;
	document.getElementById('man3').onclick = man3Pic;
	document.getElementById('man4').onclick = man4Pic;

	var changePic = document.getElementById('mainPic');

	function man1Pic (){
		changePic.src = 'pic01.jpg';
	}
	function man2Pic (){
		changePic.src = 'pic02.jpg';
	}
	function man3Pic (){
		changePic.src = 'pic03.jpg';
	}
	function man4Pic (){
		changePic.src = 'pic04.jpg';
	}

}



