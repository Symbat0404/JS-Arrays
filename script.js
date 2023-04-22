// task1
// Вам дан массив: [4, 54, 49]. Сделайте из него массив,
// состоящий из квадратов этих чисел.

// const array = [4, 54, 49];
// const squaresArray = array.map((el) => {
//     return el ** 2;
// });

// console.log(squaresArray);

// task2 
// Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// 1 solution
// const negArrays = [3134, 4, -143, -245, -214];
// const getNegative = (array) => {
//     return array.filter(number => number < 0);
// }

// console.log(getNegative(negArrays));

// 2 solution
// const negArrays = [3134, 4, -143, -245, -214];
// const getNegativeArr = negArrays.filter((el) => {
//     return el < 0;
// })

// console.log(getNegativeArr);

// task3 
// Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// const array = [3, 51, 30, 54, 60];
// const evenArr = array.filter(number => {
//     return number % 2 === 0;
// });

// console.log(evenArr);

// task4  
// Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const array = ['Nicklaus','Johnathan','Sean','Blake' ];
// const nameArr = array.filter((el) => {
//     return el.length > 5;
// });

// console.log(nameArr);

// task5  
// Вам дан массив [-13, 96, -41, -28, 40].
// Посчитайте количество отрицательных чисел в этом массиве.

// const array = [-13, 96, -41, -28, 40];
// const quantityNegArr = array.filter((number) => {
//     return number < 0
// }).length;

// console.log(quantityNegArr);

// task6  
// Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// let arr = [3, 51, -30, -54, 60]
// let positiveNums = arr.filter((el) => {
//     return el>0
// });
// let sqrNums = positiveNums.map((el) => {
//     if (el>30) {
//         return Math.sqrt(el)
//     }
//     else {
//         return el
//     }
// });

// console.log(sqrNums);

// task8 
// Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. 
// Выведите длину каждой строки.

// const array = ['James', 'Mary', 'Frank'];
// const getLength = array.map((el) => {
//     return el.length
// });

// console.log(getLength);