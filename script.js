let currentInput = "";
let currentOperator = "";
let firstOperand = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function setOperation(operator) {
    if (currentInput === "") return;
    firstOperand = currentInput;
    currentOperator = operator;
    currentInput = "";
}

function calculateResult() {
    if (firstOperand === "" || currentInput === "") return;
    
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2; 
            break;
        default: return;
    }

    document.getElementById("display").value = result;
    currentInput = result.toString();
}

function clearDisplay() {
    currentInput = "";
    firstOperand = "";
    currentOperator = "";
    document.getElementById("display").value = "";
}
