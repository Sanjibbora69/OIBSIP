const display = document.getElementById('result');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}
