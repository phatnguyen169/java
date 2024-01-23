// const age = 19;
// if (age > 18) {
//     console.log('Bạn đã trưởng thành');
// }

// const score = 9;
// if ('0') {
//     console.log('học sinh giỏi')
// }

// falsy => gồm các giá trị <=> false 
// 0
// ''
// null
// undefined
// NaN (not a number)

// if(condition){
//     code if
// } else {
//     code else 
// }

// condition => true => code if sẽ được thực thi
// condition => flase => code else sẽ được thực thi

// const score = 9;
// if (score >= 8.0) {
//     console.log('học sinh giỏi');
// } else {
//     console.log('bạn chưa đủ điểm để đạ học sinh giỏi')
// }

// const score = 9;
// if (score >= 8.0) {
//     console.log('học sinh giỏi')
// } else if (score < 8.0 && score >= 6.5) {
//     console.log('học sinh khá');
// } else {
//     console.log('học sinh trung bình');
// }

// let day = 5     ;
// switch (day) {
//     case 2:
//         console.log('Monday');
//         break
//     case 3:
//         console.log('Tuesday');
//         break
//     case 4:
//         console.log('Wednesday');
//         break
//     case 5:
//         console.log('Thurday');
//         break
//     case 6:
//         console.log('Friday');
//         break
//     case 7:
//         console.log('Satuday');
//         break
//     case 8:
//         console.log('Sunday');
//         break
//     default:
//         console.log('Not found');
//         break
// }

// prompt(message, initValue)
// let a = prompt('Mời bạn nhập giá trị a: ');
// a = Number(a);
// let b = prompt('Mời bạn nhập b:')
// b = Number(b);
// let sum;
// console.log('a+b: ', a+b);
// if(a + b >10){
//     sum=10
// }else {
//     sum= a+b;
// }
// // condition ? code true : code else
// let sum = a+b >10 ? 10 : a+b;
// console.log(sum)

// let age = 16;
// let message = age >= 18 ? 'Adult' : 'Minor';
// console.log(message);//nếu age >=18, sẽ in ra 'Adult' và ngược lại

//in ra màn hình các số từ 1-5
// for (let i = 1; i<=5; i++) {
//     console.log(i);
// }
//in màn hình các số từ -10->20
// for (let i = -10; i<=20;i++) {
//     console.log(i);
// }
//in các số chẵn từ -31-53
// for(let i =-31; i<=53;i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     }  
// }
//các số chia hết cho 3 từ 100 về 0
// for(let i =100; i>=0;i=i-1){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }
// let i =100;
// while (i>=0){
//     if(i%3 === 0){
//         console.log(i);
//     }
//     i--;
// }


//quizz2
// let i =-100
// while (i<=100){
//     if(i%9 === 0){
//         console.log(i);
//     }
//     i++;
// }

//Hãy dùng while để in ra dãy số từ 1 đến 200.
// let i=1
// while(i<=200){
//     console.log(i)
//     i++;
// }

// Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;
// for (let i=-10;i<=50;i++){
//     if(i%2 === 0){
//         sum = sum+i;
//     }
// }
// console.log(sum)

//Nhập vào 2 số 0 <= x < y <= 100. 
// Hãy tăng dần giá trị của x, 
// giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
let x;
let y;
for(; true;){
    x = Number(prompt('Nhập x'));
    y = Number(prompt('Nhập y'));
    if(x>=0 && x<y && y<=100){
        break;
    }
}
while(x<y){
    x = x+1;
    y = y-1;
    console.log('x: ',x);
    console.log('y: ',y);
}

// Vui lòng viết chương trình nhập vào một chuỗi s. 
// Nếu chuỗi có độ dài >= 8, thì trên bảng điều khiển màn hình “Chuỗi này ok”.
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
// const s = prompt('mời bạn nhập chuỗi')
// if (s.length >= 8){
//     console.log('Chuỗi này ok')
// }else {
//     console.log('chuỗi này ngắn quá')
// }

// Vui lòng viết chương trình nhập vào một số a.
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”.
// Nếu a >= 16 thì in ra “Có lợi thêm ít năm nữa”.
//  Ngược lại, trong ra “Còn quá nà trẻ”.
// const a = Number(prompt('Nhập số a'))
// if(a>=18){
//     console.log('Đủ 18 thì quẩy tiếp')
// }
// else if(a>=16){
//     console.log('Đợi thêm ít năm nữa')
// }
// else{
//     console.log('Còn quá nà trẻ')
// }


//In ra các số chia hết cho 2 và 3 từ 1 đến 300
// for(let i=1;i<=300;i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
//     if(i%3 === 0){
//         console.log(i)
//     }
// }

//Tính tổng các số trong đoạn [-30, 50]
// let sum = 0
// for (let i=-30;i<=50,i++;) {
//     if(i%2 ===0){
//         sum = sum+i
//     }
// }
// console.log(sum)

//Vui lòng nhập vào 1 chuỗi s và 1 số l.
//  Vui lòng thêm vào ký tự chuỗi cuối 'a'
//  cho đến khi chuỗi dài s >= l.

// let s = prompt('Nhập chuỗi s')
// let l = Number(prompt('Nhập l'))
// for(let i= s.length; i<=l;i++){
//     s = s+'a'
// }
// console.log(s);
// console.log(s.length);
// console.log(l)