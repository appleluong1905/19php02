var name = "A local newspaper in English that serves investors";
document.write(name);
console.log(name.length);

console.log(name.indexOf('n'));
console.log(name.indexOf('m'));

console.log(name.lastIndexOf('n'));
console.log(name.lastIndexOf('m'));

// cat tu vi tri, voi so ky tu se cat
console.log(name.substr(5, 7));

// cat tu vi tri den vi tri
console.log(name.substring(5, 7));

// thay the ky tu trong chuoi
console.log(name.replace('English', 'Viet Nam'));

// viet hoa chuoi ky tu
console.log(name.toUpperCase());

//viet thuong chuoi ky tu
console.log(name.toLowerCase());