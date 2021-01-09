const calculatorButtons = document.querySelectorAll('button');
const display = document.querySelector('.display')
var displayNumber = 0;
var number1;
var number2;
var operator = "";

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(Number(num2) === 0) {
        return "Error: Divide by zero."
    }
    return num1/num2;
}

function checkForNumber(number){
    if(isNaN(number)){
        return false;
    }
    return true;
}

function operate(num1, operator, num2) {
    let result = 0;
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        
        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;
        
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
} 

function clear() {
    clearDisplay();
    number1 = 0;
    number2 = 0;
    operator = "";
}

function clearDisplay() {
    displayNumber = 0;
}

calculatorButtons.forEach(calculatorButton => 
    calculatorButton.addEventListener('click', function(e) {
        let calculatorButton = '';
        if(e.key === undefined){
            calculatorButton = this.id;
        }else{
            calculatorButton = e.key;
        }
        if(displayNumber == "0" && calculatorButton !== "0" && calculatorButton !== "."){
            displayNumber = "";
        }
        switch(calculatorButton){
            case "0":
                if(displayNumber != "0"){
                    displayNumber = displayNumber + "0"
                }
                break;

            case "1":
                displayNumber = displayNumber + "1";
                break;

            case "2":
                displayNumber = displayNumber + "2";
                break;

            case "3":
                displayNumber = displayNumber + "3";
                break;

            case "4":
                displayNumber = displayNumber + "4";
                break;

            case "5":
                displayNumber = displayNumber + "5";
                break;

            case "6":
                displayNumber = displayNumber + "6";
                break;
            
            case "7":
                displayNumber = displayNumber + "7";
                break;

            case "8":
                displayNumber = displayNumber + "8";
                break;

            case "9":
                displayNumber = displayNumber + "9";
                break;

            case ".":
                displayNumber = displayNumber + ".";
                break;
            case "*":
                number1 = displayNumber;
                operator = "*";
                clearDisplay();
                break;

            case "/":
                number1 = displayNumber;
                operator = "/";
                clearDisplay();
                break;

            case "+":
                number1 = displayNumber;
                operator = "+";
                clearDisplay();
                break;

            case "-":
                number1 = displayNumber;
                operator = "-";
                clearDisplay();
                break;

            case "=":
                number2 = displayNumber;
                clearDisplay()
                //let result = operate(number1, operator, number2);
                displayNumber = operate(number1, operator, number2)
                break;

            case "C":
                clear();
                break;
        }
        display.textContent = displayNumber;
    })
);