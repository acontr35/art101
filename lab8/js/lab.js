// index.js - Complete Lab 8: Anon Functions and Callbacks 
// Author: Adrian Contreras
// Date: 11/5/2023

// Constants
// array of numbers
var  numbers = [
  25,
  52,
  2552,
  22,
  55
]


// Functions
// function meant to add 25 to each of the numbers in the array
function add25(x) { 
  var results = (25 + x);
  return results;
}


console.log("Collection of my favorite numbers:" + add25(numbers))

var result = numbers.map(add25);

console.log("Add 25 to my numbers:", result);

var result = numbers.map(function(x){
var results = x + 25;
return results;
}
)