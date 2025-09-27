// 'use strict';

// console.log(varX);
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDec1 (a, b){
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;


// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// const greetFunction = person.greet;
// greetFunction();    


// const button = document.querySelector('button');
// button.addEventListener('click', person.greet); 

// button.addEventListener('click', () => person.greet());
// button.addEventListener('click', person.greet.bind(person));


// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name); 
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name); 
//   },
// };

// obj.regularMethod();
// obj.arrowMethod(); 

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
  
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const functionTypes = {
//     regularFunction: function () {
//         console.log('Arguments length:', arguments.length);
//         console.log('First argument:', arguments[0]);
//     },

//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');
//     },

//     modernFuction: (...args) => {
//         console.log('Args.length', args.length);
//         console.log('First arg:', args[0]);
//     },
// };

// functionTypes.regularFunction('Hello', 'World');
// functionTypes.modernFuction('Modern', 'Approach');


// let age = 30;
// let oldAge = age;
// age = 31;

// console.log('age:', age);
// console.log('oldAge:', oldAge);

// const me = { name: 'Lloyd', age: 20 };
// const friend = me;

// friend.name = 'Aldous';
// friend.age = 18;

// console.log('me:', me);
// console.log('friend:', friend);

// const original = {
//     name: 'Alice',
//     age: 25,
//     hobbies: ['reading', 'coding'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('Original Name:', original.name);
// console.log('Copy Name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

// const deepOriginal = {
//     name: 'Charlie',
//     age: 32,
//     address: { city: 'Paris', country: 'France' },
//     hobbies: ['travel', 'photography'], 
// };

// const deepCopy = structuredClone(deepOriginal);

// deepCopy.address.city = 'London';
// deepCopy.hobbies.push('cooking');
// deepCopy.name = 'Alex';

// console.log(deepOriginal);
// console.log(deepCopy);

