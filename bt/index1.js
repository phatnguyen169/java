//Viết một function xoá các phần từ trùng lặp trong một mảng các số:
// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]
// function removeDuplicates(arr) {
   
//     return arr.filter((item, index, arr) => arr.indexOf(item) === index);
//   }
  
//   const input = [1, 2, 3, 5, 4, 2, 6, 4];
//   const output = removeDuplicates(input);
//   console.log(output); 

//Bài 6: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
  const arr = [1,54,6,7];

const newArr = arr.map((item) => item + 5);

console.log(newArr); 