// There are 2 types of data types : primitive and non primitive, based on how are the data stored in the memory

// Primitive or Reference Type(Called by value)
// 7 Types
// 1. String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamically typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 321654987654352165465487987n;
console.log(bigNumber);

// Reference Type(Non Primitive)
// Array, Objects, Functions

const heros = ["ironman", "hulk", "cap"];

const myObj = {
  name: "Shubh",
  age: 26,
};

const myFunc = function () {
  console.log("Hello World...");
};

console.log(typeof outsideTemp);
