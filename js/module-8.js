// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.checkPizza('Smoked'));

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// objA.z = 100;

// console.log(objA.z);
// console.log(objA);

// console.log(objA.hasOwnProperty('y'));

// const obj = {
//   message: 'This property this object',
// };

// console.log(obj.message);

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// console.log(Car.prototype);

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Helo ;)');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'Toyota',
//   model: 'Trueno',
//   price: 35000,
// });

// myCar.changePrice(10000);
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'Toyota',
//   model: 'Levin',
//   price: 30000,
// });
// console.log(myCar2);

// const User = function ({ email, password }) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 123456789 });
// mango.changeEmail('mymangonew@email.com')

// console.log(mango);

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   //   this._rootSelector = rootSelector;
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');
//   //   console.log(refs.container);
//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log(this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log(this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter = new CounterPlugin({
//   rootSelector: '#counter-1',
//   step: 2,
//   initialValue: 10,
// });
// console.log(counter);

// class Car {
//   static description = 'Class description car';

//   constructor({ brand, model, price } = {}) {
//     this._brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get brand() {
//     return this._brand;
//   }

//   set brand(newBrand) {
//     this._brand = newBrand;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }

// const carInstance = new Car({
//   brand: 'Toyota',
//   model: 'Trueno',
//   price: 35000,
// });

// // console.log(carInstance.model);

// carInstance.model = 'Levin';

// console.log(carInstance);

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} add ${amount} xp`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps }) {
//     super(restProps);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} attacked use ${this.weapon}`);
//   }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'Long Sword' });

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);
//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} cast ${this.spells}`);
//   }
// }

// const poly = new Mage({ name: 'Poly', xp: 500, spells: ['Fireball'] });

// console.log(mango);
// console.log(poly);

// poly.cast();
// mango.attack();

// mango.gainXp(1000);

// console.log(mango);

// class Storage {
//   constructor([...items] = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//     this.items = this.items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// // storage.removeItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//     return this.value;
//   }

//   padStart(str) {
//     this.value = `${str}${this.value}`;
//     return this.value;
//   }

//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//     return this.value;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line

//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(car);

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log(Car.MAX_PRICE === this.constructor.MAX_PRICE);
//     // console.log(this.MAX_PRICE);
//     // console.log(this.constructor.MAX_PRICE);
//     if (newPrice <= this.constructor.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price <= Car.#MAX_PRICE) {
//       return 'Success! Price is within acceptable limits';
//     }

//     return 'Error! Price exceeds the maximum';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(Admin.AccessLevel.BASIC);

// console.log(Admin.AccessLevel.SUPERUSER);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel } = {}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(this);
//     this.value += value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// console.log(updateCounter(10, counter.increment));
