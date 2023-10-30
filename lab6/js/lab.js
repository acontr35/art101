// index.js - Lab 6: Arrays and Objects
// Author: Adrian Contreras
// Date: 10/29/2023

// Constants
var myTransport = [
  "bus",
  "car",
  "bike",
  "legs.",
];

var myMainRide = {
  make: "Toyota",
  model: "Tacoma",
  color: "grey",
  year: 2001,
  age: function() {
      return 2023 - this.year;
      }
};

// Functions

document.writeln("How I get around Santa Cruz: " + myTransport + "<br>");

document.writeln("<br>" + "My Main Ride: <pre>", 
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
