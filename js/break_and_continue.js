
"use strict";

//Part 1

var userNumber = parseFloat(prompt("Enter a number"));

while ( isNaN(userNumber) || userNumber === "") {
    userNumber = parseFloat(prompt("Enter a number"));
}

console.log("Number to skip is: " + userNumber);

for (var i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        // Skip the even numbers.
        continue;
    }

    // console.log (typeof userNumber); (to check type of)

    if (userNumber === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

}