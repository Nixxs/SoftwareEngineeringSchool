
function add(num1, num2){
    console.log(3)
    fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result-output").value = data.result;
      });    
} 

function subtract(num1, num2){
    fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result-output").value = data.result;
      });    
} 

function divide(num1, num2){
    fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result-output").value = data.result;
      });    
} 

function multiply(num1, num2){
    fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result-output").value = data.result;
      });    
} 

function calculate(){
    let num1 = document.getElementById("input-num-one").value;
    let num2 = document.getElementById("input-num-two").value;
    let operator = document.getElementById("operator-input").value;
    console.log(1)
    switch (operator){
        case "add":
            console.log(2)
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
    }
}