function changeContent(color, kichthuocChu) {
	document.getElementById('demo1').innerHTML = 'OK1';
	document.getElementById('demo2').innerHTML = 'OK2';
	document.getElementById('demo2').style.color = color;
	document.getElementById('demo2').style.fontSize = kichthuocChu;
}
/* <a href="#" onclick="changeContent('red', '25px')">Change more content</a> */
var biXanh = 1;
var biDo = 1;
while (2/5*biXanh + 3/4*biDo != 27) {
	biXanh++;
	biDo = 50 - biXanh;
}
console.log(biXanh);
console.log(biDo);

var biTotal = 120;
var biDo = 1/5*biTotal;
var biXanh = 30/100*biTotal;
var biVang = 1;
var biTrang = 1;
while (biTrang*3 != biVang*7) {
	biVang++;
	biTrang = biTotal - biVang - biDo - biXanh;
}

console.log(biTotal);
console.log(biDo);
console.log(biXanh);
console.log(biTrang);
console.log(biVang);


//
var dauTu = 5000000;
var loiNhuan = (6*8.5 - 4*10)/100;
var thuNhap = 0;
for (var i = 1; i < 30; i++) {
	thuNhap = dauTu + dauTu*loiNhuan;
	dauTu = thuNhap;
}

console.log(loiNhuan);
var ok;
ok = thuNhap.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
document.write('<br>Loi nhuan sau 30 ngay la: ' + ok);

