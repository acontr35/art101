// index.js - Complete Lab 9: Libraries and jQuery
// Author: Adrian Contreras
// Date: 11/7/2023

// Constants

$(".challenge").append("<button id='button-challenge'>Don't press</button>");
$(".problems").append("<button id='button-problems'>Please no</button>");
$(".reflection").append("<button id='button-reflection'>WAIT WAIT</button>");
// Functions
// add a click listener to the challenge button
$("#button-challenge").click(function(){
  $(".challenge").toggleClass("special");
});

$("#button-problems").click(function(){
  $(".problems").toggleClass("different");
});

$("#button-reflection").click(function(){
  $(".reflection").toggleClass("party");
});
