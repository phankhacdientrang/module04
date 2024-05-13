// Khai báo biến name, age, job và gán kiểu dữ liệu tương ứng
let name: string = "John";
let age: number = 30;
let job: string = "Developer";

// Xây dựng hàm nhận vào 3 tham số và in ra màn hình
function printDetails(name: string, age: number, job: string): void {
    // In thông tin trực tiếp ra màn hình
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
}

// Gọi hàm với các biến đã khai báo
printDetails(name, age, job);
