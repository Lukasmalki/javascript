let calculation = '';
let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let isResult = false;

let str = 'hej';

function calculateNumber(number) {
    if (isResult === true) {
        calculation = '';
    }
    isResult = false;
    calculation += number;
    display.innerText = calculation;
    console.log(calculation)
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

let operationObject = [];

function mathOperations(operation) {
    // if (operationObject.length < 1) {
    //     operationObject.push(operation)
    //     console.log(operationObject)
    // } else {
    //     operationObject.splice(0, 1, operation)
    //     console.log(operationObject)
    // }

    if (calculation === '') {
        calculation = 0;
        calculation += operation;
        display.innerText = calculation;
    } else {
        const displayInnertext = display.innerText;
        if (' '+displayInnertext[displayInnertext.length-1]+' ' !== operation){

            if (displayInnertext[displayInnertext.length-1] === '/' || displayInnertext[displayInnertext.length-1] === '*' || displayInnertext[displayInnertext.length-1] === '-' || displayInnertext[displayInnertext.length-1] === '+') {
                display.innerText=display.innerText.replaceAt(display.innerText.length-2, operation)
                calculation = display.innerText;
            } else {
                calculation += operation;

            }
        display.innerText = calculation;
        console.log(calculation)
    }
    }
    isResult = false;

    if (calculation.includes(operation)) {
        calculation.replace(operation, operation);
    }
    // calculation = calculation.slice(-3);
    // console.log(lastChar)
    // if (lastChar === operation) {
    //     console.log('hej');
    //     calculation.replace(lastChar, operation)
    //     console.log(calculation)
    // }
}

function result () {
    eval(calculation);
    calculation = eval(calculation);
    display.innerText = calculation;
    console.log(calculation)
    isResult = true;
}