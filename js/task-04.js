const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const result = document.querySelector("#value");
let counterValue = 0;

const minusOne = () => {
    counterValue = counterValue - 1;
    result.textContent = counterValue;
};

const plusOne = () => {
    counterValue = counterValue + 1;
    result.textContent = counterValue;
};

decrementBtn.addEventListener("click", minusOne);
incrementBtn.addEventListener("click", plusOne);