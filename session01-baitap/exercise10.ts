function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số đầu tiên không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ";
    }
    return Number(a) + Number(b);
}

function subtract(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số đầu tiên không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ";
    }
    return Number(a) - Number(b);
}

function multiply(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số đầu tiên không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ";
    }
    return Number(a) * Number(b);
}

function divide(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số đầu tiên không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ";
    }
    if (Number(b) === 0) {
        return "Không thể chia cho 0";
    }
    return Number(a) / Number(b);
}

// Test với các input đã cho
console.log("5 + 3 =", add(5, 3)); // Output: 8
console.log("'5' - 3 =", subtract('5', 3)); // Output: 2
console.log("5 * '3' =", multiply(5, '3')); // Output: 15
console.log("10 / '2' =", divide(10, '2')); // Output: 5
console.log("10 / 'abc' =", divide(10, 'abc')); // Output: Tham số thứ hai không hợp lệ
console.log("10 / 0 =", divide(10, 0)); // Output: Không thể chia cho 0
