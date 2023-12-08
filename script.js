let calculation = '';
let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function calculateNumber(number) {
    if (calculation > 0) {
        calculation = '';
    }
    calculation += number;
    display.innerText = calculation;
    console.log(calculation)
}

function mathOperations(operation) {
    // if (calculation === '') {
    //     calculation = '0';
    // }
    calculation += operation;
    display.innerText = calculation;
    console.log(calculation)
}

function result () {
    eval(calculation);
    calculation = eval(calculation);
    display.innerText = calculation;
    console.log(calculation)
}