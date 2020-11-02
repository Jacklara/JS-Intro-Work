//Every Easy
let firstNumber = 40;
let secondNumber = 14;
let difference = (firstNumber - secondNumber);
console.log(`The difference between ${firstNumber} and ${secondNumber} is ${difference}`);

//Easy
let firstName = "David";
let secondName = "Matthew";
console.log(`The name ${secondName} has two more letter than ${firstName}.`)

//Medium
let saySomething = prompt("Type something here");
if (saySomething === saySomething.toUpperCase()) {
    console.log('Why are you shouting?')
} else if (saySomething === saySomething.toLowerCase()) {
    console.log('Why are you whispering?')
} else {
    console.log('You are talking normally.')
}

//Hard
function add(num1, num2) {
    let answerOne = num1 + num2
    return answerOne
}

function subtract(num1, num2) {
    let answerTwo = num1 - num2
    return answerTwo
}

function multiply(num1, num2) {
    let answerThree = num1 * num2
    return answerThree
}

function divide(num1, num2) {
    let answerFour = num1 / num2
    return answerFour
}

//Very Hard
let firstNum = Number(prompt('First Number'))
let chooseOperator = prompt('Operator')
let secondNum = Number(prompt('Second Number'))

if (chooseOperator === '+') {
    console.log(`${firstNum} ${chooseOperator} ${secondNum} = ${add(firstNum, secondNum)}`) 
} else if (chooseOperator === '-') {
    console.log(`${firstNum} ${chooseOperator} ${secondNum} = ${subtract(firstNum, secondNum)}`)
} else if (chooseOperator === '*') {
    console.log(`${firstNum} ${chooseOperator} ${secondNum} = ${multiply(firstNum, secondNum)}`)
} else if (chooseOperator === "/") {
    console.log(`${firstNum} ${chooseOperator} ${secondNum} = ${divide(firstNum, secondNum)}`)
}