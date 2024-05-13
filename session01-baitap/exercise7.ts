// Khai báo 3 biến num1, num2 và num3 với kiểu dữ liệu number
let num1: number = 10;
let num2: number = 5;
let num3: number;

// Thực hiện các phép tính cộng, trừ, nhân, chia với 2 biến num1 và num2
num3 = num1 + num2;
console.log("Tổng:", num3);

num3 = num1 - num2;
console.log("Hiệu:", num3);

num3 = num1 * num2;
console.log("Tích:", num3);

num3 = num1 / num2;
console.log("Thương:", num3);

// Thay đổi kiểu dữ liệu của biến num1 thành string
num1 = "Hello";

// Thay đổi kiểu dữ liệu của biến num2 thành boolean
num2 = true;

// Thực hiện lại các phép tính và kiểm tra kết quả
num3 = num1 + num2; // Thực hiện phép cộng với một chuỗi và một boolean
console.log("Kết quả sau khi thay đổi kiểu dữ liệu của biến num1 và num2:", num3);
