"use strict";

// Part 2

function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}
showMultiplicationTable(7);

// Part 3 Generate 10 random numbers

for (var i = 1; i <= 10; i++) {

    var randomNumber = Math.floor((Math.random()*180)+20);

    if (randomNumber % 2 == 0) {
        console.log(randomNumber + " is even");
    }
    else {
        console.log(randomNumber + " is odd");
    }
}

// Part 4

for (var i = 1; i <= 9; i +=1) {
    // .repeat repeats a string n number of times
    // change number behind i into a string
    // output the string.repeat()
    var numberString = i.toString();

    // console.log(numberString);

    var output = numberString.repeat(i);
    console.log(output);
}

// Part 5

for (var i = 100; i > 0; i = i - 5) {

    console.log(i);
}

// Fizz Buzz

// Output numbers from 1 to 100
// If the number is divisible by 3, then output the string "Fizz" instead of that number.
//     If the number is divisible by 5, then output the string "Buzz" instead of that number.
//     If the number is divisible by both 3 and 5, then output the string "FizzBuzz"
// Otherwise, output the number.
//
//     Output:
// 1
// 2
// "Fizz"
// 4
// "Buzz"
// "Fizz"
// 7
// 8
// "Fizz"
// "Buzz"
// 11
// "Fizz"
// 13
// 14
// "FizzBuzz"
// 16
// 17....
//
// # Problem solving tips for thinking about process!
//     If you need to represent ANY number or a string or ANY value, you're gonna have a variable
//
// If yo have to do something over and over again... -> chances are good you're gonna loop
//
// If every time through a loop, we have to do some other thing over and over, maybe there's an inner loop
//
// If you see the world "if" in the instructions, you're gonna have a conditional
//
// If you have a line of code that does something (generates a random number between 1 and 5), you're gonna need a variable to hang on to that number
//
// If your code needs to make a decision or asks a question about a variable, you're gonna need a conditional or a function that has a conditional inside of it

// for (var i = 1; i <= 100; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// }

for (var i = 1; i <= 100; i++) {
    var isDividibleByThree = i % 3 === 0;
    var isDivisibleByFive = i % 5 === 0;

    if (isDividibleByThree && isDivisibleByFive) {
        console.log('FizzBuzz');
    }
    else if (isDividibleByThree) {
        console.log('Fizz');
    }
    else if (isDivisibleByFive) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}