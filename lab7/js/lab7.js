// index.js - Lab 7: Functions
// Author: Lily Nguyen
// Date: 25 April 2023

// Constants

// Functions
// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName()
{ 
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName -", userName);

  // split atring to array 
  var nameArray = userName.split(''); 
  console.log("nameArray -", nameArray);

  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort -", nameArraySort);

  // join array back to a string 
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted -", nameSorted);

  // testing for Bonus task!
  // var caseSenitiveSort = userName.sort();
  // console.log("caseSenitiveSort -", caseSenitiveSort);

  // Note that I could have done the above lines as a single line:
  // userName.toLower().split("").sort().join("")
  return nameSorted; 
}

// testing out for Bonus task!
/*
function caseSenitiveSort(temp)
{ 
  return temp.nameSorted(function(a,b)
  { 
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}
*/


// Output 
document.writeln("Oh hey, I've fixed your name: ", 
  sortUserName(), "</br>");

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
