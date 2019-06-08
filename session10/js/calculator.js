function inputMyData(data) {
	document.getElementById('result').innerHTML += data;
}
function delMyData() {
	document.getElementById('result').innerHTML = '';
}
function calMyData() {
	var myData = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = eval(myData);
}
function delData() {
	var myData = document.getElementById('result').innerHTML;
	var newMydata = myData.substring(0, myData.length - 1);
	document.getElementById('result').innerHTML = newMydata;
}