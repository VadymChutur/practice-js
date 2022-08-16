// function foo() {
//   console.log('Hello World!');
// }

// const copyFoo = foo;

// console.log(copyFoo === foo);

// copyFoo();

///////////////////////////////////////////////////////////////////////////

// const foo1 = function (callback) {
//   //   console.log(callback === foo2);
//   callback();
// };

// const foo2 = function () {
//   console.log('Hello world!');
// };

// foo1(foo2);

/////////////////////////////////////////////////////////////////////////

// const foo1 = function (callback) {
//   callback();
// };

// const foo = function () {
//   console.log('Hi');
// };

// foo1(foo);

/////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   //   console.log(array);
//   //   console.log(callback);

//   for (let i = 0; i < array.length; i += 1) {
//     const elem = callback(array[i]);
//     // console.log(elem);

//     newArray.push(elem);
//   }

//   return newArray;
// };

// const add = function (number) {
//   return number + 5;
//   //   console.log('number:', number);
// };

// const multi = function (number) {
//   return number * 10;
// };

// const addNumbers = each(numbers, add);
// const multiNumbers = each(numbers, multi);

// console.log(addNumbers);
// console.log(multiNumbers);

/////////////////////////////////////////////////////////////////////////

// function greet(name) {
//   console.log(`Welcome ${name}`);
// }

// // const hiMango = greet;
// // hiMango('Mango');

// function registerGuest(name, callback) {
//   console.log(`Register guest ${name}`);
//   callback(name);
// }

// registerGuest('Mango', greet);

/////////////////////////////////////////////////////////////////////////

// function greet(name) {
//   console.log(`Welcome ${name}`);
// }

// const hiMango = greet;
// hiMango('Mango');

// function registerGuest(name, callback) {
//   console.log(`Register guest ${name}`);
//   callback(name);
// }

// registerGuest('Mango', function (name)) {

//     console.log(`Welcome ${name}`);
// }

/////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function callback(element, index, array) {
//   console.log('element:', element);
//   console.log('index:', index);
//   console.log('array:', array);
// });

// console.log(numbers);

/////////////////////////////////////////////////////////////////////////

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 21));

// const sum = (a, b) => a + b;

// console.log(sum(2, 7));

// const greet = (username) => {
//   console.log(`Hello ${username}`);
// };

// greet('Mango');

/////////////////////////////////////////////////////////////////////////////////

// const calc = (...args) => {
//   let total = 0;

//   args.forEach((number) => (total += number));
//   console.log(total);
//   console.log(args);
// };

// calc(1, 5, 8, 4, 6, 7);

//////////////////////////////////////////////////////////////////////////////////

// const crateObject = (obj) => {
//   return {
//     ...obj,
//     id: Date.now(),
//   };
// };

// const newObj = crateObject({ name: 'tomato', price: 30, quantity: 3 });

// console.log(newObj);

/////////////////////////////////////////////////////////////////////////////////////////////////

// const createProduct = (partialProduct, callback) => {
//   callback({ id: Date.now(), ...partialProduct });
// };

// const logProduct = (product) => console.log(product);

///////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   //   console.log(array);
//   //   console.log(callback);

//   for (let i = 0; i < array.length; i += 1) {
//     const elem = callback(array[i]);
//     // console.log(elem);

//     newArray.push(elem);
//   }

//   return newArray;
// };

// const addNumbers = each(numbers, (number) => number + 5);
// const multiNumbers = each(numbers, (number) => number * 10);

// console.log(addNumbers);
// console.log(multiNumbers);

// const mango = function (shefName, dish) {
//   console.log(`${shefName} cooking ${dish}`);
// };

// const poly = function (shefName, dish) {
//   console.log(`${shefName} cooking ${dish}`);
// };

// const shefName = function (name) {
//   return function (dish) {
//     console.log(`${name} cooking ${dish}`);
//   };
// };

// const mango = shefName('Mango');
// const poly = shefName('Poly');

// mango('tea');
// mango('supe');
// poly('burger');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('This log with call fnB', number);
// };
// fnA('String', fnB);

///////////////////////////////////////////////////////////////////////////////

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // const sub = function (x, y) {
// //   return x - y;
// // };

// // doMath(2, 3, function (x, y) {
// //   return x + y;
// // });

// // doMath(2, 3, function (x, y) {
// //   return x - y;
// // });

////////////////////////////////////////////////////////////////////////////////////////////

// const onGetPositionSuccess = function (position) {
//   console.log('This call onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log('Dont geo position in call');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

////////////////////////////////////////////////////////////////////////////////////////////////

// const callback = function () {
//   console.log('after 10 seconds in callback');
// };

// console.log('I in code before timeout');

// setTimeout(callback, 10000);

// console.log('I in code after timeout');

///////////////////////////////////////////////////////////////////////////////////////////////////

// const number = [1, 2, 3, 4, 5];

// const filterNumbers = function (array, test) {
//   const filterNewArray = [];

//   for (const number of array) {
//     // console.log(number);
//     const passed = test(number);
//     if (passed) {
//       filterNewArray.push(number);
//     }
//   }

//   return filterNewArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filterNumbers(number, callback1);
// const r2 = filterNumbers(number, function (value) {
//   return value <= 2;
// });

// console.log(r1);

// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const r3 = filterNumbers(fruits, function (fruit) {
//   return fruit.quantity >= 125;
// });

// const r4 = filterNumbers(fruits, function (fruit) {
//   return fruit.isFresh === true;
// });

// console.table(r3);

// console.table(r4);

// const fnA = function (parametr) {
//   const innerVarialble = 'this string in inner fnA';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVarialble);
//     console.log('This call innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const round = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(round(3.1456798, 2));
// console.log(round(3.1456798, 3));
// console.log(round(3.1456798, 4));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const rounder1 = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder1(2);
// const rounder3 = rounder1(3);

// console.log(rounder2(3.1456798));
// console.log(rounder3(3.1456798));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       salary += amount;
//     },

//     lower(amount) {
//       salary -= amount;
//     },

//     curent() {
//       return `Curent salary ${employeeName} - ${salary}`;
//     },
//   };
// };

// const mySalaryManager = salaryManagerFactory('Mango', 5000);

// console.log(mySalaryManager.curent());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const add = function (a, b, c) {
//   console.log(a, b, c);

//   return a + b + c;
// };

// const addArow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 25));

// console.log(addArow(15, 45, 3));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ a: 5 });

// console.log(arrowFnA());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const onGetPositionSuccess = (position) => {
//   console.log('This call onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = (error) => {
//   console.log('Dont geo position in call');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

const number = [1, 2, 3, 4, 5];

const filterNumbers = (array, test) => {
  const filterNewArray = [];

  for (const number of array) {
    // console.log(number);
    const passed = test(number);
    if (passed) {
      filterNewArray.push(number);
    }
  }

  return filterNewArray;
};

const r1 = filterNumbers(number, (value) => value >= 3);
const r2 = filterNumbers(number, (value) => value <= 2);

console.log(r1);

console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filterNumbers(fruits, (fruit) => fruit.quantity >= 125);
console.table(r3);

const r4 = filterNumbers(fruits, (fruit) => fruit.isFresh === true);
console.table(r4);

const r5 = filterNumbers(fruits, (fruit) => fruit.isFresh === false);
console.table(r5);
