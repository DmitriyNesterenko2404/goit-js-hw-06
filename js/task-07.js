const fontSizeControl = document.querySelector(`#font-size-control`);
// console.log(fontSizeControl); 

const text = document.querySelector(`#text`);
// console.log(text);

const changeFontSize = () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
    // console.log(text.style.fontSize); // покажет размер шрифта в консоли
};

fontSizeControl.addEventListener(`input`, changeFontSize);
fontSizeControl.dispatchEvent(new Event('input'));