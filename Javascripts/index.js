/*


why to use javascript 
javascript uses for frontened and backened development

*/
/*
const accoutId = 444553
let accountEmail = "wWJQ9@example.com"
var accountPassword = "12345"
accountCity = "ahmedpur"
let accountState;

console.log("accountId");
console.table([accoutId, accountEmail, accountPassword, accountCity, accountState])

//  {
//     this curly brackets called scope
//  }

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/*
"use strict"; // treat all JS code as newer version. 8,9 saal purani js aur abhi wali me bohat farq hai. to abhi wali ko use kerny k liye 'use strict'  ka use kerty hain .

// alert( 3 + 3) // it works only on browser and we are using node.js

///data types
let name = "Arshad"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol); // function

*/

//*****conversions of data types*****

// after conversation in number
// let score1 = "Arhsad"     //=> string
// let score2 = "26"         //=>  number
// let score3 = "26number"   //=> NaN
// let score4 = true         //=>
// let score5 = false        //=>    
// let score6 = null         //=>
// let score7 = undefined    //=>

// // console.log(typeof score); // string

// let valueInNumber = Number(score1, score2, score3, score4, score5, score6, score7)

// console.log(valueInNumber);

// console.log(typeof valueInNumber);


// "26" => 26
// "26number" => NaN
//  true => 1; false => 0

// *********************** Operations ***********************

// let value = 3
// let negValue = -3
// console.log(negValue);


let str1 = "hello"
let str2 = "Arshad"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log("1" + 1);
// console.log(1 + "1");
// console.log((1 + 1));
// console.log(1 + 1 * 5);


// read increament ++, decreament --
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//**********comparison operator **********/


// console.log(null > 0); //false
// console.log(null == 0); //false 
// console.log(null >= 0); //true

// above reason is that, equality check == and comparisonsn ><>= work differently. comparisonsn convert null to a number treating it as 0, that's why {console.log(null >= 0);} is true and {console.log(null > 0);} is false

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0); undefined will always false with every comparison

// '==' called strict check. ..> '==' just check equality and '==='  check equality with datatype


//  there are 2 data types .{Primitive and non primitive}  

//1.  primitive ...>  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//2. Non primitive ...>// By Reference (Non primitive)  Array, Objects, Functions

const score = 26            // number 
const score1 = 26.25        // nymber
const isLoggedIn = false    // boolean
const outSideTemp = null    // object ....null ki typeof hamesha object hoti
let userEmail;              // undefined
let myFunction = function() {} // function object
// console.table([typeof score, typeof score1, typeof isLoggedIn, typeof outSideTemp, typeof userEmail]);


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false .. symbol ki value  kabhi bhi equal ni hoti. 

//2. Non primitive ...>// By Reference (Non primitive)  Array, Objects, Functions

// let heros = [iqbal, saad, liaqat, ahmed]
// let myObj = 
// {
//     name: "Arshad",
//     age: 18,

// // }
// // let myFunction2 = function(){}
// // console.log(typeof myFunction);

// for documentation of about typeof read this....> https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (primitive)      Heap (Non primitive)

// let name = Arshad
// use back tick method. like ... console.log(`my name is ${name}`)
/*
// read all strings method. prototypes
let text = "Hello, JavaScript World!";

// 1. Length
console.log(text.length); // Number of characters

// 2. Case Conversion
console.log(text.toUpperCase()); // Converts to uppercase
console.log(text.toLowerCase()); // Converts to lowercase

// 3. Searching
console.log(text.indexOf("JavaScript")); // First occurrence index or -1 if not found
console.log(text.lastIndexOf("o")); // Last occurrence index
console.log(text.includes("World")); // true if found, otherwise false
console.log(text.startsWith("Hello")); // true if it starts with substring
console.log(text.endsWith("!")); // true if it ends with substring

// 4. Extracting Substrings
console.log(text.slice(7, 17)); // Extracts from index 7 to 17 (excluding 17)
console.log(text.substring(7, 17)); // Similar to slice but no negative indices
console.log(text.substr(7, 10)); // Extracts 10 characters from index 7

// 5. Replacing and Modifying
console.log(text.replace("World", "Universe")); // Replaces first occurrence
console.log(text.replaceAll("o", "O")); // Replaces all occurrences
console.log(text.trim()); // Removes whitespace from both ends
console.log(text.trimStart()); // Removes whitespace from start
console.log(text.trimEnd()); // Removes whitespace from end

// 6. Splitting and Joining
console.log(text.split(" ")); // Splits into an array by spaces
console.log(text.concat(" Let's learn!")); // Joins strings

// 7. Repeating and Padding
console.log(text.repeat(2)); // Repeats text twice
console.log(text.padStart(30, "*")); // Pads text to length of 30 from start
console.log(text.padEnd(30, "*")); // Pads text to length of 30 from end
*/

//+++++++Number Methods+++++++
/*
// 1. Convert other types to Number
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1

// 2. Parse a string as an integer
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("101", 2)); // 5 (binary to decimal)

// 3. Parse a string as a floating-point number
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14px")); // 3.14

// 4. Convert a number to a string with fixed decimals
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

// 5. Format a number to a specified precision
console.log(num.toPrecision(3)); // "3.14"
console.log(num.toPrecision(2)); // "3.1"

// 6. Convert a number to a string with an optional radix
console.log(num.toString()); // "3.14159"
console.log(255..toString(16)); // "ff" (hexadecimal)

// 7. Convert a number to exponential notation
console.log(num.toExponential(2)); // "3.14e+0"

// 8. Round to the nearest integer
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// 9. Round up to the nearest integer
console.log(Math.ceil(4.1)); // 5

// 10. Round down to the nearest integer
console.log(Math.floor(4.9)); // 4

// 11. Remove the decimal part, returning only the integer
console.log(Math.trunc(4.9)); // 4

// 12. Return the absolute value of a number
console.log(Math.abs(-42)); // 42

// 13. Return a number raised to a power
console.log(Math.pow(2, 3)); // 8 (2^3)

// 14. Return the square root of a number
console.log(Math.sqrt(16)); // 4

// 15. Find the minimum or maximum value from a list of numbers
console.log(Math.min(3, 7, 1, 4)); // 1
console.log(Math.max(3, 7, 1, 4)); // 7

// 16. Generate a random decimal between 0 and 1
console.log(Math.random()); // Random decimal between 0 and 1
*/

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US')); // 1,000,000 It is US Methodd
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 It is Indian Method

// console.log(Math);
// console.log(Math.abs(-4));           // 4
// console.log(Math.round(4.6));        // 4
// console.log(Math.ceil(4.2));         // 5 upper waly number ko ly ga
// console.log(Math.floor(4.9));        // 4 nechy waly number ko ly ga
// console.log(Math.min(4, 3, 6, 8));   // 3
// console.log(Math.max(4, 3, 6, 8));   // 8

// console.log(Math.random());          // give value b/w 0 and 1
// console.log((Math.random()*10) + 1); 
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// Dates  &&   Times

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})