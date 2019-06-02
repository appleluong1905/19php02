// BT3: Ở trung tâm giải trí Euroland có chiếc máy tự động có thể thực hiện 
// được hai loại giao dịch sau:
// 1) Bỏ vào 2 euro sẽ nhận được 3 USD và được tặng thêm 1 viên kẹo.
// 2) Bỏ vào 5 USD sẽ nhận được 3 euro và được tặng thêm 1 viên kẹo.
// Khi Buratino đến nghịch máy đổi tiền, cậu ta chỉ có toàn USD. 
// Khi cậu ta rời khỏi đó thì tiền đô bị hao hụt đi, không có thêm tiền euro 
// nhưng có được 50 viên kẹo.
// Hỏi Buratino đã tốn bao nhiêu USD để có được món quà 50 viên kẹo đó?

var keo = 0;
var dollar = 0;
var euro = 0;
while (keo < 50) {
	dollar-=5;
	euro+=3;
	keo++;
	while (euro > 0) {
		euro-=2;
		dollar+=3;
		keo++;
	}
}
document.write("So dollar ton de mua 50 keo la: " + dollar);

// BT4: Dũng có 50 viên bi gồm 2 loại: bi xanh và bi đỏ. 
// Biết rằng nếu lấy 2/5 số bi xanh cộng với 3/4 số bi đỏ thì được 27 viên bi. 
// Hỏi mỗi loại có bao nhiêu viên bi?
document.write("<br>");
// var biTotal = 50;
// var biXanh = 0;
// var biDo = 0;
// while (biXanh*2/5 + biDo*3/4 != 27) {
// 	biXanh++;
// 	biDo++;
// }
// console.log(biXanh);
// console.log(biDo);

// BT6: Một người đầu tư 2.000.000 VND, với lợi nhuận 10%/ngày
// Hỏi sau 30 ngày người đó có bao nhiêu tiền?
var soTienGui = 10000000;
var laiSuat = 0.1;
var tienThuDuoc = 0;
for (var i = 1; i <= 30; i++) {
	tienThuDuoc = soTienGui + soTienGui*laiSuat;
	soTienGui = tienThuDuoc;
}

document.write("So tien thu duoc sau 30 ngay la: " + tienThuDuoc);
document.write("<br>");
// BT7: Một người đầu tư 2.000.000 VND, với lợi nhuận 10%/ngày. 
// Mỗi ngày người đó rút 50.000 VND làm từ thiện
// Hỏi sau 30 ngày người đó còn lại bao nhiêu tiền bao nhiêu tiền?
var soTienGui = 2000000;
var laiSuat = 0.1;
var tienThuDuoc = 0;
for (var i = 1; i <= 30; i++) {
	tienThuDuoc = soTienGui + soTienGui*laiSuat;
	soTienGui = tienThuDuoc - 100000;
}

document.write("So tien thu duoc sau 30 ngay la: " + tienThuDuoc);