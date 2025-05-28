const score = 400;
console.log(score);

let balance = new Number(50000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.60321;
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(4), typeof otherNumber.toPrecision(4));

const hundreds = 1000000000;
console.log(
  hundreds.toLocaleString("en-IN"),
  typeof hundreds.toLocaleString("en-IN")
);
