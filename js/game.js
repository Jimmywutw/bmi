/*

	遊戲JavaScript文件
	
*/
/*var dice = Math.floor(Math.random()*6)+1;*/
var currentPlayer = 1;
var player1totalscore = 0;
var player2totalscore = 0;
var counter = 1;
var isPlaying = true;
/*alert(dice);*/

// DOM -Document Object Model

/*document.querySelector('#player'+ currentPlayer +'-current-score').textContent = dice;
*//*document.querySelector('#player'+ currentPlayer +'-current-score').innerHTML = '<h2>'+ dice + '</h2>';*/

/*document.querySelector('.dice').style.display = 'none';*/
document.querySelector('.dice').style = 'display: none';
document.querySelector('.winner1').style.display = 'none';
document.querySelector('.winner2').style.display = 'none';

//Event監聽
document.querySelector('.roll').addEventListener('click',function(){

if (isPlaying){

	document.querySelector('.dice').style = 'display: block';
var dice = Math.floor(Math.random()*6)+1;
//console.log(dice);
document.querySelector('.dice').src = 'images/dice' + dice +'.png';



if(currentPlayer ===1 ){

document.querySelector('#player'+ currentPlayer +'-current-score').textContent = dice;
player1totalscore += dice;
document.getElementById('player'+ currentPlayer +'-total-score').textContent = player1totalscore ;
document.querySelector('.panel-'+ currentPlayer ).classList.remove('active');
currentPlayer = 2;
document.querySelector('.panel-'+ currentPlayer ).classList.add('active');
document.querySelector('#player'+ currentPlayer +'-current-score').textContent = 0;
}else{

document.querySelector('#player'+ currentPlayer +'-current-score').textContent = dice;
player2totalscore += dice;
document.getElementById('player'+ currentPlayer +'-total-score').textContent = player2totalscore ;
document.querySelector('.panel-'+ currentPlayer ).classList.remove('active');
currentPlayer = 1;
document.querySelector('.panel-'+ currentPlayer ).classList.add('active');
document.querySelector('#player'+ currentPlayer +'-current-score').textContent = 0;

}

counter += 1;
console.log(counter);

if (counter === 7){
	if(player1totalscore > player2totalscore){
		document.querySelector('.winner1').style.display = 'block';
		document.getElementById('player1-current-score').style = 'margin-top:-2px';
		
		isPlaying = false;

	}
else if (player1totalscore < player2totalscore) {
		document.querySelector('.winner2').style.display = 'block';
		document.getElementById('player2-current-score').style = 'margin-top:-2px';
		
		isPlaying = false;
}else {
	

	document.querySelector('.roll').textContent = '平手';
	isPlaying = false;
}



}

}else{
	isPlaying = true;
	init();
	//init
	
	
}




});

document.querySelector('.newGame').addEventListener('click',function(){

isPlaying = true;
	init();



});

function init(){
	
	currentPlayer = 1;
	player1totalscore = 0;
	player2totalscore = 0;
	counter = 1;
	document.querySelector('.dice').style = 'display: none';
	document.querySelector('.winner1').style.display = 'none';
	document.querySelector('.winner2').style.display = 'none';
	document.getElementById('player1-current-score').textContent = 0;
	document.getElementById('player2-current-score').textContent = 0;
	document.querySelector('.totalScore').textContent = '0';
	document.querySelector('.roll').textContent = '摇骰子';
	document.getElementById('player1-current-score').style = 'margin-top:55px';
	document.getElementById('player2-current-score').style = 'margin-top:55px';
	document.querySelector('.panel-1').classList.add('active');
	document.querySelector('.panel-2').classList.remove('active');


	}