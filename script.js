// script.js

const D6 = document.getElementById("D6");
const D10 = document.getElementById("D10");
const D12 = document.getElementById("D12");
const resultElement = document.getElementById("result");

D6.addEventListener("click", rollD6);
D10.addEventListener("click", rollD10);
D12.addEventListener("click", rollD12);

function rollD6() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    displayResult(randomNumber);
}

function rollD10() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    displayResult(randomNumber);
}

function rollD12() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    displayResult(randomNumber);
}

function displayResult(number) {
    resultElement.textContent = "Result: " + number;
}
