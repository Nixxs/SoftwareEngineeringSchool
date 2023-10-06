// Question 1. 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(3, 2)
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
let counter2 = makeCounter(3, 2)
counter2()

// Question 2. 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
//a) What order will the four tests below print in? Why?
// answer: 4,3,2,1 cos of the settimeout delay
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.

delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let id = setTimeout(delayMsg, 10000, '#3: Delayed by 0ms');
clearTimeout(id);
