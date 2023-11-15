
window.onload = function(){

	function changeImg (){
		document.getElementById('mainPic').src = 'pic02.jpg';
	}

	// function changeImg2 (){
	// 	document.getElementById('mainPic').src = 'pic01.jpg';
	// }

	function changeText (){
		document.getElementById('main').innerHTML = 'Change!';
	}

	document.getElementById('mainPic').onmouseover = changeImg;
	// document.getElementById('mainPic').onmouseout = changeImg2;
	document.getElementById('main').onmouseover = changeText;

}



