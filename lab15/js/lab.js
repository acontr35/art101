// index.js - Complete Lab 15: Ajax
// Author: Adrian Contreras
// Date: 12/4/2023


var myButton = document.getElementById("submit");
myButton.addEventListener("click", function() {
    var number = document.getElementById("input").value;
    console.log(number)
    URL = "https://pokeapi.co/api/v2/pokemon/" + number + "/"

     $.ajax({
        // The URL for the request (from the api docs)
        url: URL,
        // The data to send (will be converted to a query string)
    
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            console.log(data);
            var printableData = "<pre>" + JSON.stringify(data) + "</pre>";
            console.log(printableData);
            $("#output1").append("<p>" + data.name);
            $("#output1").append( "Base Experience: ", + data.base_experience);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
})