// // // console.log(`Part 2`);

// // // console.log("=== FUNCTIONS ===");

// // // function logger() {
// // //     console.log(`My name is Lloyd`);
// // // }

// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor (apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice  = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // console.log(fruitProcessor(5, 3));

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);

// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // }

// // // const  age1 = calcAge(2000);
// // // console.log(age1)

// // // console.log(calcAge(1991));

// // // function introduce (firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I am ${age} years old`;
// // //     return introduction;
// // // }

// // // console.log(introduce(`Lloyd`, `Lancero`, 20));

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years`;
// // //     } else {
// // //         return `${firstName} has retired`;
// // //     }
// // // }

// // // console.log(yearsUntilRetirement(2005, `Lloyd`));

// // // // scope

// // // const globalVar = `I am global`;

// // // function testScope() {
// // //     const localVar = `I am global`;
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);
// // // //console.log(localVar);

// // // function calcAverage(score1, score2, score3) {
// // //     const average = (score1 + score2 + score3) / 3;
// // //     return average;
// // // }

// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     return (`Koalas win (${avgKoalas} vs ${avgDolphins})`);
// // //   } else {
// // //     return (`No team wins`);
// // //   }
// // // }

// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // console.log("=== ARRAYS ===");

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // const friends = [`JhayAnn`, `Monique`, `Santos`];
// // console.log(friends);

// // const mixed = ["Aldous", 40, false, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);
// // console.log(friends[3]);

// // console.log(friends.length);

// // friends[0] = `Thomas`;
// // console.log(friends);

// // const calcAge = function (birthYear) {
// //     return 2023 - birthYear;
// // }

// // const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// // console.log(ages);

// // const newLength = friends.push(`Adie`);
// // console.log(friends);
// // console.log(newLength);

// // friends.unshift(`Paul`);
// // console.log(friends);

// // friends[3] = `Harvey`;
// // console.log(friends);

// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // console.log(friends.indexOf(`Harvey`));
// // console.log(friends.indexOf(`Adie`));

// // console.log(friends.includes(`Thomas`));
// // console.log(friends.includes(`Paul`));

// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
// // }

// // friends.forEach (function(friend, index) {
// //         console.log(`${index + 1}: ${friend}`);
// // });

// // friends.forEach ((friend, index) => {
// //         console.log(`${index + 1}: ${friend}`);
// // });

// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2[i];
// // }

// // const average = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades2.forEach (grades2 => {
// //     if (grades2 >= 70) passedCount++;
// // });

// // console.log(`${passedCount} out of ${grades2.length} student have passed`);

// // // Coding Challenge #2 - Student Grade Manager

// // const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // function calculateAverage(grades3) {
// //     let sum = 0;
// //     grades3.forEach (grades3 => sum += grades3);
// //     return sum / grades3.length; 
// // }

// // function findHighestGrade(grades3) {
// //     let highest = grades3[0];
// //     grades3.forEach (grades3 => {
// //         if (grades3 > highest) highest = grades3;
// //     });
// //     return highest;
// // }

// // function findLowestGrade(grades3) {
// //     let lowest = grades3[0];
// //     grades3.forEach (grades3 => {
// //         if (grades3 < lowest) lowest = grades3;
// //     });
// //     return lowest;
// // }
 
// // function countPassing(grades3, passingGrade) {
// //     let count = 0;
// //     grades3.forEach (grades3 => {
// //         if (grades3 >= passingGrade) count++;
// //     });
// //     return count;
// // }

// // const average1 = calculateAverage(grades3);
// // const highest = findHighestGrade(grades3);
// // const lowest = findLowestGrade(grades3);
// // const passing = countPassing(grades3, 70);

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades3.length}`);

// const jonasArray = [
//     `Jonas`,
//     `Doe`,
//     2037 - 1991,
//     `teacher`,
//     [`Michael`, `Peter`, `Steven`],
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[4][0]);

// console.log("=== OBJECTS ===");

// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Doe`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`Michael`, `Peter`, `Steven`]
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);
// console.log(jonas.friends[2]);

// console.log(jonas[`firstName`]);
// console.log(jonas[`lastName`]);
// console.log(jonas[`age`]);

// const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// jonas.job = `programmer`;
// jonas[`age`] = 35;
// console.log(jonas);

// jonas.location = `Philippines`;
// jonas[`twitter`] = `@jonasdoe`;
// jonas.hasDriversLicense = true;
// console.log(jonas);

// const book = {
//     title: `The Great Gatsby`,
//     author: `F. Scott Fitzgerald`,
//     pages: 180,
//     isRead: true,
// }

// const playlist = {
//     title: `Favorite Songs`,
//     creator: `Lloyd`,
//     songs: [`Song 1`, `Song 2`, `Song 3`],
//     genre: [`Pop`, `Rock`, `RnB`],
// }

// console.log(book[`title`]);

// console.log(`My ${playlist[`title`]} playlist`);
// console.log(`Favorite Song: ${playlist.songs[2]}`);

// const student = {
//     studentName: `Lloyd`,
//     grades: [85, 93, 88],
//     address: {
//         street: `123 Main St`,
//         city: `Manila`,
//     },
// };

// console.log(student[`grades`][1]);
// console.log(student.address.city);

// const jonas1 = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 2000,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
    
//     calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas1.calcAge(1991));
// console.log(jonas1.calcAge(jonas1.birthYear));

// const jonasImproved = {
//     firstName: "Jonas",
//     lastName: "Doe",
//     birthYear: 1999,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         console.log(this);
//         return 2037 - this.birthYear;
//     },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//     firstName: "Jonas",
//     lastName: "Doe",
//     birthYear: 1989,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

// const calculator = {
//     num1: 10,
//     num2: 5,
//     operator: `+`,

//     add: function () {
//         return this.num1 + this.num2; 
//     },

//     subtract: function () {
//         return this.num1 - this.num2; 
//     }, 

//     multiply: function () {
//         return this.num1 * this.num2; 
//     },

//     divide: function () {
//         return this.num1 / this.num2; 
//     },

//     calculate: function () {
//         if (this.operator === `+`) {
//             return this.add();
//         } else if (this.operator === `-`) {
//             return this.subtract();
//         } else if (this.operator === `*`) {
//             return this.multiply();
//         } else if (this.operator === `/`) {
//             return this.divide();
//         } else {
//             return `Invalid operator`;
//         }
//     },
    
//     getResult: function() {
//         return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//     },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// const user = {
//     firstName: `Sarah`,
//     lastName: `Johnson`,
//     birthYear: 1995,
//     location: `New York`,
//     interests: [`photography`, `traveling`, `coding`],
//     friends: [
//         {name: "Michael", status: "active"},
//         {name: "Emma", status: "inactive"},
//         {name: "David", status: "active"},
//     ],
//     isActive: true,

//     calcAge: function() {
//         this.age = new Date().getFullYear() - this.birthYear;
//         return this.age;
//     },

//     addFriend: function(name, status = "active") {
//         this.friends.push({name: name, status: status});
//         return this.friends.length;
//     },

//     getActiveFriends: function() {
//         return this.friends.filter(friend => friend.status === "active");
//     },

//     toggleStatus: function() {
//         this.isActive = !this.isActive;
//         return this.isActive;
//     },

//     getSummary: function() {
//         return `${this.firstName} ${this.lastName}, a ${this.calcAge()}-year old from ${this.location}. This account has ${this.friends.length} friends, with ${this.getActiveFriends().length} active friends. Account is currently ${this.isActive ? 'active' : 'inactive'}.`;
//     },
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

const message = document.querySelector(`.message`);
console.log(message);

const button = document.querySelector(`#btn`);
console.log(button);

const heading = document.querySelector(`h1`);
console.log(heading);

console.log(message.textContent);
console.log(button.id);
console.log(heading.tagName);
console.log(heading.textContent);

const buttonByID = document.getElementById(`btn`);
console.log(buttonByID);
console.log(buttonByID === button);

const allParagraphs = document.querySelectorAll(`p`);
console.log(allParagraphs);
console.log(allParagraphs[0]);

const message1 = document.querySelector(`.message`);

console.log(message1.textContent);
message1.textContent = `Hello, World!`;  
console.log(message1.textContent);

message1.innerHTML = `<strong>Bold Text!</strong>`;

console.log(message1.innerText);

const input = document.querySelector(`.guess`);

console.log(input.value);
input.value = `Default text`;

const heading1 = document.querySelector(`h1`);
heading1.style.color = `blue`;
heading1.style.backgroundColor = `yellow`;
heading.style.fontSize = `3rem`;

const button1 = document.querySelector(`#btn`);
button1.style.padding = `20px 20px`;
button1.style.borderRadius = `15px`;

button1.addEventListener(`click`, function() {
    console.log(`Button clicked!`);
    message1.textContent = `Button was clicked!`;
    message1.style.color = 'green';
});

let clickCount = 0;

button1.addEventListener(`click`, function() {
    clickCount++;
    button1.textContent = `Button clicked ${clickCount} times`;
    button1.style.backgroundColor = `hsl(${clickCount * 20}, 70%, 50%)`;    
});

const display = document.querySelector(`.message`);

input.addEventListener(`input`, function() {
    const userText = input.value;
    display.textContent = `You typed: ${userText}`;
    display.style.fontSize = `${userText.length + 5}px`;
});

input.addEventListener(`keydown`, function(event) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === `Enter`) {
        display.textContent = `You pressed Enter, Text was: ${input.value}`;
        input.value = ``;
    }
});

