function RollDice(max){
    const min = 1;
    let randomNumber = Math.random();
    let result = Math.floor((randomNumber * max) + min);

    return result;
}

function RenderDiceResult(faces, targetElementID){
    let result = RollDice(faces);
    let outputMessage = "D" + faces + ": " + result;
    document.getElementById(targetElementID).innerHTML = outputMessage;
}

function DoesRollDiceWork(){
    let diceValue;
    let d6works;
    let d10works;

    diceValue = RollDice(6);
    if (diceValue <= 6 && diceValue >= 1){
        d6works = true;
    }

    diceValue = RollDice(10);
    if (diceValue <= 10 && diceValue >= 1){
        d10works = true;
    }

    if (d6works && d10works){
        return true;
    } else {
        return false;
    }
}

let testResult = DoesRollDiceWork();
if (testResult){
    console.log("roll dice test PASSED");
} else{
    console.error("roll dice test FAILED");
}
