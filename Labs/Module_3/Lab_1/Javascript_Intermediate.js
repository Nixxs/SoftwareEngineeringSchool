// // Question 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

// function ucFirstLetters(inputString){
//     const words = inputString.split(" ");
//     let camelCaseWords = [];

//     for (let i = 0; i < words.length; i++) {
//         let firstLetter = words[i][0];
//         let upperCaseFirstLetter = firstLetter.toUpperCase();
//         let restOfWord = words[i].slice(1);
//         let camelCaseWord = upperCaseFirstLetter + restOfWord;

//         camelCaseWords.push(camelCaseWord);
//     }

//     return camelCaseWords.join(" ");
// }

// console.log(ucFirstLetters("los angeles")) //Los Angeles

// // Question 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.
// //b) Write another variant of the truncate function that uses a conditional operator.

// function truncate (textString, maxLength){
//     let stringLength = textString.length;
//     if (stringLength > maxLength){
//         return textString.slice(0, maxLength) + "...";
//     } else {
//         return textString;
//     }
// }

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

// // Question 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. 

// // a) Add 2 new values to the end
// // b) Add 2 new values to the beginning
// // c) Sort the values alphabetically
// // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
// // e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// // a)
// animals.push("Bear", "Cat");
// // b)
// animals.unshift("Dog", "Antelope");
// // c)
// animals.sort();
// // d)
// function replaceMiddleAnimal(newAnimal) {
//     const totalAnimals = animals.length;
//     const middleIndex = Math.ceil(totalAnimals/2);
    
//     animals[middleIndex] = newAnimal;
// }
// replaceMiddleAnimal("Eagle");

// // e)
// function findMatchingAnimals(beginsWith){
//     let filteredAnimals = [];
//     for (let i=0; i < animals.length; i++){
//         let animalString = animals[i].toLowerCase();
//         let inputStringLowerCase = beginsWith.toLowerCase();

//         if (animalString.startsWith(inputStringLowerCase)){
//             filteredAnimals.push(animals[i]);
//         }
//     }
//     return filteredAnimals;
// }

// console.log(findMatchingAnimals("ca"));
// console.log(animals);

// // Question 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.

// //The function should remove all dashes, and uppercase the first letter of each word after a dash.

// function camelCase(cssProp){
//     let words = cssProp.split("-");
//     let firstWord = words[0];
//     let otherWords = words.slice(1);

//     let outputCamelCase = firstWord;
//     for (i in otherWords) {
//         let firstLetter = otherWords[i][0].toUpperCase();
//         let otherLetters = otherWords[i].slice(1);
//         let newWord = firstLetter + otherLetters;
//         outputCamelCase += newWord;
//     }

//     return outputCamelCase;
// }

// //b) Create variants of the camelCase function that use different types of for loops, and

// function camelCase(cssProp){
//     let words = cssProp.split("-");
//     let firstWord = words[0];

//     let outputCamelCase = firstWord;
//     for (let i=1; i < words.length; i++) {
//         let firstLetter = words[i][0].toUpperCase();
//         let otherLetters = words[i].slice(1);
//         let newWord = firstLetter + otherLetters;
//         outputCamelCase += newWord;
//     }

//     return outputCamelCase;
// }

// //c) with and without the conditional operator.

// function camelCase(cssProp){
//     let words = cssProp.split("-");
//     let firstWord = words[0];

//     let outputCamelCase = firstWord;
//     for (i in words) {
//         if (words[i] === firstWord){
//             //pass
//         } else {
//             let firstLetter = words[i][0].toUpperCase();
//             let otherLetters = words[i].slice(1);
//             let newWord = firstLetter + otherLetters;
//             outputCamelCase += newWord;
//         }
//     }

//     return outputCamelCase;
// }

// console.log(camelCase("margin-left"));

// // Question 5. 
// // a) why doesn't this work?
// let twentyCents = 0.20;
// let tenCents = 0.10
// let fixedTwenty = Number(twentyCents.toFixed(2));
// let fixedTen = Number(tenCents.toFixed(2));
// console.log(fixedTwenty + fixedTen) //why is this not working?
// // answer: because toFixed returns a string

// // b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
// function currencyAddition(float1, float2){
//     let result = float1 + float2;

//     return parseFloat(result.toFixed(2));
// }
// console.log(currencyAddition(5.5,6.2));

// // c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// function currencyOperation(float1, float2, operation, numDecimals){
//     let fixedNumber1 = parseFloat(float1.toFixed(numDecimals));
//     let fixedNumber2 = parseFloat(float2.toFixed(numDecimals));
//     let result = 0;

//     switch (operation){
//         case "+":
//             result = fixedNumber1 + fixedNumber2;
//             return parseFloat(result.toFixed(numDecimals));
//         case "-":
//             result = fixedNumber1 - fixedNumber2;
//             return parseFloat(result.toFixed(numDecimals));
//         case "/":
//             result = fixedNumber1 / fixedNumber2;
//             return parseFloat(result.toFixed(numDecimals));
//         case "*":
//             result = fixedNumber1 * fixedNumber2;
//             return parseFloat(result.toFixed(numDecimals));
//     }
// }

// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+', 2)) // true

// // Question 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray. Test with the following arrays and create another one of your own.

// const unique = (duplicatesArray) => {
//     let noDuplicates = [];

//     for (let i=0; i < duplicatesArray.length ; i++){
//         if (!noDuplicates.includes(duplicatesArray[i])){
//             noDuplicates.push(duplicatesArray[i]);
//         }
//     }

//     return noDuplicates;
// }

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

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



console.log("debug");