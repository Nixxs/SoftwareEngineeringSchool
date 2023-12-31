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

// Question 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
//a) What order will the four tests below print in? Why?
// answer: 4,3,2,1 cos of the settimeout delay
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let id = setTimeout(delayMsg, 10000, '#3: Delayed by 0ms');
clearTimeout(id);

// Question 3. Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.

function debounce(func){
    let timer;

    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(this, args)
        }, 1000);
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

function printFibonacciTimeouts() {
    let num1 = 0;
    let num2 = 1;
    let fibonacciNum = 0;

    setTimeout(function(){
        fibonacciNum = num1 + num2;
        num1 = num2;
        num2 = fibonacciNum;
        console.log(fibonacciNum);
    }, 1000);
    
}
//printFibonacciTimeouts(); commented out so it doesn't run forever

//c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacciTimeoutsLimit(limit) {
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
printFibonacciTimeoutsLimit(50);

// Question 5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

//answer: because setTimeout expects a function to be returned but description function doesn't return anything

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(function(){car.description()}, 200); //fails

//b) Change the year for the car by creating a clone of the original and overriding it
car = {...car, year : 2023};

//c) Does the delayed description() call use the original values or the new values from b)? Why? 
// answer: its using the orignal values because I cloned it with a spread. it's not pointing to the same object.

//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

let runWithBind = car.description.bind(car);
setTimeout(runWithBind, 500);

//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let car3 = {...car};
car3.model = "982 Cayman";
car3.year = 2020;
setTimeout(runWithBind, 500);

// answer: yep it still works because car is a completely different object. Have to call it like this if we want to use the new object

let runCar3WithBind = car3.description.bind(car3);
setTimeout(runCar3WithBind, 1000);

// Question 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
//a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

Function.prototype.delay = function(ms) {
    const func = this;
    return function(...args) {
        setTimeout(function (){
            func.apply(this, args);
        }, ms);
    };
};

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(500)(5, 5, 5, 5); // prints 25 after 500 milliseconds

// Question 7. 7. In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object].

//However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
//a) Define a custom toString method for the Person object that will format and print their details

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = () => {
        return `name: ${this.name} age: ${this.age} gender: ${this.gender}`
    }
}
const person1 = new Person('James Brown', 73, 'male');
console.log('person1: '+person1); //prints person1: [object Object]

//b) Test your method by creating 2 different people using the below constructor function and printing them
const person2 = new Person("Nick Chai", 37, "male");
console.log('person2: ' + person2);

// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
//d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
    this.toString = () => {
        return `${this.name} ${this.age} ${this.gender} ${this.cohort}`
    }
}

let student1 = new Student("nick", 37, "male", "A");
let student2 = new Student("jane", 21, "female", "B");
console.log("student 1: " + student1);
console.log("student 2: " + student2);

// Question 8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
//myClock.start()

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000){
        super(prefix);
        this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}
const myPrecisionClock = new PrecisionClock("Precision Clock: ", 2000);
//myPrecisionClock.start();

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00"){
        super(prefix);
        this.wakeupTime = wakeupTime;

        let [wakeupHoursString, wakeupMinutesString] = this.wakeupTime.split(":");
        this.wakeupHours = parseInt(wakeupHoursString);
        this.wakeupMinutes = parseInt(wakeupMinutesString);
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

        if (parseInt(hours) === this.wakeupHours && parseInt(mins) === this.wakeupMinutes){
            console.log("wake up!!");
            this.stop();
        }
    }
}

let myAlarmClock = new AlarmClock("Alarm Clock: ", "13:48"); // make sure you change this to the current time before running this script.
myAlarmClock.start();

// Question 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
//a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
    return new Promise(function (resolve, reject){
        let delayMs = (Math.random() * 20000) + 1000;
        setTimeout(function(){
            if (delayMs % 2 == 0){
                resolve(`the delay was even: ${delayMs}`);
            } else {
                reject(`the delay was odd: ${delayMs}`);
            }
        }, delayMs);
    });
}
randomDelay()
    .then(() => console.log('There appears to have been a delay.'))
    .catch(function(error){
        console.log(error);
    });

// Question 10. Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
//a) Write a new version of this function using async/await
//b) Test both functions with valid and invalid URLs
//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

async function fetchURLDataAsync(url) {
    try {
        let data = await fetch(url);

        if (data.status === 200){
            let jsonData = await data.json()
            return jsonData;
        } else {
            return "unexpected response status"
        }
    } catch (error) {
        console.log(error);
    }
}

let urls = ['https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3']

let responses = [];
for (let i=0; i < urls.length; i++){
    let response = fetchURLDataAsync(urls[i]);
    responses.push(response);
}

Promise.all(responses)
.then(function (results){
    for (let i=0; i<results.length;i++){
        console.log(results[i]);
    }
})
.catch(function(error){
    console.log(error);
});
