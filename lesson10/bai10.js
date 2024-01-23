// // tìm kiếm phần tử theo class
// console.log(document.getElementsByClassName('heading'))

// // tìm kiếm phần tử theo id
// console.log(document.getElementById)

// // tìm kiếm phần tử theo tên thẻ
// console.log(document.getElementsByTagName)

// tìm kiếm kết hợp
// console.log(document.querySelector('#paragraph.paragraph'));
// console.log(document.querySelectorAll('#paragraph.paragraph'))

// document.getElementById('tagA').href = 'https://youtube.com'

// // thêm <h2> vào <body> có id="sub-title", nội dung: "HI THERE"
// let $subTitle = document.createElement('h2')
// $subTitle.setAttribute('id', 'sub-title');
// $subTitle.innerHTML = 'HI THERE';

// document.body.appendChild($subTitle);

// xóa phần tử #my
// const listTagLi = document.getElementsByClassName('favorite-list-item');
// // listTagLi.innerText = 'I love this thing';
// for(let tagLi of listTagLi) {
//     tagLi.innerText = 'I love this thing';
//     tagLi.style.color = 'red';
// }

// let input_t = prompt("Thêm vào list");
// let newli = document.createElement("li");
// newli.innerText = input_t;
// document.getElementById("favorite-list").append(newli);
// function sayhi() {
//     alert('Hi friend');
// }
// document.getElementById('btn').onclick = sayHi;

document.getElementById('btn').onclick = function () {
    console.log('addEvenListener1');

}
