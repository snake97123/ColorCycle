let isRunning = false
let redValue = 0;
let blueValue = 0;
let greenValue = 0;
let interval;

const redInput = document.querySelector('#red-input');
const blueInput = document.querySelector('#blue-input');
const greenInput = document.querySelector('#green-input');
const redIncrement = document.querySelector('#red-increment');
const blueIncrement = document.querySelector('#blue-increment');
const greenIncrement = document.querySelector('#green-increment');
const colorBox = document.querySelector('.color-box');
const startStopButton = document.querySelector('#start-stop-button');

startStopButton.addEventListener('click', () => {
  if(isRunning) {
    clearInterval(interval);
    isRunning = false;
    startStopButton.textContent = '開始';
  } else {
    isRunning = true;
    startStopButton.textContent = '停止';
    interval = setInterval(updateColor, 250)
  }
});

function updateColor() {
  let red = parseInt(redValue, 16);
  let blue = parseInt(blueValue, 16);
  let green = parseInt(greenValue, 16);

  red = (red + parseInt(redIncrement.value, 16)) % 256;
  blue = (blue + parseInt(blueIncrement.value, 16)) % 256;
  green = (green + parseInt(greenIncrement.value, 16)) % 256;

  redValue = red.toString(16).padStart(2, '0');
  blueValue = blue.toString(16).padStart(2, '0');
  greenValue = green.toString(16).padStart(2, '0');

  colorBox.style.backgroundColor = `rgb(${parseInt(redValue, 16)}, ${parseInt(greenValue, 16)}, ${parseInt(blueValue, 16)})`;
}