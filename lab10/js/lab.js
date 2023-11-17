// index.js - Complete Lab 10: Libraries and jQuery  - creating a button that lets the user have a fake text conversation.
// Author: Adrian Contreras
// Date: 11/16/2023

// Constants
//click listener for button



// Functions
function generateRandomText() {
const text ="me when I when you when me when like when you and then you when I but also how you then when you if you ";
const min = 3;
const max = 100;
const randLen = Math.floor(Math.random() * (max - min +1)) + min;
//get a random starting index to slice the random text
const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
// generate the random text
return text.slice(randStart, randStart + randLen);
}
// add a click listener to the challenge button
$("#make-convo").click(function() { 
const newText = generateRandomText();
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});


