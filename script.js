"use strict";

const rangeSlider = document.querySelector(".range-slider");
const rangeCounter = document.querySelector(".range-counter");
const lowercaseList = [];
const uppercaseList = [];
const digitsList = [];
const symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+", "-", "="];


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

for (let i = 97; i <= 122; i++) {
    lowercaseList.push(String.fromCharCode(i));
}


for (let i = 65; i <= 90; i++) {
    uppercaseList.push(String.fromCharCode(i));
}


for (let i = 0; i <= 9; i++) {
    digitsList.push(i.toString());
}




