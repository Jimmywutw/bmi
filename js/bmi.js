document.querySelector('.calculate-after').style.display = 'none';



	function myFunction(){
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	var bmi = (weight / (height * height) * 10000);


	//return bmi;
	//var bmi = 29;
	if (bmi >= 18.5 && bmi < 24 ){
	//console.log('體重正常');
	var bmilevel = 1;
	document.getElementById('result').innerHTML = 'BMI:' + (bmi.toFixed(1)) + ' 恭喜你~體重正常。';
	document.querySelector('.calculate-after').style.display = 'inline-block';
	document.querySelector('.calculate-after').src = 'images/calculate' + bmilevel + '.jpg';
	document.querySelector('.calculate-before').style.display = 'none';

}else if ( bmi < 18.5 && bmi > 1 ){
	//console.log('體重過輕');
	var bmilevel = 2;
	document.getElementById('result').innerHTML = 'BMI:' + (bmi.toFixed(1)) + ' 體重過輕...，多吃一點吧！';
	document.querySelector('.calculate-after').style.display = 'inline-block';
	document.querySelector('.calculate-after').src = 'images/calculate' + bmilevel + '.jpg';
	document.querySelector('.calculate-before').style.display = 'none';
}else if ( bmi >= 24 && bmi <= 27){
	console.log('輕度肥胖');
	var bmilevel = 3;
	document.getElementById('result').innerHTML = 'BMI:' + (bmi.toFixed(1)) + ' 輕度肥胖，你該減肥了！';
	document.querySelector('.calculate-after').style.display = 'inline-block';
	document.querySelector('.calculate-after').src = 'images/calculate' + bmilevel + '.jpg';
	document.querySelector('.calculate-before').style.display = 'none';
}else if (bmi > 27 && bmi <= 30){
	console.log('中度肥胖');
	var bmilevel = 4;
	document.getElementById('result').innerHTML = 'BMI:' + (bmi.toFixed(1)) + ' 中度肥胖，你該減肥了！';
	document.querySelector('.calculate-after').style.display = 'inline-block';
	document.querySelector('.calculate-after').src = 'images/calculate' + bmilevel + '.jpg';
	document.querySelector('.calculate-before').style.display = 'none';
}else if (isNaN(weight) || isNaN(height)|| !weight || !height){
	alert('請將身高、體重輸入數字！');
}else if (bmi > 30){
        console.log('重度肥胖');
        var bmilevel = 5;
        document.getElementById('result').innerHTML = 'BMI:' + (bmi.toFixed(1)) + ' 重度肥胖...，您該減肥了！';
        document.querySelector('.calculate-after').style.display = 'inline-block';
        document.querySelector('.calculate-after').src = 'images/calculate' + bmilevel + '.jpg';
        document.querySelector('.calculate-before').style.display = 'none';

	}


}



document.querySelector('#btnclear').addEventListener('click',function(){


	myClear();


});

function myClear(){

document.getElementById('height').value = "";
document.getElementById('weight').value = "";
document.querySelector('.calculate-after').style.display = 'none';
document.querySelector('.calculate-before').style.display = 'block';
document.getElementById('result').innerHTML = '顯示結果：';

}
