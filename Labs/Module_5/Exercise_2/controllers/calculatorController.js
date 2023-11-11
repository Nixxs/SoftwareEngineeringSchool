const claculator = require("../libraries/Calculator")



const add = (req, res) => {
    let calc = new claculator

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    res.status(200);
    res.json({ result: calc.add(number1, number2) });
}

const subtract = (req, res) => {
    let calc = new claculator
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    res.status(200);
    res.json({ result: calc.subtract(number1, number2) });
}

const divide = (req, res) => {
    let calc = new claculator
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    res.status(200);
    res.json({ result: calc.divide(number1, number2) });
}

const multiply = (req, res) => {
    let calc = new claculator
    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    res.status(200);
    res.json({ result: calc.multiply(number1, number2) });
}

module.exports = {
    add,
    subtract,
    divide,
    multiply
}