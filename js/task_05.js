const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');
// console.log(spanRef);
// spanRef.style.color = 'teal';

inputRef.addEventListener('input', () => {
  spanRef.textContent = inputRef.value;
});

inputRef.addEventListener('blur', () => {
  inputRef.style.background = 'pink';
  spanRef.textContent = 'незнакомец';
  spanRef.style.color = 'black';
});

inputRef.addEventListener('focus', () => {
  inputRef.style.background = '';
  spanRef.textContent = inputRef.value;
  spanRef.style.color = 'teal';
});
