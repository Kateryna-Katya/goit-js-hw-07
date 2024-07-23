function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroudChangeColor = document.querySelector(`.change-color`);

const getNewColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
}



backgroudChangeColor.addEventListener(`click`, getNewColor);
