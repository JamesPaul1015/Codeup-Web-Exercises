(function () {

    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    var userChoice = confirm("Would you like to enter a number?");

    if (userChoice) {

        var input = prompt("Enter a number:");


        if(isNumeric(input)) {

            if (isEven(input)) {
                alert("Even number");
            } else {
                alert("Odd number");
            }

            alert("Your number plus 100 is " + (parseFloat(input)) + 100);


            if (isNegative(input)) {
                alert("That's a negative number");
            } else if(isPositive(input)) {
                alert("That's a positive number");
            } else {
                alert("Your number is neither negative nor positive(0)");
            }

        } else {
            alert("That's not a number");
        }

    } else {
        alert("OK!");
    }

    function isNumeric(input) {
        return !isNaN(input);
    }

    function isNegative(input) {
        return input < 0;
    }

    function isPositive(input) {
        return input > 0;
    }

    function isEven(input) {
        return parseFloat(input) % 2 === 0;
    }

    function isOdd(input) {
        return !isEven(input);
    }

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

// function analyzeColor(color) {
//     var message = "";
//
//     color = color.toLowerCase();
//
//     if (color === "blue") {
//         console.log("blue is the color of the sky");
//     } else if (color === "red") {
//         console.log("strawberries are red");
//     } else if (color === "cyan") {
//         console.log("I don't know anything about cyan");
//     } else {
//         console.log("I don't know anything about that color");
//     }
//
//     return message;
// }
// console.log(analyzeColor("Red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));

// function whichColor() {
//     console.log(randomColor)
// }
//
// whichColor();

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */



// switch(randomColor) {
//     case "red":
//         console.log("roses are red");
//         break;
//     case "orange":
//         console.log("oranges are orange");
//         break;
//     case "yellow":
//         console.log("bananas are yellow");
//         break;
//     case "green":
//         console.log("the grass is green");
//         break;
//     case "blue":
//         console.log("the sky is blue");
//         break;
//     case "indigo":
//         console.log("let's go indigo");
//         break;
//     case "violet":
//         console.log("violets are... i dunno");
//         break;
// }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

// var userColorRequest = prompt("Please enter a color");
//
// alert(analyzeColor(userColorRequest));





    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Nordstom, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `caculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, totalBill) {

        // could declare multiple variable with the following syntax...
        // var discountPercentage, finalOutput;

        var discountPercent;
        var finalOutput;

        discountPercent = calculatePercent(luckyNumber);

        finalOutput = totalBill - (totalBill * discountPercent);

        return finalOutput;
    }

    function calculatePercent(num) {

        var discountPercent;

        switch(num) {
            case 0:
                discountPercent = 0;
                break;
            case 1:
                discountPercent = .1;
                break;
            case 2:
                discountPercent = .25;
                break;
            case 3:
                discountPercent = .35;
                break;
            case 4:
                discountPercent = .5;
                break;
            case 5:
                discountPercent = 1;
                break;
            default:
        }

        return discountPercent;
    }

    console.log(calculateTotal(0,100));
    console.log(calculateTotal(3,100));
    console.log(calculateTotal(4,100));


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var totalBill = prompt("Enter your total bill");

    alert("Your lucky number: " + luckyNumber);

    alert("Your total bill before discount: " + totalBill);

    alert("Price after discount applied: " + calculateTotal(luckyNumber, totalBill));

})();