// let x = 10;

// function check() {
//   console.log(x);

//   if (false) {
//     var x = 20;
//   }
// }

// check();

// ******************* //

// both the declaration and function body is hoisted
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello!");
}

// ******************* //

// So, var gets hoisted with a value of undefined.

console.log(sname); // ➡️ undefined, not error
var sname = "Aditi";

// ******************* //

console.log(age); // ❌ ReferenceError
let age = 25;
