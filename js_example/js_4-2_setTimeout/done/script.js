
window.onload = function(){

	function sayHay(){
		alert('Hello World!');
	}

	// sayHay();
	// setTimeout(sayHay,2000)

	document.getElementById('Btn').onclick = function(){
		setTimeout(sayHay,1000);
		
		return false;
	}

}



