// Select the display
const display = document.getElementById('calcDisplay');

// Variables to store calculation data
let currentValue = '';
let operator = '';
let previousValue = '';

const buttons = document.querySelectorAll('.btn');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');
        handleInput(value);
    });
});

document.querySelector('.equal').addEventListener('click', calculateResult);
document.querySelector('.clear').addEventListener('click', clearDisplay);

// Function to handle button clicks
function handleInput(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        currentValue += value;
        display.value = currentValue;
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        previousValue = currentValue;
        currentValue = '';
    } else if (value === '%') {
        currentValue = (parseFloat(currentValue) / 100).toString();
        display.value = currentValue;
    } else if (value === '^2') {
        currentValue = (parseFloat(currentValue) ** 2).toString();
        display.value = currentValue;
    }
}

// Function to calculate and display result
function calculateResult() {
    let result;
    if (operator === '+') {
        result = parseFloat(previousValue) + parseFloat(currentValue);
    } else if (operator === '-') {
        result = parseFloat(previousValue) - parseFloat(currentValue);
    } else if (operator === '*') {
        result = parseFloat(previousValue) * parseFloat(currentValue);
    } else if (operator === '/') {
        result = parseFloat(previousValue) / parseFloat(currentValue);
    }

    display.value = result;
    currentValue = result.toString();
    previousValue = '';
}

// Function to clear the display
function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.value = '';
}
