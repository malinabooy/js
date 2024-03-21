/**
 * Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
 */
function determineParity() {
    for (let i = 0; i < 11; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        } else if (i % 2 !== 0) {
            console.log(`${i} - нечётное число`);
        } else {
            console.log(`${i} - чётное число`);
        }
    }
}

determineParity();


/**
 * Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
 */

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2); //(start, deleteCount)
console.log(`2 Задание [${arr}]`);


/** 
 * Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/ 

const randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(`3 Задание [${randomArr}]`);

//Сумма
let sumArr = 0;
for (let i = 0; i < randomArr.length; i++) {
    sumArr += Number(randomArr[i]);
}
console.log(`Сумма элементов ${sumArr}`);

//Минимальное число
let minNumber = Infinity;
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] < minNumber) {
        minNumber = randomArr[i];
    }
}
console.log(`Минимальное число в массиве ${minNumber}`);

/**
 * *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
 */

for (let i = 0; i < 21; i++) {
    console.log('x'.repeat(i), '\n');
}

