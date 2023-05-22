// index.js - Lab 11: Libraries & jQuery - experiment with features of jQuery
// Author: Darshaya Washington
// Date: May 16, 2023




//grabs all minor sections and adds a button
$(".minor-section").append("<button>press me</button>");

//adds a feature to all buttons which toggles the 'special' class on the parents
$("button").click(function (){
  $(this).parent().toggleClass("special");
});