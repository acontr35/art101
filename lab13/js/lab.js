// index.js - Complete Lab 13: Loops
// Author: Adrian Contreras
// Date: 11/26/2023

// Constants





// Functions




for (var index=1;index<=200;index++){
    var number = '';
    var myButton = document.getElementById("submit");
    if (index%15 == 0) {
        $("#output").append("<p>fizz-buzz</p>")
    }

    else if (index%21 == 0) {
        $("#output").append("<p>fizz-boom</p>")
    }
    else if (index%40 == 0) {
        $("#output").append("<p>buzz-fizz</p>")
    }
    else if (index%3 == 0) {
        $("#output").append("<p>fizz</p>")
    }
    else if (index%5 == 0) {
        $("#output").append("<p>buzz</p>")
    }
    else if (index%7 == 0) {
        $("#output").append("<p>boom</p>")
    }
    else {
        number = [...String(index)].join(''); //angela used wesbot 
        $("#output").append(`<p>${number}</p>`); //same
    }
     
        
}

