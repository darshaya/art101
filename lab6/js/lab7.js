
//accept an array and sorts it in descending order
function sorted(array) {
    var sortedArray = array.sort()
    var reversedArray = sortedArray().reverse()
    //Have the function return the new array
    return reversedArray;

}




//Define an array of numbers.
a = [1,2,4,34,2,16];
//Call the function, passing the array, and print the results to the console.
console.log("Our sorted array is", sorted(a))
