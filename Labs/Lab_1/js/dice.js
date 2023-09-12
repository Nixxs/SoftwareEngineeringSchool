function RollDice(faces){
    let min = 1;
    let randomNumber = Math.random();
    let result = Math.floor((randomNumber * faces) + min)

    let outputMessage = "D" + faces + ": " + result;
    document.getElementById("resultOutput").innerHTML = outputMessage;
    
    return result;
}
