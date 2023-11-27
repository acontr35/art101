// index.js - Complete Lab 12: Conditionals
// Author: Adrian Contreras
// Date: 11/19/2023

// Constants





// Functions

function sortingHat(str) {
    len = str.length;
    mod = len  % 4;
    if (mod == 0) {
        return "Spider-Man";
    }
    else if (mod == 1) {
        return "Mrs. Marvel";
    }
    else if (mod == 2) {
        return "Loki";
    }
    else if (mod == 3) {
        return "Hawkeye";
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p> The sorting hat has decided to sort you into" + house + "</p>"
    document.getElementById("output").innerHTML = newText; 
})
