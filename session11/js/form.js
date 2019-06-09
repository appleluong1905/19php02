function checkForm() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	if (name == '') {
		document.getElementById('errName').innerHTML = 'Please input your name';
	}
	if (password == '') {
		document.getElementById('errPassword').innerHTML = 'Please input your password';
	}
}