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

// Question 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
function debounce (func, timeout = 1000){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(
            function(){
                func.apply(this, args)
            }, timeout
        );
    }
}

function printMe() {
    console.log('printing debounced message')
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);



// b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.