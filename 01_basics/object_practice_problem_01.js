const user = {
  name: "Charlie",
  greet() {
    console.log(this.name);
  },
};

const greetFn = user.greet;
greetFn();

// Output - Undefined(because this loses reference to the current object user).
