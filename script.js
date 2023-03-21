const container1 = document.querySelector('.numbers1');
const container2 = document.querySelector('.numbers2');
const container3 = document.querySelector('.numbers3');

for (let i = 1; i < 8; i = i + 3) {
    const number = document.createElement('button');
    number.textContent = `${i}`;
    container1.insertBefore(number, container1.firstChild);
};

for (let i = 2; i < 9; i = i + 3) {
    const number = document.createElement('button');
    number.textContent = `${i}`;
    container2.insertBefore(number, container2.firstChild);
}

for (let i = 3; i < 10; i = i + 3) {
    const number = document.createElement('button');
    number.textContent = `${i}`;
    container3.insertBefore(number, container3.firstChild);
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')
const allClear = document.querySelector('.all-clear')
const clear = document.querySelector('.clear')
const equal = document.querySelector('.equal')

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (a, operator, b) {
    if (operator === 'x') {
        return multiply(a, b);
    } else if (operator === '/') {
        if (b !== 0) {
        return divide(a, b);
        } else {
            return "ERROR"
        }
    } else if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else {
        return 'ERROR';
    }
};

const arr = [];
const operations = [];

for (const but of buttons) { 
    if (but !== clear && but !== equal) {
        but.addEventListener('click', () => {
            arr.push(but.textContent);
            if (but.textContent === 'x' || but.textContent === '/' || but.textContent === '+' || but.textContent === '-') {
                operations.push(but.textContent);
            }
            display.textContent += but.textContent;
            });
    } else if (but === equal) {
        but.addEventListener('click', () => {
            for (let i = 0; i < operations.length; i++) {
                if (operations.length === 1) {
                    const initialIndex = arr.findIndex(op => op === 'x' || op === '/' || op === '+' || op === '-');
                    display.textContent = operate(parseInt(arr.slice(0, initialIndex).join('')), arr[initialIndex], parseInt(arr.slice(initialIndex + 1, arr.length).join('')));
                } else if (operations.length > 1) {
                let initialIndex = arr.findIndex(op => op === 'x' || op === '/' || op === '+' || op === '-');
                let previousOperant = operate(parseInt(arr.slice(0, initialIndex).join('')), arr[initialIndex], parseInt(arr.slice(initialIndex + 1, arr.length).join('')));
                arr.splice (initialIndex, initialIndex);
                let newIndex = arr.findIndex(op => op === 'x' || op === '/' || op === '+' || op === '-');
                display.textContent = operate(previousOperant, arr[newIndex], parseInt(arr.slice(newIndex + 1, arr.length)));
                initialIndex = newIndex;
             }};
    })
}};

allClear.onclick = () => {
    arr.splice(0, arr.length);
    operations.splice(0, operations.length);
    return display.textContent = "";
}
