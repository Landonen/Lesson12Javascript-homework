// ФУНКЦИИ
// ФУНКЦИИ
// ФУНКЦИИ
// ФУНКЦИИ
// ФУНКЦИИ
// ФУНКЦИИ

// let a = 5, b = 10;

// function sum(a, b) {
//     const result = a + b;
//     console.log(result);
// }

// const sayHello = function () {
//     console.log('Hello world!');
// }

// sayHello();

// const sayGoodBye =  () => console.log('Good Bye!');
// sayGoodBye(); // ----------------- () - признак вызова функции

// const sayGoodBye = name => {console.log('Good bye ' + name + ' !');}
// sayGoodBye('Artjom')
// sum (32, 424);
// sum (a, b);
// sum (a ** 2, b ** 3);


// let a;
// a = x + y;
// console.log(a);

// x = 3, y = 7;
// a = x + y;
// console.log(a);

//---------------------------------------------------------------

// function sample(x, y){
//     let c;
//     x = x + 1;
//     c = x + y;
//     // console.log(c);
//     return c;
// }

// let x = sample(a, b);
// console.log(x);


// sample(5, 2);
// console.log(sample(5, 2));
// console.log(sample(5,2), 'two');


// ----------------------------------------------------------------Площадь треугольника по 3ём сторонам

// function triangleArea(sideA, sideB, sideC) {
//     let halfPerimeter = (sideA + sideB + sideC) / 2;
//     let area = (halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC)) ** 0.5;
//     return area;
// }

// console.log(triangleArea(3, 4, 5));

// -----------------------------------------------------------------

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 0
// }

// function driveCar(car) { // функция увеличивающая пробег
//     newCar = JSON.parse(JSON.stringify(car))
//     newCar.mileage += 100;
//     return newCar
//     // car.mileage += 100; // берём параметр из объекта и увеличиваем расстояние на 100, пример выше желателен, можно вернуть оригинал
// }
// newCar = driveCar(myCar);
// console.log(myCar.mileage);
// driveCar(myCar);
// console.log(myCar.mileage);
// driveCar(myCar);
// console.log(myCar.mileage);
// driveCar(myCar);


// ----------------------------------- ВТОРОЙ ВАРИАНТ:
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 0,
//     driveCar: function () {
//         myCar.mileage += 100;
//     }
// }

// myCar.driveCar();
// console.log(myCar.mileage);


//------------------------------------ CALL BACK FUNCTION

// function wrapper(f) {
//     console.log('Starting!');
//     f(); // вызывает функцию описаную ниже
//     console.log('Ending!');
// }

// function sayHello() {
//     console.log('Hello world!');
// }

// wrapper(sayHello);


//  ----------------------------------- 2ой выриант - SET TIMEOUT

// function sayHello() {
//     console.log('Hello world!');
// }

// setTimeout(sayHello, 5000) // 5000 ms = 5 sec


// ------------------------------------ ОБЛАСТЬ ВИДИМОСТИ В ДЖАВА - ГЛОБАЛЬНАЯ, ЛОКАЛЬНАЯ

// let a = 10, b = 20,  c = 30;

// function localVisibilityArea() {
//     let a = 1, b = 2, c = 3;
//     return [a, b, c];
// }

// console.log(localVisibilityArea()); // [ 1, 2, 3 ]
// console.log([a, b, c]); // [ 10, 20, 30 ]



//  ----------------------------------- ОПЕРАТОРЫ СРАВНЕНИЯ ( if , else is, else)

// let x = 10; // если значение 0 - false, больше 0, true

// if (x > 10) {                       // х конвертируется в булеан
//     console.log('Bigger than 10');
// } else if (x < 10) {
//     console.log('Smaller than 10');
// } else {                           // выполняется когда все условия перечисленные выше провалились!!!
//     console.log('X must be 10');
// }

// ------------------------

// let x = 5; 

// if (x < 10) {
//     console.log('Step one');
// } else if (x < 20) {
//     console.log('Step two');
// } else if (x < 30) {
//     console.log('Step three');
// } else {
//     console.log('ELSE statement');
// }

// console.log('GOOD BYE');   // ЕСЛИ ОДНО ИЗ УСЛОВИЙ ПРАВИЛЬНО, ТО ДРУГИЕ ФУНКЦИЯ НЕ ПРОВЕРЯЕТ


// ----------------------------------

// let y = '[1, 2, 3]'; // ситуация где проверяется является ли y массивом

// if (typeof y === 'object') { // выясняется тип данных через TYPEOF
//     y.forEach(num => console.log(num ** 2));
// } else {
//     console.log('Y is not an object!');
// }

// ------------------------------- ПРОВЕЯЕМ ЧЁТНОЕ ИЛИ НЕЧЁТНОЕ

// let a = 15;
// if (a % 2 === 0) {
//     console.log('Even');
// } else {
//     console.log('Odd');
// }


//  ------------------------------ ЕЩЁ пример чтобы все условия проверялись!
// ------------- КАЖДЫЙ НОВЫЙ IF ПРОВЕРЯЕТ СВОЮ КОНСТРУКЦИЮ
// let x = 10;
// if (x > 0) {
//     console.log('X is greater than 0');
// }
// if (x > 9) {
//     console.log('X is greater than 9');
// }


// -------------------------------- ПРИМЕР С ИСИКУКОДОМ


// let isikukood = '3940333710'; // строка, т.к. понятно сколько символов

// if (isikukood.length === 11) {
//     console.log('ID length is correct');
// } else if (isikukood.length > 11) {
//     console.log('ID length is longer than supposed to be');
// } else if (isikukood.length < 11) {
//     console.log('ID length is shorter than supposed to be');
// }

// ---------------- ВАРИАНТ 2

// if (isikukood.length === 11) {
//     console.log('ID length is correct');
// } else {
//     if(isikukood.length > 11) {
//     console.log('ID length is longer than supposed to be');
//     } else {
//         console.log('ID length is shorter than supposed to be')
//     }
//         }
    

// --------------------------------------------- ОПЕРАТОР И И ИЛИ, && - > И, || - ИЛИ

// let x = 4;
// let y = 10;

// if (x > 0 && x < 10 && y === 10) {
//     console.log('OK');
// }

// if ( x > 0 || x < 5) {
//     console.log('OK AGAIN');
// }

const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];

names.forEach(persona =>{
    console.log('Hello ' + persona[0] + '.' + ' Your name is ' + persona[0] + ' characters long!');
})


let arr = ["John", "Mike", "Andry", "Shenon"];

arr.forEach((item, index) => {
    // item - элемент массива на текущей итерации
    // index - порядковый номер элемента в массиве
    console.log(`${index}: ${item}`);
})