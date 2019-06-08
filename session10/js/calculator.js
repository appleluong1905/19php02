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