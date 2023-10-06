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

// Question 2. 