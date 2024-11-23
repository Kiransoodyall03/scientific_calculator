let expression = '';

function press(value) {
  // Handle inputs and append to expression
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    // Parsing logic, this will handle operations without using eval()
    let result = evaluateExpression(expression);
    document.getElementById('display').value = result;
    expression = result; // To continue calculation with the result
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function evaluateExpression(expr) {
    if (expr.includes('sqrt')) {
      return Math.sqrt(parseFloat(expr.replace('sqrt', '')));
    }
    // Add more parsing and function handling
  }
  
