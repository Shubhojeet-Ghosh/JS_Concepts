const myPromise = new Promise((resolve, reject) => {
  // Simulate async work
  setTimeout(() => {
    console.log("Pizza delivered!");
    resolve("Pizza delivered!");
    // reject("Out of ingredients!");
  }, 2000);
});

// myPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
