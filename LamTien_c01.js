// BAI1
// console.log("Xin chào, mình là Lâm Tiến");
// console.log("Năm sinh 1998");
// console.log("Cung hoàng đạo: Bạch Dương");

// BAI2
// let a = prompt("Nhap so a:");
// let b = prompt("Nhap so b:");
// let c = prompt("Nhap so c:");
// console.log("ketqua", (a*a*b*b)/c);

// BAI3
// const Pi = 3.14; 
// let r = prompt("Nhap ban kinh hinh tron:");
// let S = r*r*Pi;
// let P = 2*r*Pi;
// console.log("Dien tich hinh tron la", S);
// console.log("Chu vi hinh tron la", P);

// BAI4
// let x = prompt("Số lượng:");
// let y = prompt("Đơn giá:");
// let tien = x * y;
// let tax = tien * 0.1;
// console.log("So tien can thanh toan", tien);
// console.log("VAT", tax);

// BAI5
// let bienSo = Number(prompt("Nhập biển số xe"));
// let a = bienSo % 10;
// let x = Math.floor(bienSo/10);
// let b = x % 10;
// let y = Math.floor(x/10);
// let c = y % 10;
// let z = Math.floor(y/10);
// let d = z % 10;
// let j = Math.floor (z/10);
// let e = j % 10;
// console.log("Tổng nút biển số xe của bạn là:", a+b+c+d+e);

// BAI6
// let soDao = Number(prompt("Nhập số bạn muốn"));
// let a = soDao % 10;
// let x = Math.floor(soDao/10);
// let b = x % 10;
// let y = Math.floor(x/10);
// let c = y % 10;
// let z = Math.floor(y/10);
// let d = z % 10;
// let j = Math.floor (z/10);
// let e = j % 10;
// console.log("Số đảo bạn muốn tìm là:", a,b,c,d,e);

// BAI7
let x = prompt("Nhập số giây");
let gio = Math.floor(x/3600);
let phut = Math.floor((x-(gio*3600))/60);
let giay = x-(gio*3600)-(phut*60);
console.log(gio, "Giờ", phut, "Phút", giay, "Giây");


// BAI8
// let a = prompt("Nhập toạ độ x điểm A:");
// let b = prompt("Nhập toạ độ y điểm A:");
// let c = prompt("Nhập toạ độ x điểm B:");
// let d = prompt("Nhập toạ độ y điểm B:");
// let kc = Math.sqrt((c-a)*(c-a)+(d-b)*(d-b));
// console.log("Khoảng cách 2 điểm A và B là", kc);

// BAI10
// let x = prompt("Nhập giá trị cho x:");
// let y = prompt("Nhập giá trị cho y:");
// let S = (Math.sqrt(x)+Math.abs(x))/(Math.sqrt(Math.pow(x,y)));
// console.log("Giá trị cần tìm S là", S);