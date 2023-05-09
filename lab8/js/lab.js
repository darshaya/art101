// index.js - Lab 8: Anon Functions and Callbacks
// Author: Darshaya Washington
// Date: May 08th, 2023

function isEven(x){
    return (x % 2 == 0);
}
//test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

var makeArray = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", makeArray);

var result = makeArray.map(isEven);
//should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array", result);

var result = makeArray.map(function(x){
    return x ** 0.5;
})
//should return [10,9,2,4,6.48074069840786, 12, 100]
console.log("Squareroot of array", result);

var mapResults = ["This is an array I made: " + makeArray + ".</br/>" + "Test whether or not each element is even: " + result + ".</br>" ];

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = mapResults; // put your results here