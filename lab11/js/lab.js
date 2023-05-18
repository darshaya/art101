// index.js - Lab 11: Libraries & jQuery - experiment with features of jQuery
// Author: Darshaya Washington
// Date: May 16, 2023

//add a button for each section (challenge, problems, and results)
$("#challenge").append("<button id='challenge-button'>click me</button>");
$("#problems").append("<button id='problems-button'>Click me pls</button>");
$("#results").append("<button id='results-button'>CLICK ME NOW</button>");

//add a click event to each button for each section. challenge:
$("#challenge-button").click(function(){
    //wes' site also says a better/alternative anon function for here could be:
    // $(this).parent().toggleClass("special"); which traverses the DOM to the parent. 
    $("#challenge").toggleClass("special");
})

//for problems section:
$("#problems-button").click(function(){
    $("#problems").toggleClass("special");
})

//and finally for results section:
$("#results-button").click(function(){
    $("#results").toggleClass("special");
})
