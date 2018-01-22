
"use strict";

// Part 2

var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

// OR:

// var number = 2;
//
// do {
//     console.log(number);
//
//     number = number * 2;
//
// } while(number <= 65536);



// Part 3

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting ice cream inventory is " + allCones + " cones.");

do {

    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if(conesOrdered <= allCones) {
        console.log("Customer ordered " + conesOrdered + " cones");
        allCones = allCones - conesOrdered;
        console.log(conesOrdered + " cones sold");
        console.log("Updated inventory is " + allCones + " cones");
    } else {
        console.log("Next customer, please!");
    }
} while(allCones > 0);

console.log("All ice cream cones are sold; time to go home.");