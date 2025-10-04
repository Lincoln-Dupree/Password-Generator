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
    // calling addNumbers()/addSymbols() twice to fix weighting
    addNumbers();
    addNumbers();
    addSymbols();
    addSymbols();
}

const allCheckboxes = document.querySelectorAll(".checkbox");
const strBox1 = document.querySelector(".str-box-1");
const strBox2 = document.querySelector(".str-box-2");
const strBox3 = document.querySelector(".str-box-3");
const strBox4 = document.querySelector(".str-box-4");
const allStrBoxes = document.querySelectorAll(".str-box");
const strengthScoreLabel = document.querySelector(".strength-label");

function strengthDisplay(count) {
    // reset strength color boxes
    for (let each of allStrBoxes) {
        each.style.backgroundColor = "transparent";
        each.style.border = "1px solid var(--gray-200)";
    }

    // reset label styling
    strengthScoreLabel.style.opacity = "0";
    strengthScoreLabel.style.color = "var(--gray-200)";

    let numChecked = 0;
    let score = 0;

    for (let box of allCheckboxes) {
        if (box.checked) {
            numChecked += 1;
        }
    }

    score = count * numChecked;
    console.log(score);

    if (score === 0) {
        return
    } else if (score < 21) {
        strengthScoreLabel.style.opacity = "1";
        strengthScoreLabel.innerText = "BAD";
        strengthScoreLabel.style.color = "var(--red-500)";
        strBox1.style.backgroundColor = "var(--red-500)";
        strBox1.style.border = "1px solid var(--red-500)";
    } else if (score >= 21 && score < 41) {
        strengthScoreLabel.style.opacity = "1";
        strengthScoreLabel.innerText = "LOW";
        strengthScoreLabel.style.color = "var(--orange-400)";
        strBox1.style.backgroundColor = "var(--orange-400)";
        strBox1.style.border = "1px solid var(--orange-400)";
        strBox2.style.backgroundColor = "var(--orange-400)";
        strBox2.style.border = "1px solid var(--orange-400)";
    } else if (score >= 41 && score < 60) {
        strengthScoreLabel.style.opacity = "1";
        strengthScoreLabel.innerText = "MEDIUM";
        strengthScoreLabel.style.color = "var(--yellow-300)";
        strBox1.style.backgroundColor = "var(--yellow-300)";
        strBox1.style.border = "1px solid var(--yellow-300)";
        strBox2.style.backgroundColor = "var(--yellow-300)";
        strBox2.style.border = "1px solid var(--yellow-300)";
        strBox3.style.backgroundColor = "var(--yellow-300)";
        strBox3.style.border = "1px solid var(--yellow-300)";
    } else if (score >= 60) {
        strengthScoreLabel.style.opacity = "1";
        strengthScoreLabel.innerText = "HIGH";
        strengthScoreLabel.style.color = "var(--green-200)";
        strBox1.style.backgroundColor = "var(--green-200)";
        strBox1.style.border = "1px solid var(--green-200)";
        strBox2.style.backgroundColor = "var(--green-200)";
        strBox2.style.border = "1px solid var(--green-200)";
        strBox3.style.backgroundColor = "var(--green-200)";
        strBox3.style.border = "1px solid var(--green-200)";
        strBox4.style.backgroundColor = "var(--green-200)";
        strBox4.style.border = "1px solid var(--green-200)";
    }
}

const generateBtn = document.querySelector(".generate-btn");
const passwordInput = document.querySelector(".password-input");

generateBtn.addEventListener("click", function () {
    // clear previous click choices and make list
    possibleCharsList = [];
    updatePossibleChars();


    // generate password
    let genPassword = [];
    let count = Number(rangeSlider.value);

    if (possibleCharsList.length > 0) {
        let numPossible = possibleCharsList.length;

        for (let i = 0; i < count; i++) {
            let randomNum = Math.floor(Math.random() * numPossible);
            let randomChar = possibleCharsList[randomNum];

            genPassword.push(randomChar)
        }

        passwordInput.style.color = "var(--gray-200)"
        passwordInput.value = genPassword.join("");
        passwordInput.style.fontStyle = "normal";

    } else {
        passwordInput.value = "No Option Selected";
        passwordInput.style.color = "var(--red-500)";
        passwordInput.style.fontStyle = "italic";
    }

    // update strength display
    strengthDisplay(count);
});

const copyButton = document.querySelector(".copy-icon");

copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(passwordInput.value);
    alert(`Password Copied: ${passwordInput.value}`)
})