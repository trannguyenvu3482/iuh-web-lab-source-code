const inputOne = document.querySelector('.inputOne');
const btnOne = document.querySelector('.btnOne');
const inputTwo = document.querySelector('.inputTwo');
const btnTwo = document.querySelector('.btnTwo');

btnOne.addEventListener('click', () => {
  const value = inputOne.value;
  const regex = /^0\d{9}$/g;
  if (regex.test(value)) {
    alert('Chuỗi nhập vào hợp lệ');
  } else {
    alert('Chuỗi nhập vào không hợp lệ');
  }
});

btnTwo.addEventListener('click', () => {
  const value = inputTwo.value;
  const regex = /^[A-Za-z]+$/;

  if (regex.test(value)) {
    alert('Chuỗi nhập vào hợp lệ');
  } else {
    alert('Chuỗi nhập vào không hợp lệ');
  }
});
