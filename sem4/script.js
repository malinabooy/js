
/**
 * const week = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
}
console.log(week[2]);

const user = {
    name: 'John',
    surname: 'Ka',
    age: 30
}
console.log(`${user.name} - ${user.surname} - ${user.age}`);

delete user.surname;
user.patronymic = prompt('Введите отчество:')
console.log(`${user.name} - ${user.surname} - ${user.patronymic} - ${user.age} `);
 */

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// const arr2 = [1, 2, 3, 4, 5, 6, 7]

// const resultObject = arr1.reduce((acc, curr, index) => {
//     acc[curr] = arr2[index];
//     return acc;
// }, {})

// const week = {};
// if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         week[arr1[i]] = arr2[i];

//     }
// } else {
//     console.log('Массивы не равны');
// }
// console.log(week);
// console.log(resultObject);

// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }
// for (const key in obj) {
//      obj[item] = obj[key] ** 2;    
// }
// console.log(obj);

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sumValue = 0;
// for (const key in obj) {
//     const subObj = obj[key];
//     for (const subKey in subObj) {
//         sumValue += subObj[subKey];
//     }
// }

// console.log(sumValue);


// const riddles = {
//     'Зимой и летом одним цветом': 'ёлка',
//     'На зелёной хрупкой ножке вырос шарик у дорожки': 'одуванчик'
// };

// function askQuestion() {
//     for (const key in riddles) {
//         console.log(riddles[key]);
//         let counter = 0;
//         let answer;

//         do {
//             answer = prompt(key);
//             if (riddles[key] !== answer) {
//                 counter++;
//                 console.log('Неправильно. Попробуй снова');
//             } else {
//                 console.log('Молодец! Правильно!');
//             }
//         } while (riddles[key] !== answer && counter !== 3);
//     }
// }
// askQuestion();

const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'ёлка',
    askQuestion() {
        let counter = 0;
        let userAnswer;
        do {
            userAnswer = prompt(this.question)
            userAnswer = userAnswer.toLocaleLowerCase();
            if (userAnswer === this.answer) {
                console.log('Молодец! Правильно!');
            } else {
                counter++;
                console.log('Вы проиграли');
            }
        } while (userAnswer !== this.answer && counter !== 3);
    }
};
riddles.askQuestion();