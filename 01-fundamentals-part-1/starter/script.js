// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js);

// // console.log("=== VARIABLES ===");

// // let firstName = "Jonas";
// //  console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "Programmer";
// // job = "teacher";
// // console.log(job);

// // const contry = "Philippines";
// // const language = "Filipino";

// // age = 25;
// // age = 26;

// // console.log("=== DATA TYPES ===");

// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);

// // let lastName = "Doe";
// // console.log(lastName);
// // console.log(typeof lastName);

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 50;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now I'm a bird";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math Operations");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName)

// // console.log("Hello" + "World" + "!")
// // console.log("I am " + 25 + " years old");

// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("x starts as:", x);

// // x*= 4;
// // console.log("x starts as:", x);

// // x/= 2;
// // console.log("x starts as:", x);

// // x++;
// //console.log("x starts as:", x);

// // x--;
// // x--;
// // console.log("x starts as:", x);

// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("age comparison:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparisons:");
// // console.log(25>20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older", isJonasOlder);

// // console.log("Complex comparisons:");
// // console.log(now - 1991 > now - 2018);

// // console.log("=== OPERATOR PRECEDENCE ===");

// // console.log(now - 1991 > now - 2018);

// // let x, y;
// // x = y = 25 - 10 - 5;
// // console.log(x, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // Coding Challenge #1 - BMI Calculator

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const markBMI = massMark / heightMark ** 2;
// // console.log("Mark BMI: " + markBMI);

// // const johnBMI = massJohn / heightJohn ** 2;
// // console.log("John BMI: " + johnBMI);

// // const markHigherBMI = markBMI > johnBMI;
// // console.log(markHigherBMI);

// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works; ${2 + 3} equals 5`);
// console.log(`Comparisons too like: 5 > 3 = ${5 > 3}`);

// console.log(`Just a regular string...`);

// console.log("String with \n\
//     multiple \n\
//     lines"
//     );

// console.log(`String 
//     multiple
//     lines`);

// const myName = "Lloyd";
// const myAge = 20;
// const myJob = "student";
// const currentYear = 2025;

// const myIntroduction = `Hello, my name is ${myName}. I am ${myAge} years old and I am currently a ${myJob}. The current year is ${currentYear}.`;

// console.log(myIntroduction);

// const yearOfBirth = currentYear - myAge;
// const ageNextYear = 2026 - yearOfBirth;
// console.log(`I was born in ${yearOfBirth}, and I am turning ${ageNextYear} next year.`);

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving");
// } else { 
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. She has to wait ${yearsLeft} more years.`);
// }

// const score = 90;
// const passingScore = 75;

// if (score >= passingScore) {
//     console.log(`You passed with ${score} points!`);
// } else {
//     const pointsNeeded = passingScore - score;
//     console.log(`You failed with ${score} points. You need ${pointsNeeded} more points.`);
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;

// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height = 0;

// if (height) {
//     console.log(`YAY! Height is defined`);
// } else {
//     console.log(`Height is UNDEFINED`);
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// const values = [0, 1, "", `Hello`, undefined, null, NaN, {}, []];

// console.log(`Value`, 0);
// console.log(`Boolean: `, Boolean(0));

// if (0) {
//     console.log(`Truthy!`);
// } else {
//     console.log(`Falsy!`);
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`);
// }

