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
