/**
 * Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
 */

// function cube() {
//     let inputNumber = prompt('Введите любое число');
//     if (!isNaN(inputNumber)) {
//         let result = Math.pow(inputNumber, 3);
//         //let result = inputNumber * inputNumber * inputNumber;
//         console.log(result);
//     } else {
//         console.log("Ошибка: введено недопустимое число!");
//     }
// }
// cube();


/**
 * Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

 */

// function checkTax() {
//     let inputSalary = prompt('Введите свою зарплату');
//     if (!isNaN(inputSalary)) {
//         let subtractionTax = inputSalary - (inputSalary * 0.13);
//         console.log(`Размер заработной платы за вычетом налогов равен ${subtractionTax}`);
//     } else {
//         console.log('Значение задано неверно. Повторите ввод');
//         checkTax();
//     }
// }
// checkTax();


/**
 * Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */

// function findMaxNumber(number1, number2, number3) {
//     let maxNumber = (number1 > number2) ? ((number1 > number3) ? number1 : number3) : ((number2 > number3) ? number2 : number3);
//     return maxNumber;
// }

// let num1 = parseFloat(prompt('Введите первое число:'));
// let num2 = parseFloat(prompt('Введите второе число:'));
// let num3 = parseFloat(prompt('Введите третье число:'));


// if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//     let max = findMaxNumber(num1, num2, num3);
//     console.log(`Максимальное число среди введенных: ${max}`);
// } else {
//     console.log('Ошибка: одно из введенных значений не является числом!');
// }


/**
 * Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять 
одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
проверки на NaN, Infinity делать не нужно.
 */

// Функция сложения
function sum(a, b) {
    return a + b;
}

// Функция разности
function difference(a, b) {
    if (a === b) {
        return 0;
    } else {
        return Math.max(a, b) - Math.min(a, b);
    }
}

// Функция умножения
function multiply(a, b) {
    return a * b;
}

// Функция деления
function divide(a, b) {
    if (b === 0) {
        console.log("Ошибка: на ноль делить нельзя!");
        return;
    } else {
        return a / b;
    }
}

// Примеры использования функций
console.log(sum(2, 6)); 
console.log(difference(6, 2)); 
console.log(multiply(2, 6)); 
console.log(divide(6, 2)); 