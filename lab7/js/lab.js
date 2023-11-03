// index.js - Complete Lab 7: functions
// Author: Adrian Contreras
// Date: 11/2/2022

// Constants

// Functions

function sortUserName() {
    var userName = window.prompt("Hey, what's your name? Something dumb I bet. ");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the Array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("Oh hey, so your name was gross, but I made it better.", 
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
  