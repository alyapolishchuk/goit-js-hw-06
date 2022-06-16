const bodyStyle = document.querySelector('body');
const buttonStyle = document.querySelector('.change-color');
const spanStyle = document.querySelector('.color');

buttonStyle.addEventListener("click", testClick);

function testClick(event) {
  const color = getRandomHexColor();
  bodyStyle.style.backgroundColor = color;
  spanStyle.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}