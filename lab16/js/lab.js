// index.js - Complete Lab 16: JSON and API's
// Author: Adrian Contreras
// Date: 12/4/2023
 
var number = 2000


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)

   url: "https://xkcd.com/" + number + "/info.0.json",
  
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
        var imageUrl = data.img;
        var printableData = "<pre>" + JSON.stringify(comicObj) + "</pre>";
        console.log(printableData);
        $("#output").append("<h1>" + comicObj.title + "<h1>");
        var html = `<div id="imageblock">
        <img src="${imageUrl}">
      </div>`

    // console.log("My new html: \n", html);
    $("#output").html(html);
        $("#output").append("<h1>" + comicObj.safe_title)
        $("#output").append("<p>" + comicObj.alt);
    },
    
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  });


  var myButton = document.getElementById("nextbutton")
  myButton.addEventListener("click",  function chamgeUrl() {
    comicObj.num + 1
    console.log("add 1")
  })