// index.js - Lab 10: JavaScript Events and Forms 
// Author: Lily Nguyen
// Date: 11 May 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName()
{
  // some code here
  // return results;

  // //nameSort() from lab 7
  // var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  // console.log("userName -", userName);

  // // split atring to array 
  // var nameArray = userName.split(''); 
  // console.log("nameArray -", nameArray);

  // // sort the array
  // var nameArraySort = nameArray.sort();
  // console.log("nameArraySort -", nameArraySort);
 
  // join array back to a string 
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted -", nameSorted);

  var photoEl = document.getElementById("user-name");
  var buttonEl = document.createElement("my-button");

  buttonEl.innerHTML = "Press me!";
  photoEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", function()
  {
    alert("Hi");
  })
  return nameSorted; 
}

const inputField = document.getElementById('user-name');
const outputDiv = document.getElementById('output');

document.getElementById('my-button').addEventListener('click', function()
{
  const inputValue = inputField.ariaValueMax;
  const results = sort(inputValue);
  
  outputDiv.innerHTML = results;
});

function sort(str)
{
  const sortedArr = str.split('').sort();
  return sortedArr.join('');
}

function anagram(atr)
{
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--)
  {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[i], arr[j]];
  }
  return arr.join('');
}

// Output 
// document.writeln("Oh hey, I've fixed your name: ", 
//   sortUserName(), "</br>");

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
