// // Question 1. 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.

// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom;
//     return function() {
//         currentCount += incrementBy;
//         console.log(currentCount)
//         return currentCount;
//     };
// }
// let counter1 = makeCounter(3, 2)
// counter1(); // 1
// counter1(); // 2

// //a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// let counter2 = makeCounter(3, 2)
// counter2()

// // Question 2. 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
// //a) What order will the four tests below print in? Why?
// // answer: 4,3,2,1 cos of the settimeout delay
// //b) Rewrite delayMsg as an arrow function
// //c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// //d) Use clearTimeout to prevent the fifth test from printing at all.

// delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// let id = setTimeout(delayMsg, 10000, '#3: Delayed by 0ms');
// clearTimeout(id);

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.


const printFibonacci = () => {
    let num1 = 0;
    let num2 = 1;
    setInterval(function(){
        let fibonacciNum = num1 + num2;
        num1 = num2;
        num2 = fibonacciNum;
        console.log(fibonacciNum);
    }, 1000);
}
// this is commented out cos otherwise you won't be able to run this .js to completion
//printFibonacci();

//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

//c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacciTimeouts(limit) {
    let num1 = 0;
    let num2 = 1;
    let fibonacciNum = 0;

    for (let i=0; i < limit; i++) {
        setTimeout(function(){
            fibonacciNum = num1 + num2;
            num1 = num2;
            num2 = fibonacciNum;
            console.log(fibonacciNum);
        }, 1000);
    }
}
printFibonacciTimeouts(50);


