
window.onload = function(){

	var schoolName = '赫綵設計學院';
	var N = 4;
	var P = 1;

	// alert(schoolName);

	// document.getElementById('picA').src = 'pic' + N + '.jpg';

	document.getElementById('btn').onclick = ChangePic;

	function ChangePic (){

		P += 1; // 加號等號中間不能有空隔
		// P++;

		document.getElementById('picB').src = 'https://picsum.photos/450/300?image=' + P;

	}


}



