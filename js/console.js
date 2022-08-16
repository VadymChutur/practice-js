// const add = function add(a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// };

// const r1 = add(15, 25);
// console.log('r1: ', r1);

// function consoleMessage(message, start = 0, end = 10) {
//   for (let i = start; i < end; i += 1) {
//     console.log(i + ' ' + message);
//   }
// }

// console.log('befor');
// consoleMessage('Hello', 10, 100);
// console.log('after');

// function addNumbers(a = 0, b = 0) {
//   return a + b;
// }

// const total = addNumbers(2, 5);
// console.log(total);

// function add(a, b) {
//   // const result = a + b;
//   // if (result > 100) {
//   //   return result;
//   // } else {
//   //   return 'result < 100';
//   // }

//   const result = a + b;
//   return result > 100 ? result : 'result < 100'; //ternar operator
// }

// console.log(add(8, 16));

// function calcBMI(weight, height) {
//   let normalizeHeight = Number.parseFloat(height.replace(',', '.'));
//   let normalizeWeight = Number.parseFloat(weight.replace(',', '.'));
//   // const BMI = normalizeWeight / normalizeHeight ** 2;
//   const BMI = normalizeWeight / Math.pow(normalizeHeight, 2);
//   return BMI.toFixed(1);
// }

// const mangoBMI = calcBMI('136', '1.86');
// const polyBMI = calcBMI('56,2', '1.75');
// console.log(mangoBMI);
// console.log(polyBMI);

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(9, 5));

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(10, 25));

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'one is parameter not a number';
//   }
//   return a < b ? a : b;
// }

// console.log(min(5, 'n'));

// function getRectArea(dimensions) {
//   const dimensionsToArray = dimensions.split(' ');
//   console.log(dimensionsToArray[0]);
//   return Number(dimensionsToArray[0]) * Number(dimensionsToArray[1]);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('81 18'));

// function calcAverage(a, b) {
//   // console.log(a, b);
//   // console.log(arguments);
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total / arguments.length;
// }

// console.log(calcAverage(1, 3, 6));

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   total += cart[i];
//   // total = total + cart[i];
// }

// console.log('Total:', total);

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// // // for (let i = 0; i < numbers.length; i += 1) {
// // //   const number = numbers[i];
// // //   console.log(numbers[i]);
// // //   // const element = array[i];
// // //   if (number % 2 === 0) {
// // //     console.log('Chetnoe');
// // //     total += number;
// // //   }
// // // }

// // for (const number of numbers) {
// //   if (number % 2 === 0) {
// //     total += number;
// //   }
// // }
// // console.log('total:', total);

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }
// console.log('total:', total);

// const logins = ['mango', 'kiwast', 'poly', 'ajyx'];
// const loginToFind = 'poly';
// // let message = `User ${loginToFind} not found.`;

// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];

// //   console.log(`${login}===${loginToFind}:`, login === loginToFind);
// //   if (login === loginToFind) {
// //     message = `User ${loginToFind} found.`;
// //     break;
// //   }
// // }

// // for (const login of logins) {
// //   console.log('Login:', login);
// //   console.log(`${login}===${loginToFind}:`, login === loginToFind);
// //   if (login === loginToFind) {
// //     message = `User ${loginToFind} found.`;
// //     break;
// //   }
// // }
// // console.log(message);

// const a = 5 > 10 ? 'yes' : 'no';

// const message = logins.includes(loginToFind) ? 'true' : 'false';

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];

// // console.log(smallestNumber);

// for (const number of numbers) {
//   // console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let bigestNumber = numbers[0];

// // console.log(bigestNumber);

// for (const number of numbers) {
//   // console.log(number);

//   if (number > bigestNumber) {
//     bigestNumber = number;
//   }
// }
// console.log(bigestNumber);

// const freinds = ['vango', 'kiwi', 'poly', 'ajax'];
// // let string = '';

// // for (const freind of freinds) {
// //   string += freind + ',';
// // }

// --------------------------------------------------
// // string = string.slice(0, string.length - 1);
// // console.log(string);

// const string = freinds.join(', ');
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// // console.log(letters);

// for (const letter of letters) {
//   // console.log(letter);

//   // if (letter === letter.toLowerCase()) {
//   //   // console.log('This letter in lower case - ', letter);
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }

//   isEqal += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);

// --------------------------------------------------
// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);
// ---------------------------------------------------

// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// // const cardToRemove = 'card-3';
// // const index = cards.indexOf(cardToRemove);

// // cards.splice(index, 1);
// // console.log(cards);
// // console.table(cards);

// // const cardToInsert = 'card-6';
// // const index = cards.length;

// // cards.splice(index, 0, cardToInsert);
// // console.table(cards);

// const cardToUpdate = 'card-4';

// const index = cards.indexOf(cardToUpdate);
// cards.splice(index, 1, `${cardToUpdate} update`);
// console.table(cards);

// const add = function (a, b) {
//   console.log(a);
//   console.log(b);
//   const result = a * b;
//   console.log('a*b:', result);
//   console.log('start function');
//   return result;
// };

// const r1 = add(25, 87);
// console.log('r1:', r1);
// console.log(add(5, 1));
// add(15, 5);

// const fn = function (value) {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   if (value < 50) {
//     return '<50';
//   }
//   return '>50';
// };

// console.log(fn(20));
// console.log(fn(2100));

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([12, 22, 34]));
// console.log(calculateTotalPrice([15, 24, 34]));

//////////////////////////////////////////////////////////////

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems([1, 2, 3, 4, 5]);

// /////////////////////////////////////////////////////////////

// const logins = ['1234', 'qwerty', 'asdfgh'];

// // const findLogin = function (allLogins, loginToFind) {
// // const message = allLogins.includes(loginToFind) ? `User ${loginToFind} found` : `User ${loginToFind} not found`;
// // return message;
// // };

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? `User ${loginToFind} found` : `User ${loginToFind} not found`;
// };

// // const findLogin = function (allLogins, loginToFind) {
// //   for (const login of allLogins) {
// //     if (login === loginToFind) {
// //       return `User ${loginToFind} found`;
// //     }
// //   }
// //   return `User ${loginToFind} not found`;
// // };

// console.log(findLogin(logins, '1234'));
// console.log(findLogin(logins, 'qwerty'));
// console.log(findLogin(logins, 'asdfgh'));
// console.log(findLogin(logins, 'zxcv'));
///////////////////////////////////////////////////////////////////////////

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
//////////////////////////////////////////////////////////////////////////

// const filterNumbers = function (array, ...args) {
//   // console.log('array:', array);
//   // console.log('args:', args);
//   const unciqueElements = [];

//   for (const element of array) {
//     // console.log(args.includes(element));

//     if (args.includes(element)) {
//       unciqueElements.push(element);
//     }
//   }

//   return unciqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

//////////////////////////////////////////////////////////////////////////
// За допомогою циклу for додайте всі парні числа від min до max
// const max = 50;
// const min = 0;
// let total = 0;

// for (let i = 0; i < max; i += 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
//   console.log(total);
// }

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Привіт!"
// інакше виводити рядок "Невірний пароль!"

// const login = prompt();
// const loginAdmin = 'Admin';
// const password = 'Я головний';

// if (login === loginAdmin) {
//   const password = prompt();

//   if (password === password) {
//     console.log('Hello');
//   } else {
//     console.log('Невірний пароль!');
//   }
//   console.log('Невірний пароль!');
// } else if (login === null) {
//   console.log('Скасовано');
// } else {
//   console.log('Я вас не знаю');
// }

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let answerPromt = null;
// let total = 0;

// do {
//   answerPromt = prompt('Введіть число');
//   if (Number(answerPromt)) {
//     total += Number(answerPromt);
//   } else if (alert(NaN)) {
//     alert(`Загальна сума введених чисел дорівнює ${total}.`);
//   }
// } while (answerPromt);

// console.log(`Загальна сума введених чисел дорівнює ${total}.`);

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// while (true) {
//   const userAnswerPromt = prompt('Введіть число > 100');
//   if (Number(userAnswerPromt) > 100 || userAnswerPromt === null) {
//     break;
//   }
// }

// do {
//   const userAnswerPromt = prompt('Введіть число > 100');
//   if (Number(userAnswerPromt) > 100 || userAnswerPromt === null) {
//     break;
//   }
// } while (true);

// 1У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 61;

// if (min <= 15 && min >= 0) {
//   console.log('1 quarter');
// } else if (min <= 30 && min > 15) {
//   console.log('2 quarter');
// } else if (min <= 45 && min > 30) {
//   console.log('3 quarter');
// } else if (min <= 60 && min > 45) {
//   console.log('4 quarter');
// } else {
//   console.log('not a quarter');
// }

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const autor = prompt('пошук автора мови програмування');
// const autorToLowerCase = autor.toLocaleUpperCase;

// switch (autor) {
//   case 'php':
//     console.log('PHP Расмус Лердорф');
//     break;

//   case 'c#':
//     console.log('C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота');
//     break;

//   case 'swift':
//     console.log('Swift Кріс Латтнер');
//     break;
//   case 'js':
//     console.log('JS Брендан Ейх');
//     break;
//   case 'java':
//     console.log('Java Джеймс Гослінг');
//     break;
//   case 'python':
//     console.log('Python Гвідо ван Россум');
//     break;
//   default:
//     console.log('Not a programing langwige');
// }

// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 800;
// const month = 6;
// let taxes = 0;
// let purSalary = 0;

// for (let i = 0; i < month; i += 1) {
//   taxes += salary * 0.05;
//   purSalary += salary * 0.95;
// }

// console.log('Taxes: ', taxes);
// console.log('Pur Salary ', purSalary);

// Перепишіть конструкцію if за допомогою умовного оператора '?':

// const a = 1;
// const b = 2;
// let result;
// //
// // if (a + b < 4) {
// //   result = 'Many';
// // } else {
// //   result = 'Much';
// // }

// result = a + b < 4 ? console.log('Many') : console.log('Much');

// Поверніть ступінь числа для наданого  значення за допомогою циклу for.
//
// const number = 3;
// const step = 4;
// let result = 1;

// for (let i = 0; i < step; i += 1) {
//   result *= number;
// }
// console.log(result);

//Поверніть кількість цифр у заданому числі за допомогою циклу while.

// const number = 8367; //4
// let numberLength = 0;
// while (true) {
//   numberLength = String(number).length;
//   break;
// }
// console.log(numberLength);

// let number = 8367; //4
// let numberLength = 0;
// while (number != 0) {
//   number = Math.floor(number / 10);
//   numberLength += 1;
//   console.log(numberLength);
//   console.log(number);
// }
// // console.log(numberLength);

////////////////////////////////////////////////////////////////////////

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

// const foo1 = function () {
//   const min = 1;
//   const max = 8;
//   let total = [];

//   for (let i = min; i <= max; i += 1) {
//     total.push(i);

//     console.log(total);
//   }
// };

// foo1();

// const foo2 = function () {
//   for (let i = 1; i <= 9; i += 1) {
//     for (let n = 1; n < i; n += 1) {
//       console.log(n);
//     }
//     console.log(' ');
//   }
// };

// console.log(foo2());

////////////////////////////////////////////////////////

// Натуральне число більше 1 називається простим, якщо воно ні на що не ділиться, крім себе і 1.
//
// Інакше кажучи, n > 1 – просте, якщо його розподілі на будь-яке число крім 1 і є залишок.
//
//   Наприклад, 5 це просте число, воно не може бути розділене без залишку на 2, 3 та 4.
//
// Напишіть код, який виводить усі прості числа з інтервалу від 2 до n.
//
//   Для n = 10 результат має бути 2,3,5,7.
//
// P.S. Код також має бути легко модифікований для будь-яких інших інтервалів.

// const n = 10;
// let total = [];

// //hernya povna hernya
// // for (let i = 0; i < n; i += 1) {
// //   if (i > 1 && i !== 4 && i !== 6 && i < 8) {
// //     console.log(total.push(i));
// //     console.log(total);
// //   }
// // }

// // i > 1 && i % 2 !== 0 && i / 1 === i && i / i === 1;

// for (let i = 0; i < n; i += 1) {
//   if (i > 1 && (i + i) % 2 === 0 && (i - 1) % i === 1) {
//     console.log(total.push(i));
//   } else if (i > 1 && i % 2 !== 0 && i / 1 === i && i / i === 1 && i / 2 !== 0) {
//     console.log(total.push(i));
//   }
//   console.log(total);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var output = '';
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    output += ' ' + i * j;
    if (i * j < 10) {
      output += ' ';
    }
  }
  console.log(output);
  output = '';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе до консолі
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// 2. Використовуючи конструкцію if..else, напишіть код, який отримує число через prompt, а потім виводить в alert:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.
// Передбачається, що користувач вводить лише цифри.

// function calculateEngravingPrice(message = 'JavaScript is in my blood', pricePerWord = 10) {
//   // Change code below this line
//   let messageMath = message.split(' ');
//   let messageLegth = messageMath.length;
//   let price = messageLegth * pricePerWord;
//   return price;

//   // Change code above this line
// }

// calculateEngravingPrice();

// console.log(calculateEngravingPrice());

// function slugify(title = 'Arrays for begginers') {
//   // Change code below this line
//   let titleSplit = title.split(' ');
//   let titleJoin = titleSplit.join('-');
//   return titleJoin;
//   // Change code above this line
// }
// console.log(slugify());

// function makeArray(firstArray = ['Mango', 'Poly'], secondArray = ['Ajax', 'Chelsea'], maxLength = 3) {
//   // Change code below this line
//   const concatArray = firstArray.concat(secondArray);
//   console.log(concatArray);
//   console.log(concatArray.slice(0, maxLength));
//   console.log(concatArray.length);

//   return concatArray.length > 3 ? concatArray.slice(0, maxLength) : concatArray;

//   // Change code above this line
// }

// console.log(makeArray());

// function calculateTotal(number = 1) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);
//     total += i;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

// console.log(calculateTotal());

// function calculateTotalPrice(order = [10, 20, 30, 40]) {
//   let total = 0;
//   // Change code below this line
//   for (let item of order) {
//     console.log(item);
//     total += item;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice());

// function findLongestWord(string = 'The quick brown fox jumped over the lazy dog') {
//   // Change code below this line
//   let words = string.split(' ');
//   let longestWord = words[0];
//   console.log(words);
//   for (const word of words) {
//     console.log(word);
//     if (word.length > longestWord.length) {
//       longestWord = word;
//       console.log(longestWord);
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }
// console.log(findLongestWord());

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers([1, 2, 3, 4, 5], 3));

/////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const array = [];
//   const lastElementIndex = numbers.length - 1;

//   for (let i = 0; i < lastElementIndex; i += 1) {
//     if (numbers[i] >= value) {
//       array.push(i);
//     }
//     // console.log(array.push(i));
//   }
//   return array;
//   // Change code above this line
// }

//////////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const array = [];

//   for (const element of numbers) {
//     if (value < element) {
//       array.push(element);
//     }
//   }
//   // console.log(array.push(i));
//   return array;
// }
// // Change code above this line

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/////////////////////////////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const unqieArray = [];

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       unqieArray.push(element);
//     }
//   }

//   return unqieArray;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

/////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (const element of order) {
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const iterator of numbers) {
//   }

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

///////////////////////////////////////////////////////////////////////////

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const args = Array.from(arguments);
//   console.log(args);

//   const evenNumbers = [];

//   for (const element of args) {
//     if (element % 2 === 0) {
//       evenNumbers.push(element);
//     }
//   }

//   return evenNumbers;

//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));

//////////////////////////////////////////////////////////////////////////

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   // const args = Array.from(arguments);

//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       console.log(i);
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;

//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));

///////////////////////////////////////////////////////////////////////////

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }

//   return false;
//   // Change code above this line
// }

// // function includes(array, value) {
// //   // Change code below this line
// //   for (const element of array) {
// //     return element === value ? true : false;
// //   }
// // }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.table(apartment);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);

//   console.log(keys);
//   console.log(values);
// }

// // const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   let keyLength = [];
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       keyLength.push(key);
//       propCount = keyLength.length;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
//   console.log(apartment[key]);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   return (propCount = Object.keys(object).length);
//   // Change code above this line
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let key of colors) {
//   console.log(key);
//   console.log(hexColors.push(key.hex));
//   console.log(rgbColors.push(key.rgb));
//   console.log(hexColors);
//   console.log(rgbColors);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const key of products) {
//     console.log(key.name);
//     if (key.name === productName) {
//       return key.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// // console.log(getProductPrice(products));
// console.log(getProductPrice('Engine'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];

//   for (const key of products) {
//     if (key[propName]) {
//       console.log(values);
//       console.log(values.push(key[propName]));
//     }
//   }

//   return values;
//   // Change code above this line
// }

// // console.log(getProductPrice(products));
// console.log(getAllPropValues('name'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (let price of products) {
//     console.log(price[price]);
//     console.log(price.price);
//     if (price.name === productName) {
//       return (totalPrice = price.price * price.quantity);
//     }
//   }
//   // Change code above this line
// }

// console.log(calculateTotalPrice('Droid'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const complete = { ...{ completed, category, priority }, ...data };
//   console.log(complete);
//   return complete;
//   // Change code above this line
// }

// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Change code below this line
// function add(...args) {
//   let total = 0;

//   for (let arr of args) {
//     console.log(arr);
//     total += arr;
//     console.log((total += arr));
//   }
//   return total;
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books.indexOf(oldName));
//     const booksIndexOld = this.books.indexOf(oldName);
//     console.log(booksIndexOld);

//     return this.books.splice(booksIndexOld, 1, newName);
//     console.log(this.books.splice(booksIndexOld, 1, newName));

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// console.table(bookShelf);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexPotion = this.potions.indexOf(oldName);

//     return this.potions.splice(indexPotion, 1, newName);
//     // Change code above this line
//   },
// };

// // console.log(atTheOldToad.getPotions());
// console.table(atTheOldToad);
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.table(atTheOldToad);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         //   console.log(potion);
//         //   console.log(potion.name);
//         //   console.log(newPotion.name);
//         //   console.log(potion);
//         //   return this.potions.push(newPotion);
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     //  if (this.potions.includes(newPotion)) {
//     //    return `Error! Potion ${newPotion} is already in your inventory!`;
//     //  }

//     //  return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = this.potions[i];
//       if (name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     console.log(potions);

//     for (const potion of potions) {
//       console.log(potion.name);
//       if (potion.name === oldName) {
//         console.log((potion.name = newName));
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//     //  const potionIndex = this.potions.indexOf(oldName);
//     //  if (potionIndex === -1) {
//     // return `Potion ${oldName} is not in inventory!`;
//     //  }
//     //  this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// // console.table(atTheOldToad);
// // // console.log(atTheOldToad.removePotion('Speed potion'));
// // console.table(atTheOldToad);
// // console.log(atTheOldToad.removePotion('Dragon breath'));
// // console.log(atTheOldToad);

// // console.table(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.table(atTheOldToad.getPotions());
