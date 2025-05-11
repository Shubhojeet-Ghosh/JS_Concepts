let a = 10;

function test() {
  let a = 50;
  console.log(a);
  a = 20;
}

function test2() {
  console.log(a);
}

test();
test2();
