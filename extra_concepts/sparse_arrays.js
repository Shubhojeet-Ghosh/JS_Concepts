a = [1, , 2, 3];

console.log(a); // [1, <1 empty item>, 2, 3]
console.log(a.length); // 4
console.log(a[1]); // undefined
console.log(1 in a); // false  <- This shows that index 1 is *missing*
