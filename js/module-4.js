// const numbers = [1, 2, 3, 4, 5];

// // const numbers2 = [...numbers];
// const numbers2 = [10, 9, 8, 7];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

// // const allNumbers = numbers.concat(numbers2);

// // const allNumbers = [...numbers, ...numbers2];

// // console.log(allNumbers);

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

////////////////////////////////////////////////////////////////////////////////////
// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);

// cat.name = 'Kiwi';

// console.log(cat);

///////////////////////////////////////////////////////////////////////////////

// const user = {
//   firstName: 'John',
//   ladtName: 'Dou',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = { ...user };

// user2.someArr.push(19);
// console.log(user);
// console.log(user2);

// console.log(user.someArr === user2.someArr);

///////////////////////////////////////////////////////////////////////////

// const numbers = [6, 7, 8];
// const newNumbers = [...numbers];

// console.log(newNumbers);

// function foo(...args) {
//   console.log(args);
// }

// console.log(foo(1, 2, 3));

/////////////////////////////////////////////////////////////////////////////

// const sum = function (num, ...args) {
//   console.log(num);
//   console.log(args);
//   let total = 0;

//   for (const number of args) {
//     console.log(number);
//     if (number > num) {
//       total += number;
//     }
//   }

//   return total;
// };

// const totalValue = sum(5, 6, 7, 8, 9, 12, 8);

// console.log(totalValue);

//////////////////////////////////////////////////////////////////////////////

// const user = {
//   firstName: 'John',
//   lastName: 'Dou',
//   age: 30,
//   someArr: [1, 2, 3, 4],
//   hits: [],
//   langs: {
//     // original: 'Germany',
//     secondary: 'Poland',
//   },
// };

// // const user2 = { ...user };

// // user2.someArr.push(19);
// // console.log(user);
// // console.log(user2);

// // console.log(user.someArr === user2.someArr);

// const age = 45;

// const {
//   firstName,
//   lastName,
//   age: userAge,
//   hits: images,
//   isAdmin = false,
//   langs: { original: firstLang = 'Eneglish', secondary: secondaryLang = 'France' },
// } = user;
// console.log(userAge);
// console.log(images);
// console.log(lastName);
// console.log(firstName);
// console.log(isAdmin);
// console.log(firstLang);
// console.log(secondaryLang);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const names = ['user-1', 'user-2', 'user-4', 'user-3'];

// const [user1, , user3] = names;

// console.log(user1);
// console.log(user3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const rgb = [0, 255, 34];

// const [red = 0, green = 0, blue = 0] = rgb;

// console.log('red:', red);
// console.log('green', green);
// console.log('blue:', blue);

// const salaries = {
//   mango: 100,
//   kiwi: 500,
//   ajax: 2500,
// };

// // console.log(Object.entries(salaries));

// const topSalaries = function (salaries) {
//   const salaryArr = Object.entries(salaries);

//   // const firstElem = salaryArr[0];

//   let topSalary = salaryArr[0][1];
//   let topDev = salaryArr[0][0];

//   // console.log(topSalary);
//   // console.log(topDev);

//   for (const [name, value] of salaryArr) {
//     // const [name, value] = element;
//     if (value > topSalary) {
//       topSalary = value;
//       topDev = name;
//     }
//   }
//   console.log(topDev);
//   console.log(topSalary);
// };

// topSalaries(salaries);
