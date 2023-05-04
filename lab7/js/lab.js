// index.js - Lab 7: Function- write functions that take user input and manipulate a string.
// Author: Darshaya Washington
// Date: May 03th, 2023

//sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
        var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
        console.log("userName =", userName);
    //split string to array
        var nameArray = userName.split('');
        console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join ('');
    console.log("nameSorted =", nameSorted);
    //Note that I could have done the above lines as a string line:
    //userName.toLower().split("").sor().join("")
    return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), " </br>");
