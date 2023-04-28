// index.js - Lab 6: Arrays and Objects - Further practice Javascript by experimenting with arrays and objects.
// Author: Darshaya Washington
// Date: April 28th, 2023

// Define Variables
var myTransport = ["walking", "uber", "carpool", "drive"]

// Create an object for my main ride
var myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "White",
  year: 1996,
  age: function () {
      return 2023 - this.year;
  }
}

// Output
document.writeln("Ways I get around in Las Vegas ", myTransport, "<br>");

document.writeln("My Ride while i'm in Vegas: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

