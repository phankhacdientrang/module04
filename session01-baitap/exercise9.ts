function removeDuplicates(input: string): string {
    // Khởi tạo một object để đếm số lần xuất hiện của mỗi ký tự
    let charCount: { [key: string]: number } = {};

    // Khởi tạo một biến để lưu trữ kết quả sau khi loại bỏ các ký tự trùng lặp
    let result = "";

    // Duyệt qua từng ký tự trong chuỗi input và đếm số lần xuất hiện
    for (let char of input) {
        charCount[char] = (charCount[char] || 0) + 1    ;
    }

    // Duyệt qua từng ký tự trong chuỗi input và thêm vào kết quả nếu số lần xuất hiện là 1
    for (let char of input) {
        if (charCount[char] === 1) {
            result += char;
        }
    }

    return result;
}

// Test với các input đã cho
console.log(removeDuplicates("banana")); // Output: "b"
console.log(removeDuplicates("hello world")); // Output: "he wrd"
