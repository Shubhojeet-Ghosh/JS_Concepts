const myName = "Shubh-Ghosh";
const repoCount = 50;

// console.log(myName + repoCount + " value");

// backticks for string interpolation
console.log(`Hello , My name is ${myName} with repo count : ${repoCount}`);

const newName = new String("Shubh");
console.log(newName);

console.log(newName === myName); // not equal

console.log(newName[0]);
// console.log(newName.__proto__);

// console.log(myName.length);
console.log(newName.length);
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf("h"));

const firstName = newName.substring(0, 4);
console.log(firstName);

const anotherString = newName.slice(0, 4);
console.log(anotherString);

const sliceString = newName.slice(-7, -1);
console.log(sliceString);

const newString2 = "  Hello World \n";
const cleanString = newString2.trim();
console.log(newString2 + "|");
console.log(cleanString + "|");

const url = "https://sgdevstudio.com/shubh%20ghosh";
const filtered_url = url.replace("%20", "-");

console.log(url);
console.log(filtered_url);

console.log(url.includes("shubh"));

const arrString = url.split("/");
console.log(arrString);
