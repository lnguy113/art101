// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Lily Nguyen
// Date: 2 May 2023

// Constants

// Functions
function isEven(x)
{ 
  return (x % 2 == 0);
}

// Testing functions
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, true, ture, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x)
{ 
  return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = mapResults; 

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
