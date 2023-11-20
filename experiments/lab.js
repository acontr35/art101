// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
$("title").append("<button id='my-button'> press</button>")
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  $("#my-button").click(function() {
    var name = $("#input").val();
    newText = "Hello" + name ;
    $("#title").html(newText);

    console.log("Main function started.");
    // the code that makes everything happen
  });
  
  // let's get this party started
  
  