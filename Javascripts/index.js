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

console.log(id === anotherId); // false .. symbol ki value  kabhi bhi equal ni hoti. 

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

