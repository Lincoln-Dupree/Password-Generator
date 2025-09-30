"use strict";

const rangeSlider = document.querySelector(".range-slider");

function updateRangeSliderColor(slider) {
    let min = Number(slider.min);
    let max = Number(slider.max);
    let current_pos = Number(slider.value);

    let percentage = ((current_pos - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, var(--green-200) 0%, var(--green-200) ${percentage}%, var(--gray-850) ${percentage}%, var(--gray-850) 100%)`;
}

updateRangeSliderColor(rangeSlider);

rangeSlider.addEventListener("input", function () {
    updateRangeSliderColor(rangeSlider);
});