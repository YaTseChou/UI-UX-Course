
window.onload = function(){

	document.getElementById('pic1').onmouseover = chPic;
	document.getElementById('pic2').onmouseover = chPic;
	document.getElementById('pic3').onmouseover = chPic;

	var targetText = document.getElementById('feDev');

	function chPic (){

		if(this.id == 'pic1'){
			targetText.innerHTML = '<h1>HTML5</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa omnis sint provident atque non cum, laborum fugit. Impedit, hic voluptates veritatis. Repellat neque asperiores voluptas ea omnis quis nulla obcaecati.</p>';
		}
		if(this.id == 'pic2'){
			targetText.innerHTML = '<h1>CSS3</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod repellat, neque explicabo quibusdam inventore cum quisquam cumque, dignissimos omnis veritatis, sequi dicta aut! Ipsa illum magnam aperiam ullam eos!</p>';
		}
		if(this.id == 'pic3'){
			targetText.innerHTML = '<h1>JavaScript</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sequi optio repudiandae ipsa sapiente enim sit accusantium autem, nulla, pariatur laborum atque maxime ratione impedit fugit consectetur inventore, numquam labore.</p>';
		}

	}

}



