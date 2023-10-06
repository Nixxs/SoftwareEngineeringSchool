// Question 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

function ucFirstLetters(inputString){
    const words = inputString.split(" ");
    let camelCaseWords = [];

    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0];
        let upperCaseFirstLetter = firstLetter.toUpperCase();
        let restOfWord = words[i].slice(1);
        let camelCaseWord = upperCaseFirstLetter + restOfWord;

        camelCaseWords.push(camelCaseWord);
    }

    return camelCaseWords.join(" ");
}

console.log(ucFirstLetters("los angeles")) //Los Angeles

// Question 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.
//b) Write another variant of the truncate function that uses a conditional operator.

function truncate (textString, maxLength){
    let stringLength = textString.length;
    if (stringLength > maxLength){
        return textString.slice(0, maxLength) + "...";
    } else {
        return textString;
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

// Question 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. 

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
// a)
animals.push("Bear", "Cat");
// b)
animals.unshift("Dog", "Antelope");
// c)
animals.sort();
// d)
function replaceMiddleAnimal(newAnimal) {
    const totalAnimals = animals.length;
    const middleIndex = Math.ceil(totalAnimals/2);
    
    animals[middleIndex] = newAnimal;
}
replaceMiddleAnimal("Eagle");

// e)
function findMatchingAnimals(beginsWith){
    let filteredAnimals = [];
    for (let i=0; i < animals.length; i++){
        let animalString = animals[i].toLowerCase();
        let inputStringLowerCase = beginsWith.toLowerCase();

        if (animalString.startsWith(inputStringLowerCase)){
            filteredAnimals.push(animals[i]);
        }
    }
    return filteredAnimals;
}

console.log(findMatchingAnimals("ca"));
console.log(animals);

// Question 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.

//The function should remove all dashes, and uppercase the first letter of each word after a dash.

function camelCase(cssProp){
    let words = cssProp.split("-");
    let firstWord = words[0];
    let otherWords = words.slice(1);

    let outputCamelCase = firstWord;
    for (i in otherWords) {
        let firstLetter = otherWords[i][0].toUpperCase();
        let otherLetters = otherWords[i].slice(1);
        let newWord = firstLetter + otherLetters;
        outputCamelCase += newWord;
    }

    return outputCamelCase;
}

//b) Create variants of the camelCase function that use different types of for loops, and

function camelCase(cssProp){
    let words = cssProp.split("-");
    let firstWord = words[0];

    let outputCamelCase = firstWord;
    for (let i=1; i < words.length; i++) {
        let firstLetter = words[i][0].toUpperCase();
        let otherLetters = words[i].slice(1);
        let newWord = firstLetter + otherLetters;
        outputCamelCase += newWord;
    }

    return outputCamelCase;
}

//c) with and without the conditional operator.

function camelCase(cssProp){
    let words = cssProp.split("-");
    let firstWord = words[0];

    let outputCamelCase = firstWord;
    for (i in words) {
        if (words[i] === firstWord){
            //pass
        } else {
            let firstLetter = words[i][0].toUpperCase();
            let otherLetters = words[i].slice(1);
            let newWord = firstLetter + otherLetters;
            outputCamelCase += newWord;
        }
    }

    return outputCamelCase;
}

console.log(camelCase("margin-left"));

// Question 5. 
// a) why doesn't this work?
let twentyCents = 0.20;
let tenCents = 0.10
let fixedTwenty = Number(twentyCents.toFixed(2));
let fixedTen = Number(tenCents.toFixed(2));
console.log(fixedTwenty + fixedTen) //why is this not working?
// answer: because toFixed returns a string

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2){
    let result = float1 + float2;

    return parseFloat(result.toFixed(2));
}
console.log(currencyAddition(5.5,6.2));

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation, numDecimals){
    let fixedNumber1 = parseFloat(float1.toFixed(numDecimals));
    let fixedNumber2 = parseFloat(float2.toFixed(numDecimals));
    let result = 0;

    switch (operation){
        case "+":
            result = fixedNumber1 + fixedNumber2;
            return parseFloat(result.toFixed(numDecimals));
        case "-":
            result = fixedNumber1 - fixedNumber2;
            return parseFloat(result.toFixed(numDecimals));
        case "/":
            result = fixedNumber1 / fixedNumber2;
            return parseFloat(result.toFixed(numDecimals));
        case "*":
            result = fixedNumber1 * fixedNumber2;
            return parseFloat(result.toFixed(numDecimals));
    }
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+', 2)) // true

// Question 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray. Test with the following arrays and create another one of your own.

const unique = (duplicatesArray) => {
    let noDuplicates = [];

    for (let i=0; i < duplicatesArray.length ; i++){
        if (!noDuplicates.includes(duplicatesArray[i])){
            noDuplicates.push(duplicatesArray[i]);
        }
    }

    return noDuplicates;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// Question 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

const getBookTitle = (bookId) => {
    let foundBook = books.find(
        function(book){
            return book.title.toLowerCase() == bookId.toLowerCase()
        }
    )
    return foundBook;
}
console.log(getBookTitle("To Kill a Mockingbird"));

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

const getOldBooks = (year) => {
    let foundBooks = books.filter(
        function(book){
            return book.year <= year;
        }
    )
    return foundBooks;
}
console.log(getOldBooks(1950));

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.

const addGenre = (genre) => {
    let updatedBooks = books.map(
        function(book){
            book.genre = genre;
            return book;
        }
    );
    return updatedBooks;
}
console.log(addGenre("classic"));

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
const getTitles = (authorInitial) => {
    let filteredBooks = books.filter(
        function(book){
            return book.author.toLowerCase().startsWith(authorInitial.toLowerCase());
        }
    );

    let bookTitles = filteredBooks.map(
        function(book){
            return book.title
        }
    )

    return bookTitles;
}
console.log(getTitles("H"));

//e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
// -- Not sure how to use find to make this better.
const latestBook = () => {
    let latestBook = books[0];

    books.forEach(
        function(book){
            if (book.year > latestBook.year){
                latestBook = book;
            }
        }
    );

    return latestBook;
}
console.log(latestBook());

// Question 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a)
const phoneBookDEF = new Map() //an empty map to begin with

// b)
phoneBookDEF.set('David', '0412312343')
phoneBookDEF.set('Edward', '0433221117')
phoneBookDEF.set('Frank', '0455221182')

// c)
phoneBookDEF.set('Caroline', '123474569')

// d)
function printPhoneBook(contacts){
    let data = contacts.entries();
    for (let i=0; i < contacts.size ; i++){
        console.log(data.next().value);
    }
}

//e 
const phoneBook = new Map();
function addToPhonebook(contacts) {
    let keys = contacts.keys();
    let values = contacts.values();

    for (let i=0; i < contacts.size ; i++){
        let key = keys.next().value;
        let value = values.next().value;
        phoneBook.set(key, value);
    }
}
addToPhonebook(phoneBookABC)
addToPhonebook(phoneBookDEF)
printPhoneBook(phoneBook);

// Question 9. Given the below salaries object, perform the following tasks.
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries){
    let totalSalaries = 0;
    for (let employee in salaries){
        totalSalaries += salaries[employee];
    } 
    return totalSalaries;
}
console.log(sumSalaries(salaries));

//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries){
    let highestSalary = 0;
    let topEarner = "";
    for (let employee in salaries){
        if (salaries[employee] > highestSalary) {
            highestSalary = salaries[employee]
            topEarner = employee;
        } 
    } 
    return topEarner;
}
console.log(topEarner(salaries));

// Question 10.The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today
let minutesPast = today.getHours() * 60 + today.getMinutes()
console.log(minutesPast + ' minutes have passed so far today')

//b) Print the total number of seconds that have passed so far today
console.log(minutesPast*60 + ' seconds have passed so far today')

//c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
}
calculateAge('1986-09-20');

//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
function daysInBetween(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    let diffInMs = endDate - startDate;
    let diffInSeconds = diffInMs/1000;
    let diffInMinutes = diffInSeconds/60;
    let diffInHours = diffInMinutes/60;
    let diffInDays = diffInHours/24;

    return diffInDays;
}
console.log(daysInBetween("2022-1-12", "2023-5-18"))