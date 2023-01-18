// Дан объект с налогами в виде дробного числа
// Используя forEach посчитайте зараплату после налогов
// Напоминаю что есть операторы +=, -=, *=, /=
// x = (x * 2) то же самое что и (x *= 2)
const taxes = {
    vat: 0.20,
    unemployement: 0.016,
    insurance: 0.008,
    pension: 0.002
}

let salary = 2000;
console.log(Object.values(taxes)); //[ 0.2, 0.016, 0.008, 0.002 ]
// --------------------- метод через значения из массива
// let deductions = 0;
// Object.values(taxes).forEach(tax => { // проходит по каждому ключу из массива функцией forEach!!!
//     deductions += salary * tax;
// })
// --------------------- метод чере ключи:
// deductions = 0;
// Object.keys(taxes).forEach(tax => { // проходит по каждому ключу из массива функцией forEach!!!
//     deductions += salary * taxes[tax];
// })

// console.log(salary - deductions);

// console.log(Object.keys(taxes)); // [ 'vat', 'unemployement', 'insurance', 'pension' ]
// console.log(Object.entries(taxes));
//[
//     [ 'vat', 0.2 ],
//     [ 'unemployement', 0.016 ],
//     [ 'insurance', 0.008 ],
//     [ 'pension', 0.002 ]
//   ]

// -------------------------------------- Up



// Для каждого человека в заданом массиве выведете строку
// Hello 'name' 'surname'! You are 'age' years old.
const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]]

people.forEach(person => {
    console.log('Hello ' + person[0] + ' ' + person[1] + '! You are ' + person[2] + ' years old.');
    console.log(`Hello ${person[0]} ${person[1]} ! You are ${person[2]} years 2 old.`);
})



// Задан список чисел и два пустых массива
// Зполните массив primeSquares квадратами чисел
// Так чтобы числа в массиве были в порядке возрастания
// А массив primeCubes кубами чисел
// Так чтобы числа в массиве были в порядке убывания
// У массива есть метод .sort()
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const primeSquares = [];
const primeCubes = [];

primes.forEach(num => {
    primeSquares.push(num ** 2);
    primeCubes.unshift(num ** 3) // unshift метод ставит автоматически по методу убывания
})

console.log(primeSquares);
console.log(primeCubes);

// -----------------------------------------Мой  метод -_- внизу

// primes.forEach(prime => {
//     primeSquares.push(prime ** 2)
// })
// console.log(primeSquares);

// primes.forEach(prime => {
//     primeCubes.push(prime ** 3)
// })

// console.log(primeCubes.sort(function(a, b){return b - a}));
