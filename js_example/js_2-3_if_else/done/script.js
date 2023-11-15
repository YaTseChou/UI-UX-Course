
window.onload = function(){

	//圖片
	var mainPic = document.getElementById('mainPic');
	//按鈕
	var picBtn = document.getElementById('Btn');
	//數字
	var picNum = document.getElementById('picNum');
	//圖片數量(變數)
	var N = 1;


	mainPic.src = 'pic' + N + '.jpg';


	picBtn.onclick = function (){

		if(N < 5){
			N += 1;
			mainPic.src = 'pic' + N + '.jpg';
			picNum.innerHTML = N;
		}else{
			N = 1;
			mainPic.src = 'pic' + N + '.jpg';
			picNum.innerHTML = N;
		}

		//取消 <a> 連結點擊後，在網址最後的 # 字號
		return false;

	}

}



