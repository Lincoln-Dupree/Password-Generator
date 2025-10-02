"use strict";

const rangeSlider = document.querySelector(".range-slider");
const rangeCounter = document.querySelector(".range-counter");

// ***SLIDER FUNCTIONALITY***

function updateRangeSliderColor(slider) {
    let min = Number(slider.min);
    let max = Number(slider.max);
    let current_pos = Number(slider.value);

    let percentage = ((current_pos - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, var(--green-200) 0%, var(--green-200) ${percentage}%, var(--gray-850) ${percentage}%, var(--gray-850) 100%)`;
}

function updateRangeCounter(slider) {
    let current_pos = Number(slider.value);

    rangeCounter.textContent = current_pos;
}

updateRangeSliderColor(rangeSlider);
updateRangeCounter(rangeSlider)

rangeSlider.addEventListener("input", function () {
    updateRangeSliderColor(rangeSlider);
    updateRangeCounter(rangeSlider);
});

// ***PASSWORD OPTIONS ARRAYS***

const lowercaseList = [];
const uppercaseList = [];
const digitsList = [];
const symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+", "-", "="];
let possibleCharsList = [];

for (let i = 97; i <= 122; i++) {
    lowercaseList.push(String.fromCharCode(i));
}

for (let i = 65; i <= 90; i++) {
    uppercaseList.push(String.fromCharCode(i));
}

for (let i = 0; i <= 9; i++) {
    digitsList.push(i.toString());
}

const uppercaseCheck = document.querySelector(".uppercase");
const lowercaseCheck = document.querySelector(".lowercase");
const numbersCheck = document.querySelector(".numbers");
const symbolsCheck = document.querySelector(".symbols");
const generateBtn = document.querySelector(".generate-btn");

function addUppercase() {
    if (uppercaseCheck.checked)
        for (let char of uppercaseList) {
            possibleCharsList.push(char);
        }
}

function addLowercase() {
    if (lowercaseCheck.checked)
        for (let char of lowercaseList) {
            possibleCharsList.push(char);
        }
}

function addNumbers() {
    if (numbersCheck.checked)
        for (let char of digitsList) {
            possibleCharsList.push(char);
        }
}

function addSymbols() {
    if (symbolsCheck.checked)
        for (let char of symbolsList) {
            possibleCharsList.push(char);
        }
}

function updatePossibleChars() {
    addUppercase();
    addLowercase();
    addNumbers();
    addSymbols();
}

generateBtn.addEventListener("click", function () {
    // clear previous click choices and make list
    possibleCharsList = [];
    updatePossibleChars();

    let genPassword = [];
    let count = Number(rangeSlider.value);

    if (possibleCharsList.length > 0) {
        numPossible = possibleCharsList.length;

        for (let i = 0; i < count; i++) {
            randomChoice = Math.round(Math.random() * numPossible);
        }
    }




});