window.onload = function(){

	function sayHay(){
        alert('Hello World!');
    }

    document.getElementById('Btn').onclick = function(){
        setTimeout(sayHay, 1000);

        return false;
    }

}