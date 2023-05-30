// index.js - Lab 9: Javascript for the Web-- experiment with DOM manipulation in JavaScript
// Author: Darshaya Washington
// Date: May 09th, 2023

//assign output to a variable
var outputEl = document.getElementById("output");

//create new element & assign to a variable
var new1El = document.createElement("p");

//change the html attribute of variable to say something new
new1El.innerHTML = "Something new";

//create another new element & assign to a variable
var new2El = document.createElement("p");

//change the html attribute of variable to say something else
new2El.innerHTML = "Something else";

//append both elements one at a time to output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change the css attributes of two elements of page
var problemEl = document.getElementById("problems");
problemEl.style.backgroundColor = "pink";

var p1El = document.getElementById("p1");
p1El.style.fontStyle = "italic";
p1El.style.letterSpacing = "1.5px"; 


