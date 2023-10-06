// Question 1. What are the results of these expressions? (answer first, then use console.log() to check)
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // false
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // null
console.log(" -9 " + 5); // -9 5
console.log(" -9 " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // null
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // -2

// Question 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // 34 - produced by concatenating '3'and '4' as strings
let multiplication = three * four // 12 - multiplication isn't used to concatenate strings so this is fine
let division = three / four // 0.75 - same with dividsion
let subtraction = three - four // -1 - same with subtraction
let lessThan1 = three < four // true - this is actually comparing string values not the number value
let lessThan2 = thirty < four // true - thats why this one is showing true as well, don't know what value is assigned by the computer supposed to be alphabetical.

// Question 3. Which of the following console.log messages will print? Why?
// Answer: the if needs to return true for the rest of the code to run. Everything is true as long as it's not null, undefined, 0 or false. 
if (0) console.log('#1 zero is true') // no 
if ("0") console.log('#2 zero is true') // yes
if (null) console.log('null is true') // no
if (-1) console.log('negative is true') // yes
if (1) console.log('positive is true') // yes

// Question 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
// Answer: result is a string += takes the orignal value and adds on another value. Works with numbers too. 

let a = 2, b = 3;
let result = `${a} + ${b} is `;
a + b < 10 ? result += "less than 10" : result += "greater than 10";
console.log(result);

// Question 5. Rewrite the following function using: 
//      a) function expression syntax, and 
//      b) arrow function syntax. Test each version to make sure    they work the same.

function getGreeting(name) {
    return 'Hello ' + name + '!';
}
console.log(getGreeting("nick"));
getGreeting = (name) => ('Hello ' + name + '!');
console.log(getGreeting("<=nick=>"));

// Question 6. 
// a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ? "You killed my father. Prepare to die." : 'Nice to meet you.'
}
inigo.greeting(westley)
inigo.greeting(rugen)

// Question 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works

const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    foulPlay() {
        this.foul += 1;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        console.log('Halftime fouls is '+this.foul);
        return this;
    },
    fullTime() {
        console.log('Fulltime score is '+this.score);
        console.log('Fulltime fouls is '+this.foul);
    }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().foulPlay().freeThrow().basket().threePointer().halfTime().basket().foulPlay().freeThrow().freeThrow().foulPlay().basket().threePointer().fullTime();

// Question 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const car = {
    model: 'VDJ78',
    make: 'Toyota',
    cylinders: '8',
    engine: '1VDFTV',
    transmission: 'Manual'
}
function dataPrinter(data){
    for (let key in data){
        console.log(data[key]);
    }
}
dataPrinter(sydney);
dataPrinter(car);

// Question 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let moresports = teamSports;
moresports.push("Football");
moresports.unshift("Basketball");

let dog2 = dog1;
dog2 = "Fido";
let cat2 = cat1;
cat2.name = "Frank";

console.log(teamSports); 
console.log(dog1);
console.log(cat1);

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// answer: teamsports and cat1 are objects so they are referenced variables and both pointing to the same address im member but dog1 is a literal so dog1 and dog2 and independant from one another.

let _moresports = ["Football", ...teamSports, "Basketball"];
let _cat2 = {...cat1};
_cat2.name = "Frank";

// Question 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

const drivingAge = 17;

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >= drivingAge ? true : false;
}
class PersonClass {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
        this.human = true;
    }
    canDrive () {
        return this.age >= drivingAge;
    }
}
let nick = new Person("nick", 37);
let bob = new Person("bob", 20);
console.log(nick);
console.log(bob);
let jane = new PersonClass("jane", 25);
console.log(jane);