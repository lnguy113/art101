// index.js - Lab 9 - JavaScript for the Web
// Author: Lily Nguyen 
// Date: 2 May 2023

// Constants

// Functions

// use getElementById() to find your output and assign it to outputEl
const outputEl = document.getElementById("output");
// outputEl.innerHTML = "p"; TESTING

// create a new element with document.createElement("p") and assign it to new1El
// change the html attribute of new1El to say something new
const new1El = document.createElement("p");
new1El.innerHTML = "Say something different from the original";

// create another new element and assign it to a variable new2El
// change the html attribute of new2El to say something else
const new2El = document.createElement("p");
new2El.innerHTML = "Say another thing that is diffrent from the original";

// append both new elements one at a time using appendchild() to your output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


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
