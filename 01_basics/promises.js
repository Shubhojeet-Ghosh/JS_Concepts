// const myPromise = new Promise((resolve, reject) => {
//   // Simulate async work
//   setTimeout(() => {
//     console.log("Pizza delivered!");
//     resolve("Pizza delivered!");
//     // reject("Out of ingredients!");
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const myPromise = new Promise((resolve, reject) => {
  // Do some async task
  let success = true;

  if (success) {
    console.log("Task successful!");
    resolve("Task successful!");
  } else {
    console.log("Task failed!");
    reject("Task failed.");
  }
});

myPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
