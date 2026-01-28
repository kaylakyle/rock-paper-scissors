const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const backspaceButton = document.querySelector('.backspace');

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

// Basic math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return " Cannot divide by 0!";
  return a / b;
}

// Operate function
function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch(operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return null;
  }
}

// Update display
function updateDisplay(value) {
  display.textContent = value;
}

// Append number to display
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (shouldResetDisplay) {
      display.textContent = '';
      shouldResetDisplay = false;
    }
    if (display.textContent === '0') display.textContent = '';
    display.textContent += button.textContent;
  });
});

// Handle decimal
decimalButton.addEventListener('click', () => {
  if (shouldResetDisplay) {
    display.textContent = '';
    shouldResetDisplay = false;
  }
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
});

// Operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentOperator !== null) {
      if (!shouldResetDisplay) evaluate();
    }
    firstNumber = display.textContent;
    currentOperator = button.textContent;
    shouldResetDisplay = true;
  });
});

// Equals button
equalsButton.addEventListener('click', evaluate);

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondNumber = display.textContent;
  const result = operate(currentOperator, firstNumber, secondNumber);
  display.textContent = Math.round(result * 100000) / 100000; // round long decimals
  firstNumber = display.textContent;
  currentOperator = null;
  shouldResetDisplay = true;
}

// Clear button
clearButton.addEventListener('click', () => {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
  shouldResetDisplay = false;
});

// Backspace button
backspaceButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === '') display.textContent = '0';
});
