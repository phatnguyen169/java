// const listNumber = [];

// console.log('listNumber: ', listNumber);
// const listName = ['1','2','3'];
// console.log('listName ', listName)
// const arr1 = new Array();
// console.log(arr1);
// const arr2 = new Array(1,2,4,5);
// console.log(arr2);
// const listNumber = [10, 20, 30, 40, 50];
// console.log(listNumber);
// listNumber[2] = 3;
// console.log(listNumber);

// for (let i=0; i<listNumber.length; i++){
//     console.log(listNumber[i]);
// }
// for (let number of listNumber) {
//     console.log(number);
// }
// console.log(listNumber); 

// Thêm
// listNumber.push(60);
// listNumber.push(70);
// listNumber.push(80);
// listNumber.push(60,70,80);

// listNumber.unshift(0);
// listNumber.unshift(-10);
// listNumber.unshift(-10,0)

// Xóa
// listNumber.pop();
// listNumber.pop();

// listNumber.shift();

// splice
// listNumber.splice(2, 2);

// listNumber.splice(3, 0, 31, 32)
// console.log(listNumber);

const numbers = [10, 4, -7, 9, 100, -21, 0, 33]
// tìm phần tử nhỏ nhất/ lớn nhất trong mảng
let min = numbers[0]
let max = numbers[0]
for ( let number of numbers) {
   if (number < min) {
       min = number;
   }
   if (number > max){
       max = number
   }
}
console.log('min ', min)
console.log('max ', max)

// tính tổng các phần tử trong mảng
let sum = 0;
for (let number of numbers) {
    sum = sum + number;
}
console.log(sum);

// tìm phần tử chia hết cho 3 trong mảng
for (let number of numbers) {
    if (number % 3 ===0) {
        console.log(number);
        break;
    }
}


// Khai báo 1 mảng gồm các số bất kỳ. 
// -Tính tích của các phần tử trong mảng đó.
let result = 1;
for (let number of numbers) {
    result = result * number;
}
console.log(result)
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần

