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

// function sum (array) {
//     const total = array.reduce((total, number) => {
//         return total + number;
//     }) 
//     return total;
// }

function operate (a, operator, b) {
    if (operator === 'x') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else {
        return 'ERROR';
    }
};

let i = 0;

for (const but of buttons) { 
    if (but === equal) {
        but.addEventListener('click', () => {
            let str1 = display.textContent.slice(0, 1);
            let str2 = display.textContent.slice(1, 2);
            let str3 = display.textContent.slice(2, 3);
            display.textContent = (operate(parseInt(str1), str2, parseInt(str3)));
        })
    } else if (but !== clear) {
        but.addEventListener('click', () => {
        display.textContent += but.textContent;
    })
}};

allClear.onclick = () => {
    return display.textContent = "";
}


