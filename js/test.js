//==================== If =============================
/*var isMale = false;
if (isMale) {

	document.write('he is a man');
}else {

	document.write('she is a woman');
}*/

/*if (23 == '23'){
//==會將23轉換成字符串，會對比成相同的答案
//===將不會轉換
	document.write('equal');
}else{
	document.write('not euqal');
}
//&& 2個條件都要成立否則else
var number = 23;
if(number >20 && number <30 ){

	console.log(number);
}else{


}*/

// || 只要成立其中1個條件
/*var number = 32;
if (number < 18 || number >65){

	document.write(number +'歲容易感冒需注射預防針')
}else{

	document.write(number +'歲不容易感冒')
}

if(!number){
	console.log('真');

}else{

	console.log('假');
}
*/
//===================== switch ==========================


/*var newCase = 'case3'

switch (newCase) {

	case 'case1':
	console.log('this is case1.');
	break;

	case 'case2':
	console.log('this is case2.');
	break;

	case 'case3':
	console.log('this is case3.');
	break;
	default:console.log('this is other case.');

}
*/

//===================== function ==========================

/*function myFirstFunction(){

	console.log('This is myFunction.');
}

myFirstFunction();

function sum(a,b){

	c = a * b;
	console.log(c);                                                                                                                                                                                                                                                                                                                                                                                                                         
}

sum(4,5);
sum(3,9);

*/

/*function returnFunction(a){
	var b = a + 5 ;
	return b;
}

var x = returnFunction(3);
console.log(x);*/

//===================== 變量 ==========================

/*var name = 'Jimmy';
var age = 32;
document.write(name +"是" + age + "歲");
age = 'thirty two';
console.log(name +"是" + age + "歲")
*/

//======================= for Each=====================
/*var array = [4,9,16,25,36,49];
array.forEach(myFunction);

function myFunction(item,index){

	console.log('index['+ index + ']: '+ item);

}

//======================== map ============================
var newarray = array.map(function(item){
			//獲取返回值的平方根
		return Math.sqrt(item) ;


});
	console.log(newarray);
	console.log(array);
*/
//======================= for 循環=============================
/*var array = [2,5,11,26,45,17];
for (var i = 0 ; i < array.length; i++) {
	 var c = (array[i] * 2 )
	 	console.log('index['+ i +']:'+ array[i]);
		//console.log('index['+ i +']:'+ c);
		//console.log(c);

}
*/

//======================= slice() ==============================

/*var array = ['Banana','Orange','Lemon','Apple','Mango']	;
//結束的元素是不包括的，開始的元素有包括，1是有包括，3是不包括，所以是3之前的元素。
var newArray = array.slice(1,3);
console.log(newArray);*/


//======================= indexOf() ==============================
//獲取已知元素的具體的位置,Of 的O需大寫
/*var array = ['Banana','Orange','Lemon','Apple','Mango'];
var index = array.indexOf('Lemon');
console.log(index);*/

/*var names = ['Joe','Mary','John','Jimmy'];

names[0] = 'Jacky'
console.log(names);
//從最後增加元素tom
names.push('Tom');
//從前面增加元素bill
names.unshift('Bill');
//從前面刪除元素
names.shift();
//從後面刪除元素
names.pop();

console.log(names.indexOf('John'));
console.log(names);*/

//======================= Object ==============================

/*var Jimmy = {
	name:'Jimmy',
	age: 34,
	job:'engineer'
}

Jimmy.age = 43;
Jimmy['job']= 'teacher';
console.log(Jimmy);

var Erica = new Object();
Erica.name = 'Erica';
Erica.age = 22;
Erica.job = 'student';

console.log(Erica);
*/
//======================= Object function() ==============================

/*var Jimmy = {
	name:'Jimmy',
	age: 34,
	job:'engineer',
	family:['Tom','Kid','Bob'],
	calculate: function yearofbirth(myAge){
		return 2018 - myAge;
	}
}
console.log(Jimmy.family[1]);
console.log(Jimmy.calculate(37));
*/
//======================= This method =========================

/*var Jimmy = {
	name:'Jimmy',
	age: 34,
	job:'engineer',
	family:['Tom','Kid','Bob'],
	calculate: function yearofbirth(){
		return 2018 - this.age;
	}

}

var yearofbirth = Jimmy.calculate();
//新增1個yearofbirth:1984 元素 在Jimmy裡面
Jimmy.yearofbirth = yearofbirth;

console.log(Jimmy);
*/

/*var Jimmy = {
	name:'Jimmy',
	age: 34,
	job:'engineer',
	family:['Tom','Kid','Bob'],
	calculate: function yearofbirth(){
		this.yearofbirth = 2018 - this.age;
	}

}

Jimmy.calculate();
console.log(Jimmy);

var Tom = {
	name:'Tom',
	age: 24,
	job:'engineer',
	family:['Tom','Kid','Bob'],
	calculate: function yearofbirth(){
		this.yearofbirth = 2018 - this.age;
	}

}
Tom.calculate();
console.log(Tom);*/


//======================= For 循環 =========================


//按順序輸出
/*var names = ['John','Tommy','Joe','Terry','Jacky'];

for (i = 0; i <= names.length - 1; i ++) {

	console.log(names[i]);
}
*/

/*//倒序輸出

var names = ['John','Tommy','Joe','Terry','Jacky'];

for (i = names.length -1 ; i >=0 ;i-- ) {

	console.log(names[i]);
}*/

//============================================================
document.querySelector('.overfat').style.display = 'none';
document.querySelector('.little-fat').style.display = 'none';
function myFunction(){
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;				
	var bmi = (weight / (height * height) * 10000);
	//console.log(bmi);
	//return bmi;
	//var bmi = 29;
	if (bmi >= 18.5 && bmi < 24 ){
	console.log('體重正常');
	document.getElementById('result').innerHTML = '體重正常';
}else if ( bmi < 18.5 ){
	console.log('體重過輕');
	document.getElementById('result').innerHTML = '體重過輕';
}else if ( bmi >= 27 && bmi <= 30){
	console.log('輕度肥胖');
	document.getElementById('result').innerHTML = '輕度肥胖';
}else if (bmi > 30 && bmi <= 35){
	console.log('中度肥胖');
	document.getElementById('result').innerHTML = '中度肥胖';
}else {
	console.log('重度肥胖');
	document.getElementById('result').innerHTML = '重度肥胖';
}

console.log(bmi);

};

//myFunction();
/*var Bmi = myFunction();

if (bmi >= 18.5 && bmi < 24 ){
	console.log('體重正常');
}else if ( bmi < 18.5 ){
	console.log('體重過輕');
}else{
	console.log('體重過重');
}

console.log(bmi);*/