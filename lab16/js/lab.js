// index.js - Complete Lab 15: Ajax
// Author: Adrian Contreras
// Date: 12/4/2023


     $.ajax({
        // The URL for the request (from the api docs)
        url: "https://xkcd.com/info.0.json",
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
            var comicObj = data;
            var printableData = "<pre>" + JSON.stringify(data) + "</pre>";
            console.log(printableData);
            $("#output").append("<p>" + comicObj.month + comicObj.title);
            $("#output").append("<p>" + comicObj.month + comicObj.day);
            $("#output").append("<p>" + comicObj.safe_title);
            $("#output").append("<p>" + comicObj.transcript);
            $("#output").append("<p>" + comicObj.alt);
            
          
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
