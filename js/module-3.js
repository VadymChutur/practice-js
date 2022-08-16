// const playlist = {
//   name: 'super playlist',
//   raitng: 5,
//   tracks: ['track - 1', 'tracl - 2', 'track - 3', 'track - 4'],
//   trackCount: 4,
// };
// console.log(playlist.tracks);
// console.log(playlist.trackCount);
// console.log(playlist.name);

// const propertyName = 'tracks';

// console.log(playlist.raitng);
// console.log(playlist['raitng']);
// console.log(playlist[propertyName]);

//////////////////////////////////////////////////////////////////////////////

// const userName = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   userName,
//   email,
// };

// console.log(signupData);

/////////////////////////////////////////////////////////////////////////////////

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// colorPickerData.shdow = 'black-tomato';

// console.log(colorPickerData);

//////////////////////////////////////////////////////////////////////////////////

// const courses = ['js', 'nodejs', 'js', 'html', 'js', 'nodejs', 'js', 'html', 'js', 'nodejs', 'js', 'html'];

// const stats = [];

// for (const course of courses) {
//   console.log(course);
//   console.log(stats['js']);
//   if (stats[course]) {
//     stats[course] += 1;
//   } else {
//     stats[course] = 1;
//   }
// }

// console.log(stats);

////////////////////////////////////////////////////////////////////////////////////////

// const username = prompt();
// const email = prompt();

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

///////////////////////////////////////////////////////////////////////////////////////////

// const a = {
//   b: 1,
//   c: 2,
// };

// const username = 'name';

// a[username] = 'mango';
// console.log(a);

/////////////////////////////////////////////////////////////////////////////////////////////

const salaries = {
  john: 100,
  ann: 160,
  pete: 130,
};

// let total = 0;

// for (const key in salaries) {
// console.log(salaries[key]);
// total += salaries[key];
// }
// console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////

// const salariesKeys = Object.keys(salaries);

// console.log(salariesKeys);

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////////

// const valueSalary = Object.values(salaries);
// console.log(valueSalary);

// for (const salary of valueSalary) {
//   total += salary;
// }

// console.log(total);

///////////////////////////////////////////////////////////////////////////////////////////////

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = Object.create(obj);
// obj1.c = 10;

// // console.log(obj1.a);

// for (const key in obj1) {
//   if (obj1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function foo(...args) {
//   console.log(args);
// }

// foo(1, 5, 6, 7, 22, 68, 489);

// const numbers = [1, 5, 6, 7, 22, 68, 489];

// console.log(Math.max(...numbers));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const entries = Object.entries(salaries);

// for (const arr of entries) {
//   console.log(arr);
//   console.log(arr[0]);
//   console.log(arr[1]);
//   console.log('----------------------------');
// }
// console.log(entries);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const playlist = {
//   name: 'My playlist',
//   raiting: 5,
//   tracks: ['track-1', 'track-2', 'treck-3'],
//   //   trackCount: 3,
//   changName(newName) {
//     console.log('this in changeName', this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     // this.trackCount = this.tracks.length;
//   },
//   updateRating(newRaiting) {
//     this.raiting = newRaiting;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changName('New name');

// console.log(playlist);

// playlist.addTrack('New track');
// playlist.addTrack('New track-1');
// playlist.addTrack('New track-2');
// playlist.addTrack('New track-3');

// playlist.updateRating(4);
// console.log(playlist);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// // const keys = Object.keys(feedback);

// let totalFeedback = 0;

// // for (const key of keys) {
// //   console.log(feedback[key]);
// //   totalFeedback += feedback[key];
// // }
// // console.log(totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   totalFeedback += value;
// }

// console.log('Total feedback: ', totalFeedback);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(prodact) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === prodact.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProdact = {
//       ...prodact,
//       quantity: 1,
//     };

//     this.items.push(newProdact);
//   },
//   remove(prodactName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       // console.log(this.items[i]);

//       const { name } = this.items[i];

//       if (prodactName === name) {
//         // console.log('find prodact:', prodactName);

//         items.splice(i, 1);
//       }
//     }
//     // for (const item of this.items) {
//     //   console.log(item);

//     //   if (prodactName === item.name) {
//     //     console.log('find prodact:', prodactName);
//     //   }
//     // }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     console.log(this.items);

//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   incraseQuantity(prodactName) {
//     for (const item of this.items) {
//       if (item.name === prodactName) {
//         console.log(item.name);
//         console.table(item);

//         item.quantity += 1;
//         return `Prodact ${item.name} + 1`;
//       }
//     }
//   },
//   decreaseQuantity(prodactName) {
//     for (const item of this.items) {
//       if (item.name === prodactName) {
//         console.log(item.name);
//         console.table(item);

//         item.quantity -= 1;
//         return `Prodact ${item.name} - 1`;
//       }
//     }
//   },
// };

// // console.table(cart.getItems());

// cart.add({ name: 'Tomat', price: 50 });
// cart.add({ name: 'Lemon', price: 60 });
// cart.add({ name: 'Lemon', price: 60 });
// cart.add({ name: 'Apple', price: 60 });
// cart.add({ name: 'Strawbery', price: 110 });
// cart.add({ name: 'Strawbery', price: 110 });
// cart.add({ name: 'Strawbery', price: 110 });

// console.table(cart.getItems());

// cart.remove('Tomat');

// console.table(cart.getItems());

// console.log('Total price:', cart.countTotalPrice());

// console.log(cart.incraseQuantity('Apple'));
// console.log(cart.incraseQuantity('Apple'));
// console.log(cart.incraseQuantity('Apple'));

// console.table(cart.getItems());

// console.log(cart.decreaseQuantity('Apple'));
// console.log(cart.decreaseQuantity('Apple'));

// console.table(cart.getItems());

// console.log('Total price:', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const freinds = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
//   { name: 'Den', online: false },
//   { name: 'Stepan', online: false },
// ];

// // for (const freind of freinds) {
// //   console.log(freind.name);

// //   freind.newprop = 555;
// // }

// console.table(freinds);

// const findFriendByName = function (allFreinds, name) {
//   for (const freind of freinds) {
//     if (freind.name === name) {
//       console.log(freind.name);
//       return 'Found!!!';
//     }
//   }
//   return 'Not found.';
// };

// // console.log(findFriendByName(freinds, 'Poly'));
// // console.log(findFriendByName(freinds, 'Chelsy'));

// const getAllNames = function (allFreinds) {
//   const names = [];

//   for (const freind of allFreinds) {
//     // console.log(freind.name);

//     names.push(freind.name);
//   }

//   return names;
// };

// // console.log(getAllNames(freinds));

// const getOnlineFreinds = function (allFreinds) {
//   const freindOnline = [];

//   for (const freind of allFreinds) {
//     console.log(freind);
//     console.log(freind.online);

//     if (freind.online) {
//       freindOnline.push(freind);
//     }
//   }

//   return freindOnline;
// };

// // console.log(getOnlineFreinds(freinds));

// const getOfflineFreind = function (allFreinds) {
//   const freindOffline = [];

//   for (const freind of allFreinds) {
//     if (!freind.online) {
//       freindOffline.push(freind);
//     }
//   }

//   return freindOffline;
// };

// // console.log(getOfflineFreind(freinds));

// const getFreinsByOnlineStatus = function (allFreinds) {
//   const frendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const freind of allFreinds) {
//     if (freind.online) {
//       frendsByStatus.online.push(freind);
//       continue;
//     }

//     frendsByStatus.offline.push(freind);
//   }
//   return frendsByStatus;
// };

// console.log(getFreinsByOnlineStatus(freinds));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).length);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
