// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива
// const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
// const shortNames = [];




// Напишите функцию, которая для каждого имени в массиве
// // выведет в консоль строку 
// // Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];

for(var i = 0; i < names.length; i++)
  console.log('Hello ' + names[i] + '.' + ' Your name is ' + names[i].length + ' characters long!');

  
// // напишите функцию которая примет объект в качестве аргумента
// // Функция должна вернуть одну строку
// // Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// // Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// // Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     popular: false,
//     mileage: 10000
// }


// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их





// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)


const numbers = [-20, 32, -3, 13, 18, -9, 1, 24];
let sum = 0;
for (var i = 0; i < numbers.length; i++){
  if (numbers[i] > 0){
    sum += numbers[i];
    console.log(sum);
  }
  if (numbers[i] <= 0) {
    console.log('Число : ' + numbers[i] + ' отрицательно.');
  }
}
