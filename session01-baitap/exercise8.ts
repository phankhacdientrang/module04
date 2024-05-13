// Khai báo và gán giá trị cho 2 biến firstName và lastName
let firstName: string = "john";
let lastName: string = "doe";

// Hàm để viết hoa chữ cái đầu của một chuỗi
function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Kiểm tra và viết hoa chữ cái đầu của firstName và lastName (nếu cần)
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);

// Ghép hai chuỗi lại với dấu cách ở giữa và gán giá trị cho biến fullName
let fullName: string = firstName + " " + lastName;

// In giá trị của biến fullName ra màn hình để kiểm tra
console.log("Họ và tên đầy đủ:", fullName);
