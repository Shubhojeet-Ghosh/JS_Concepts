async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  return data;
}

// // Main async function
// async function main() {
//   const result = await fetchData();
//   console.log("Fetched Data:", result);
// }

// Call the main function
fetchData();
