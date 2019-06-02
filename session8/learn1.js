// alert("Hello 19PHP02");
document.getElementById('demo').innerHTML = '<h3>Hello world</h3>';
document.write('<h1>Hello document</h1>');
console.log('Hello test');

var x = 5;
x = x + 9;
console.log(x);

var varName;
var varName1 = 'PHP02';
var varName2, varName3;
var userName;

var x = 8;
var y = 9;
document.write(x + y);
document.write('<br>');
document.write(x - y);
document.write('<br>');
document.write(x * y);
document.write('<br>');
document.write(x / y);
document.write('<br>');
document.write(x % y);
document.write('<br>');


function nameFuntion() 
{
	document.write('My Function');
}

nameFuntion();
document.write('<br>');

function sumNumber(a = 4, b = 5)
{
	return a + b;
}
document.write(sumNumber(7, 8));

var c = sumNumber(5, 8);
console.log(c);

var d = sumNumber();
console.log(d);

//if else
//if (dieu kien) {
	// thuc hien cau lenh neu dieu kien dung
//}

//if (dieu kien) {
	// thuc hien cau lenh neu dieu kien dung
//} else {
	// thuc hien cau lenh neu dieu kien sai
//}

//if (dieu kien 1) {
	// thuc hien cau lenh neu dieu kien 1 dung
//} elseif (dieu kien 2) {
	// thuc hien cau lenh neu dieu kien 2 dung
//} else {
	// thuc hien cau lenh neu dieu kien 1 va dieu kien 2 sai
//}

// BT:
// 1. Cho truoc 1 so n, kiem tra so n la chan hay le?
// 2. Cho truoc 3 so a, b, c. Kiem tra so nao lon nhat trong 3 so?
document.write('<br>');


for (var i = 0; i < 10; i++) {
	document.write('Number ' + i + '<br>');
}

//BT:
// Cho 1 day so chay tu 0 den 100
// Kiem tra neu:
// So do chia het cho 3 thi in ra: "So n chia het cho 3"
// So do chia het cho 5 thi in ra: "So n chia het cho 5"
// So do chia het cho 15 thi in ra: "So n chia het cho 15" ma khong in 
// ra 2 dong tren "So n chia het cho 3", "So n chia het cho 5"

// Vi du:
// So 0 chia het cho 15
//..
// so 3 chia het cho 3
//...
// so 10 chia het cho 5
document.write('<br>');

var n = 5;
while (n < 10) {
	document.write('Number ' + n + '<br>');
	n++;
}

document.write('<br>');

var m = 5;
do {
	document.write('Number ' + m + '<br>');
	m++;
} while (m < 10);
// BT1: Bình có 27 quyển sách, Bình có số sách gấp 3 lần 
// số sách của Minh. Hỏi Bình phải chuyển cho 
// Minh bao nhiêu quyển sách để số sách của Bình 
// gấp đôi số sách của Minh?

var binhBook = 27;
var minhBook = binhBook/3;
var soLanChuyen = 0;
while (binhBook != minhBook*2) {
	binhBook--;
	minhBook++;
	soLanChuyen++;
}
document.write('So lan Binh chuyen sach cho Minh de...:' + soLanChuyen);

// BT2: Cho ban 2000 vnđ đi mua kẹo .Biết :
// 1 viên kẹo giá 200 vnđ.
// cứ 2 vỏ kẹo đổi được 1 viên.
// Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?
var money = 2000;
var candy = 0;
var candyVo = 0;
while (money > 0) {
	money -= 200; // money = money - 200
	candy++;
	candyVo++;
	// doi vo keo
	while (candyVo >= 2) {
		candyVo -= 2; // candyVo = candyVo - 2;
		candy++; // candy = candy + 1;
		candyVo++;
	}
}

document.write('<br>');
document.write('So keo mua duoc la...:' + candy);