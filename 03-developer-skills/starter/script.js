// // // // // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// // // // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // // const messyExample = function(name, age) {
// // // //     if (age > 18) {
// // // //         return "Hello " + name + ", you are an adult";
// // // //     } else { 
// // // //         return "Hello " + name + ", you are a minor";
// // // //     }
// // // // };

// // // // console.log("Current messy code example:", messyExample("John", 25));
// // // // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // // function testExtensions() {
// // //     const extensionTests = [
// // //         { name: `Prettier`, status: "installed", purpose: "Code formatting" },
// // //         { name: `Live Server`, status: "installed", purpose: "Auto-refresh" },
// // //         {
// // //             name: "auto rename tag",
// // //             status: "installed",
// // //             purpose: "HTML efficiency",
// // //         },
// // //     ];

// // //     return extensionTests;
// // // }

// // // const extensionStatus = testExtensions();
// // // console.log("Extension installation status:", extensionStatus);

// // console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// // const calcTempAmplitude = function(temps) {
// //     let max = temps[0];
// //     let min = temps[0];

// //     for (let i = 0; i < temps.length; i++) {
// //         const curTemp = temps[i];
// //         if (typeof curTemp !== 'number') continue;

// //         if (curTemp > max) max = curTemp;
// //         if (curTemp < min) min = curTemp;
// //     }

// //     console.log(max, min);
// //     return max - min;
// // };

// // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);


// // const calcTempAmplitudenew = function (t1, t2) {
// //     const temps = t1.concat(t2);
// //     console.log(temps);

// //     let max = temps[0];
// //     let min = temps[0];
    
// //     for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;
    
// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //     }

// //     console.log(max, min);
// //     return max - min;
// // };

// // const array1 = [3, 5, 1];
// // const array2 = [9, 0, 5];
// // const amplitudeNew = calcTempAmplitudenew(array1, array2);
// // console.log(amplitudeNew);

// console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

// function demonstrateArrayMax(numbers) {const method1 = Math.max(...numbers);

//     let method2 = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > method2) method2 = numbers[i];
//     }

//     const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//     );

//     return { method1, method2, method3 };
// }

// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log("Multiple approaches from research:", maxResults);


// function reverseStringMethods(str) {
//     const method1 = str.split("").reverse().join("");

//     let method2 = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         method2 += str[i];
//     }

//     const method3 = [...str].reverse().join("");
    
//     return { method1, method2, method3 };
// }

// const reverseResults = reverseStringMethods("Awesome");
// console.log("Stack Overflow research results:", reverseResults);

// function demonstrateConcat() {
//     const array1 = [1, 2, 3];
//     const array2 = [4, 5, 6];
//     const array3 = [7, 8, 9];

//     const simple = array1.concat(array2);
//     const multiple = array1.concat(array2, array3);

//     console.log("Original array1 unchanged:", array1);
    
//     return {simple, multiple};
// }

// const concatResults = demonstrateConcat();
// console.log("MDN documentation applied:", concatResults);


// function calculateAverageScore(scores) {
//     let total = 0; // BUG: Should be initialized to 0

//     for (let i = 0; i < scores.length; i++) {
//         total += scores[i];
//     }

//     return total / (scores.length); // BUG: Should be scores.length
// }

// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log("Buggy result:", buggyResult);


// function demonstrateConsoleDebugging(data) {
//     console.group("Debugging Session");

//     console.log("Input data:", data);

//     if (typeof data !== "object") {
//         console.warn("Warning: Expected object, got", typeof data);
//     }

//     console.table(data);
//     console.groupEnd();

//     return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: "John", age: 30, city: "New York" };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// function stepThroughDebugging(numbers) {
//     debugger;

//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         const currentNumber = numbers[i];
        
//         console.log(`Processing index ${i}: value = ${currentNumber}`);
        
//         if (typeof currentNumber === "number") {
//             sum += currentNumber; 
//             count++
//         } else {
//             console.error(`Invalid number at index ${i}:`, currentNumber);
//         }
//     }
    
//     const average = count > 0 ? sum / count : 0;
//     console.log("Final results:", { sum, count, average });

//     return average;
// }

// const mixedNumbers = [10, 20, "error", 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log("Debug session result:", debugResult);

// function calculateAverageScoreFixed(scores) {
//     if (!Array.isArray(scores) || scores.length === 0) {
//         console.error("Invalid input: scores must be a non-empty array");
//         return 0;
//     }

//   let total = 0;
  
//   for (let i = 0; i < scores.length; i++) {
//     if (typeof scores[i] === "number") {
//       total += scores[i];
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
// }

//   return total / scores.length;
// }

// const fixedResult = calculateAverageScoreFixed(testScores);
// console.log("Fixed result:", fixedResult);


// console.group("Debugging Verification Tests");

// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log("Normal case result:", normalResult);

// const mixedScores = [85, "invalid", 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log("Mixed data result:", mixedResult);

// const errorResult = calculateAverageScoreFixed("not an array");
// console.log("Error case result:", errorResult);

// const emptyResult = calculateAverageScoreFixed([]);
// console.log("Empty array result:", emptyResult);

// console.groupEnd();

console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = ``;

    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    
    console.log("..." + str);
    
}

printForecast(data1);
printForecast(data2);

console.log("Weather forecast formatter working correctly!");

function printForecastMap(arr) {
    const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
    console.log("..." + formatted.join(" ... ") + " ...");
}

function printForecastReduce(arr) {
    const result = arr.reduce(
        (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
        "..."
    );

    console.log(result);
}

console.log("Testing alternative implementations:");
printForecastMap(data1);
printForecastReduce(data1);

function analyzeWorkWeek(dailyHours) {
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0)
    
    const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

    const maxHours = Math.max(...dailyHours);
    const maxDayIndex = dailyHours.indexOf(maxHours);
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const maxDay = days[maxDayIndex];
    
    const daysWorked = dailyHours.filter((hours) => hours > 0).length;
    
    const isFullTime = totalHours >= 35;
    
    return {
        totalHours,
        averageHours,
        maxDay,
        daysWorked,
        isFullTime,
    };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log("Work week analysis:", analysis);

console.log("Challenge completed under time pressure!");


function analyzeWorkWeekOptimized(dailyHours) {
    if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
        console.error("Invalid input: Expected array of 7 daily hours");
        return null;
    }
    
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
    const averageHours = Math.round((totalHours / 7) * 10) / 10;
    const maxHours = Math.max(...dailyHours);    const maxDayIndex = dailyHours.indexOf(maxHours);
    const daysWorked = dailyHours.filter((hours) => hours > 0).length;
    
    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    
    return {
        totalHours,
        averageHours,
        maxDay: dayNames[maxDayIndex],
        daysWorked,
        isFullTime: totalHours >= 35,
        workingDays: dailyHours
        .map((hours, index) => (hours > 0 ? dayNames[index] : null))
        .filter((day) => day !== null),
    };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log("Optimized analysis:", optimizedAnalysis);


// function legacyForecastFunction(temperatures) {
//     var result = ``;
//     for (var i = 1; 1 <= temperatures.length; i++) {
//         result = result = temperatures[i] + ` dergrees in day` + i + `, `;
//     }
//     return result;
// }

const testData = [15, 18, 22, 19];
// console.log("Buggy function output:", legacyForecastFunction(testData));

function enhancedForecastFunction(temperatures1, options = {}) {
    if (!Array.isArray(temperatures1) || temperatures1.length === 0) {
        console.error("Invalid input: temperatures must be a non-empty array");
        return "";
    }

    const { unit = "°C", separator = "...", includeIndex = true } = options;

    let result = "";
    
    for (let i = 0; i < temperatures1.length; i++) {
        const dayNumber = includeIndex ? i + 1 : i;
        result += `${temperatures1[i]}${unit} in ${dayNumber} days${separator}`;
    }

    return separator + result.slice(0, -separator.length);
}

console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log("Enhanced function (custom):", enhancedForecastFunction(testData, {
    unit: "°F",
    separator: " | ",
    includeIndex: true,
    })
);