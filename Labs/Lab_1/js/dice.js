function RollDice(faces){
    let min = 1;
    let randomNumber = Math.random();
    let result = Math.floor((randomNumber * faces) + min)

    return result;
}
