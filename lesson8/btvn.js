// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
const n = Number(prompt('Mời bạn nhập số'));

// số nguyên tố là số chia hết cho 1 và chính nó

// 6 => 1,2,3,6 => ko phải snt 
// 2 => 1,2 => ko phải snt 

// let count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }

// if (count ===2) {
//     console.log(n + ' là số nguyên tố');
// } else{
//     console.log(n + ' không phải là số nguyên tố');
// }


// Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer.
// Nếu answer bằng correct → in ra “Đoán đúng”. Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
//  Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.


// const result = Math.floor(Math.random() * 10 * 2 + 1);
// let answer = Number (prompt('Nhập số mà bạn dư đoán'));
// for (let i = 1;)
// if (answer === result) {
//     alert('Đoán đúng');
    
    
// } else {
//     alert('Đoán sai');
// }