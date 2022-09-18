// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає функцію зворотного виклику
//greet(name) - колбек, який приймає ім'я і виводить в консоль
//рядок "Привіт <name>"
//Реалізуй перевірку, чи name не пустий рядок

// function greet(name) {
//   console.log(name);
// }
// function letMeSeeYourName(callback) {
//   const userName = prompt('Write Name');
//   callback(userName);
// }

// letMeSeeYourName(greet);

// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize('background-color') == 'backgroundColor';
// camelize('list-style-image') == 'listStyleImage';
// camelize('-webkit-transition') == 'WebkitTransition';
// function callback(elem, index) {
//   if (index !== 0) {
//     return elem[0].toUpperCase() + elem.slice(1);
//   } else {
//     return elem;
//   }
// }

// function camelize(str) {
//   return str.split('-').map(callback).join('');
// }

// console.log(camelize('background-color', callback));

// Напишіть дві функції
//makeProduct(назва, ціна, callback) - приймає
//імя і ціну товару, а також функцію callback.
//Функція створює об'єкт товару, додає йому унікальний
//ідентифікатор у властивості id і викликає зворотний виклик
//передаючи йому створений об’єкт.
//showProduct(product) - callback приймає об'єкт
//продукта і виводить його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('pc', 10000, showProduct);

// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeShef = function () {
//   const shefName = 'Den';
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');

// console.log(mango);

// const poly = makeShef('Poly');

// mango('apple pie');
// poly('apple pie');
// // makeDish('Mango', 'apple pie');
// // makeDish('Poly', 'muffins');

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка рахує та виводить в консоль кількість своїх викликів

// function makeCounter(counter) {
//   let value = 0;

//   return function () {
//     value += 1;
//     console.log(`counter ${counter}:`, value);
//   };
// }

// const counter = makeCounter(1);

// const counter2 = makeCounter(2);

// counter();
// counter();
// counter();

// counter2();
// counter2();
// counter2();

//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//   return (str) => {
//     return str === password;
//   };
// }

// const checkPassword = savePassword('qwerty');

// console.log(checkPassword('qwerty'));

// // Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// // Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// function each(array, callback) {
//   const newArray = [];
//   array.forEach((element) => {
//     newArray.push(callback(element));
//   });
//   return newArray;
// }

// function increment(elem) {
//   return elem * 2;
// }

// console.log(each([1, 2, 3], increment));

//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() перемножує збережені значення та повертає результат і враховується ділення на 0

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   min() {
//     return this.a - this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
//   div() {
//     return this.a / this.b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.sum());
// console.log(calculator.min());
// console.log(calculator.mult());
// console.log(calculator.div());

// const obj = {
//   a: 5,
//   b: 7,
// };

// obj.sum = calculator.sum;
// console.log(obj);

// console.log(obj.sum());

// Підрахувати кількість голосних у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.
// const vowelLetters = ['A', 'E', 'I', 'O', 'U', 'Y'];

// function countVowel(str) {
//   const newArray = str.toUpperCase().split('');
//   let count = 0;

//   newArray.forEach((element) => {
//     console.log(element);
//     if (vowelLetters.includes(element)) {
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(countVowel('Hello')); //2
// console.log(countVowel('Umbrella')); //3

// const navItemEl = document.querySelector('.nav__item');

// console.log(navItemEl);

// const navEl = document.querySelectorAll('.nav__item--link');

// console.log(navEl);

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'This is a Title :)';
// document.body.appendChild(titleEl);

// console.log(titleEl);
// console.log(document.body);

// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти,
// чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const product1 = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// };

// const product2 = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// };

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
// ];

// function addItemToBasket(product) {
//   const activeProduct = basketItems.find((item) => item.id === product.id);
//   if (activeProduct) {
//     basketItems = basketItems.map((item) => {
//       if (item.id === product.id) {
//         return {
//           ...item,
//           count: item.count + 1,
//         };
//       } else return item;
//     });
//   } else basketItems.push(product);
// }

// addItemToBasket(product1);
// addItemToBasket(product2);

// console.log(basketItems);

// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const url =
//   'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

// const obj = {};

// const link = new URL(url);
// // console.log(link);

// const search = link.search
//   .slice(1)
//   .split('&')
//   .reduce((query, item) => {
//     const [key, value] = item.split('=');
//     query[key] = value;
//     return query;
//   }, {});

// console.log(search);

// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// function totalVotes(arr) {
//   return arr.filter((item) => item.voted).length;
// }

// const voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ];

// console.log(totalVotes(voters)); // 7

// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)); // [1, 2, 3]

// function compact(params) {
//   return params.filter(Boolean);
// }

// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// const input = 'George Raymond Richard Martin';
// // Result
// // 'GRRM'
// function getFirstLetersName(params) {
//   console.log(
//     params
//       .split(' ')
//       .map((elem) => elem[0])
//       .join('')
//   );
// }

// getFirstLetersName(input);

// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = { name: 'Bruce', age: 25 };
// let jhon = { name: 'Jhon', age: 30 };
// let maria = { name: 'Maria', age: 28 };

// let arr = [bruce, jhon, maria];

// console.table(sortByAge(arr));

// // тепер: [bruce, maria, jhon]
// // alert(arr[0].name); // Bruce
// // alert(arr[1].name); // Maria
// // alert(arr[2].name); // Jhon
// console.table(arr);

// function sortByAge(params) {
//   const newArr = [...params];
//   return newArr.sort((prev, next) => prev.age - next.age);
// }

// Маючи набір усіх елементів вашого списку бажань, обчисліть, скільки коштуватиме,
// щоб просто купити все одразу

// function shoppingSpree(arr) {
//   // your code here
// }

// const wishlist = [
//   { title: 'Tesla Model S', price: 90000 },
//   { title: '4 carat diamond ring', price: 45000 },
//   { title: 'World tour', price: 25000 },
//   { title: 'Gold fidgit spinner', price: 2000 },
//   { title: 'A second Tesla Model S', price: 90000 },
// ];

// console.log(calcSumWishList(wishlist)); // 227005

// function calcSumWishList(params) {
//   return params.reduce((total, { price }) => (total += price), 0);
// }

// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

const input = 'Every developer likes to mix kubernetes and javascript';
// Result
// 'E3y d7r l3s to mix k8s and j8t'

function cutWords(params) {
  return params
    .split(' ')
    .map((word) => {
      const { length } = word;
      if (word.length < 4) {
        return word;
      } else {
        return `${word[0]}${length - 2}${word[length - 1]}`;
      }
    })
    .join(' ');
}

console.log(cutWords(input));
