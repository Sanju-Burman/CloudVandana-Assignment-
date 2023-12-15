let currentInput = '0';
let operation = null;
let previousInput = '';

function clearScreen() {
  currentInput = '0';
  operation = null;
  previousInput = '';

  document.getElementById('display').value = currentInput;
}

function appendNumber(number) {
  if(currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operation = operator;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero!');
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
    if (operation != null) {
      document.getElementById('display').value = previousInput + ' ' + operation + ' ' + currentInput;
    } else {
      document.getElementById('display').value = currentInput;
    }
  }

window.onload = clearScreen;
