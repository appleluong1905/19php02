function checkForm() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var other = document.getElementById('other').checked;
	if (name == '') {
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errPassword').innerHTML = 'Please input your password';
	}else {
		document.getElementById('errPassword').innerHTML = '';
	}
	if (male || female || other) {
		document.getElementById('errGender').innerHTML = '';
	}else {
		document.getElementById('errGender').innerHTML = 'Please input your password';
	}
}
// 1. Tạo form đăng ký gồm:
// - Tên (input text)
// - Email (input text)
// - Gioi tính (input radio)
// - Ngày sinh (input date)
// - Quên quán ((input select option)
// 2. Validate các trường không được để trống
// 3. Nếu các trường validate OK thì thông báo đã đăng ký thành công

// 1. Taọ form tính tiền điện gồm:
// Họ tên, số điện đầu kỳ, số điện cuối kỳ, ngày đầu kỳ, ngày cuối kỳ
// 2. Validate các trường nhập không được để trống
// 3. Số điện cuối kỳ phải >= số diện đầu kỳ, ngày cuối kỳ phải lớn hơn
//  hoặc bằng ngày đầu ky
// 4. Tính tiền điện với: 100 số đầu tiên tính giá 1.500 VND/số; 200 
// số tiếp theo tính 2.000 VND/số; còn lại tính 3.500 VND/số
// 5. In ra màn hình phiếu tính tiền điện cơ bản: Họ tên...Tính điện
//  từ ngày...đến ngày...sử dụng...số với số tiền là:....