function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyBackground = document.querySelector(`body`);
const changeColorBtn = document.querySelector(`.change-color`);
const colorName = document.querySelector(".color");

const changeColor = () => {
  bodyBackground.style.backgroundColor=getRandomHexColor();
  colorName.textContent=bodyBackground.style.backgroundColor
};

changeColorBtn.addEventListener('click', changeColor);