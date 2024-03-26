/**
 * Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
 */

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

/**
 * Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

 */

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author); // Выводим текст автора

post.comments.forEach(comment => {
    if (comment.userId === 10) {
        console.log(comment.rating.dislikes); // Выводим количество дизлайков комментария
    }
    if (comment.userId === 5) {
        console.log(comment.userId); // Выводим id пользователя второго комментария
        console.log(comment.text); // Выводим текст комментария
    }
});


/**
 * Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
 */

const product = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
console.log(product);
product.forEach(products => {
    console.log(products.price);
    product.price *= 0.85;
});
console.log(product);

/**
 * Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой,
после чего вывести отсортированный массив в консоль.
 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

products.sort((a, b) => a.price - b.price);
console.log(products);

/**
 * **Задание 5**
Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
```


Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
 */
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let resultArray = [];
if (en.length === ru.length) {
    resultArray = en.reduce((acc, curr, index) => {
        acc[curr] = ru[index];
        return acc;
    }, {})
} else {
    console.log('Массивы не равны');
}
console.log(resultArray);
