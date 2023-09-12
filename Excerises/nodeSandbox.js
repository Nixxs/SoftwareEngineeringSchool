function Sum(A,B){
    var value = A+B;
    console.log(value);
    return(value)
}

function Multiply(A,B){
    var value = A*B;
    console.log(value);
    return(value)
}

function Subtract(A,B){
    var value = A-B;
    console.log(value);
    return(value)
}

function Pie(){
    var value = 333/106;
    console.log(value);
    return(value)
}

Sum(123,45)
Multiply(2,8)
Subtract(30,20)
Pie();

const isOdd = require("is-odd");

console.log(isOdd(1));
console.log(isOdd(4));

//npm install -g thanos-js
//thanos-js snap-fingers --with-infinity-gauntlet-glove

var fruits = ["apple", "orange", "banana", "grape", "strawberry"];
console.log(fruits);
fruits[1] = "pineapple";
fruits[4] = "coconut";
console.log(fruits);