function changeImage(image, name, id) {
	document.getElementById('image').src = image;
	document.getElementById('name').innerHTML = name;
	// Xoa tat ca border
	document.getElementById('salah').style.border = "none";
	document.getElementById('girlxinh').style.border = "none";
	document.getElementById('kaka').style.border = "none";
	document.getElementById('messi').style.border = "none";
	// them border cho doi tuong cick
	document.getElementById(id).style.border = "5px solid blue";
}