// Get buttons from DOM
const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');
const btnFour = document.querySelector('.btn-4');
const btnFive = document.querySelector('.btn-5');
const btnSix = document.querySelector('.btn-6');
const btnSeven = document.querySelector('.btn-7');
const btnEight = document.querySelector('.btn-8');
const btnNine = document.querySelector('.btn-9');
const btnZero = document.querySelector('.btn-0');
const btnDoubleZero = document.querySelector('.btn-00');
const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');
const btnMultiply = document.querySelector('.btn-mul');
const btnDivide = document.querySelector('.btn-divide');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');
const results = document.querySelector('.results');

// Current calculation string
let currentCalculation = '';

// Set HTML as calculation result
const displayResult = (result) => {
  results.textContent = result;
};

// Event listeners
btnOne.addEventListener('click', () => {
  currentCalculation = currentCalculation + '1';
  displayResult(currentCalculation);
});
1 + 1;
btnTwo.addEventListener('click', () => {
  currentCalculation = currentCalculation + '2';
  displayResult(currentCalculation);
});

btnThree.addEventListener('click', () => {
  currentCalculation = currentCalculation + '3';
  displayResult(currentCalculation);
});

btnFour.addEventListener('click', () => {
  currentCalculation = currentCalculation + '4';
  displayResult(currentCalculation);
});

btnFive.addEventListener('click', () => {
  currentCalculation = currentCalculation + '5';
  displayResult(currentCalculation);
});

btnSix.addEventListener('click', () => {
  currentCalculation = currentCalculation + '6';
  displayResult(currentCalculation);
});

btnSeven.addEventListener('click', () => {
  currentCalculation = currentCalculation + '7';
  displayResult(currentCalculation);
});

btnEight.addEventListener('click', () => {
  currentCalculation = currentCalculation + '8';
  displayResult(currentCalculation);
});

btnNine.addEventListener('click', () => {
  currentCalculation = currentCalculation + '9';
  displayResult(currentCalculation);
});

btnZero.addEventListener('click', () => {
  currentCalculation = currentCalculation + '0';
  displayResult(currentCalculation);
});

btnDoubleZero.addEventListener('click', () => {
  currentCalculation = currentCalculation + '00';
  displayResult(currentCalculatioResultn);
});

btnPlus.addEventListener('click', () => {
  currentCalculation = currentCalculation + '+';
  displayResult(currentCalculation);
});

btnMinus.addEventListener('click', () => {
  currentCalculation = currentCalculation + '-';
  displayResult(currentCalculation);
});

btnMultiply.addEventListener('click', () => {
  currentCalculation = currentCalculation + '*';
  displayResult(currentCalculation);
});

btnDivide.addEventListener('click', () => {
  currentCalculation = currentCalculation + '/';

  displayResult(currentCalculation);
});
result;

btnEqual.addEventListener('click', () => {
  currentCalculation = eval(currentCalculation);

  displayResult(currentCalculation);
});

btnClear.addEventListener('click', () => {
  currentCalculation = '';
  displayResult('0');
});
