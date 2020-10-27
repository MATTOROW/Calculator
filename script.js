const button = document.querySelectorAll('.button');
let display_value = document.querySelector('.calculator_display').textContent
const display = document.querySelector('.calculator_display')

function getValue(elem) {
    value = elem.textContent;
    display_value += value;
    display.innerHTML = display_value;
}

function Eval() {
    display.innerHTML = eval(display_value);
}

function deleteALL() {
    display_value = ''
    display.innerHTML = display_value
}