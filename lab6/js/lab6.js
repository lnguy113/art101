// index.js - Lab 6: Arrays & Objects 
// Author: Lily Nguyen
// Date: 25 April 2023

// Define Variables
myTransport = ["Honda Accord", "bike", "rides from friends", "Lime Scooter"];

// create an object for my main ride 
myMainRide = 
{
  make: "Honda",
  model: "Accord",
  color: "Olive",
  year: 2014,
  age: function()
  {
    return 2023 - this.year;
  }
}

// output 
document.writeln("Kinds of transportion I use:", myTransport, "</br>");

// this litte trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

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
