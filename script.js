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
let operations = [];

function arrPush (key) {
    if (key !== equal) {
    arr.push(key);
    if (key === 'x' || key === '/' || key === '+' || key === '-') {
        operations.push(key);
    }
    display.value += key;
}};

function deleteNumber () {
    if (arr[arr.length - 1] === 'x' || arr[arr.length - 1] === '/' || arr[arr.length - 1] === '+' || arr[arr.length - 1] === '-') {
        operations.splice(operations.length - 1, 1);
        arr.splice(arr.length - 1, 1);
        let displayString = display.value.slice(0, display.value.length - 1);
        display.value = displayString;
    } else {
        arr.splice(arr.length - 1, 1);
        let displayString = display.value.slice(0, display.value.length - 1);
        display.value = displayString;
    }
}

function toEqual () {
        for (let i = 0; i < operations.length; i++) {
            let initialIndex = arr.findIndex((index) => (index === 'x' || index === '/' || index === '+' || index === '-'));
            const operation = arr[initialIndex];
            arr.splice(initialIndex, 1);
            let nextIndex = arr.findIndex(index => (index === 'x' || index === '/' || index === '+' || index === '-'));
            if (nextIndex === -1) {
                nextIndex = arr.length;
            };
            let answer = operate(parseFloat(arr.slice(0, initialIndex).join('')), operation, parseFloat(arr.slice(initialIndex, nextIndex).join('')));
            display.value = Math.round((answer + Number.EPSILON) * 100) / 100;
            arr.splice(0, nextIndex, answer);
         }
         operations = [];
        };



for (const but of buttons) {
    if (but !== clear && but !== equal) {
        but.addEventListener('click', () => {
            arr.push(but.textContent);
            if (but.textContent === 'x' || but.textContent === '/' || but.textContent === '+' || but.textContent === '-') {
                operations.push(but.textContent);
            }
            display.value += but.textContent;
            });
    } else if (but === clear) {
        but.addEventListener('click', deleteNumber);
    } else if (but === equal) {
        but.addEventListener('click', toEqual());
    }
    window.lastNum = but;
};

allClear.onclick = () => {
    arr.splice(0, arr.length);
    operations.splice(0, operations.length);
    return display.value = "";
};

document.addEventListener('keydown', (event) => {
    if (event.key === '1') { arrPush(event.key); }
    if (event.key === '2') { arrPush(event.key); }
    if (event.key === '3') { arrPush(event.key); }
    if (event.key === '4') { arrPush(event.key); }
    if (event.key === '5') { arrPush(event.key); }
    if (event.key === '6') { arrPush(event.key); }
    if (event.key === '7') { arrPush(event.key); }
    if (event.key === '8') { arrPush(event.key); }
    if (event.key === '9') { arrPush(event.key); }
    if (event.key === '0') { arrPush(event.key); }
    if (event.key === '+') { arrPush(event.key); }
    if (event.key === '*') { arrPush(event.key); }
    if (event.key === '/') { arrPush(event.key); }
    if (event.key === '-') { arrPush(event.key); }
    if (event.key === 'Backspace') { deleteNumber(); }
    if (event.key === '=') { toEqual(); }
});