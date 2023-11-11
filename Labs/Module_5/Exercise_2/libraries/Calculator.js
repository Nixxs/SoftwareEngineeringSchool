const log = require("../libraries/Logger");

let logger = new log

class Calculator{
    constructor(){
        this.id = Math.floor(Math.random() *10000)
    }

    add(num1, num2){
        let result = num1 + num2
        logger.log(`${this.id} add: ${result}`)
        return result
    }

    subtract(num1, num2){
        let result = num1 - num2
        logger.log(`${this.id} subtract: ${result}`)
        return result
    }

    divide(num1, num2){
        let result = num1 / num2
        logger.log(`${this.id} divide: ${result}`)
        return result
    }

    multiply(num1, num2){
        let result = num1 * num2
        logger.log(`${this.id} multiply: ${result}`)
        return result
    }
}

module.exports = Calculator