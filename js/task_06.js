const inputValidation = document.getElementById('validation-input');
const valueAttribute = inputValidation.getAttribute('data-length');
// console.log(Number(valueAttribute));

inputValidation.addEventListener('input', validationValue);
// console.log(inputValidation.value.length);

function validationValue() {
  const inputLength = this.value.length;
  if (inputLength === Number(valueAttribute)) {
    // console.log(inputLength === Number(valueAttribute));
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
  }
}

//  либо тернарник

// inputLength === Number(valueAttribute)
//   ? (inputValidation.classList.add('valid'),
//     inputValidation.classList.remove('invalid'))
//   : (inputValidation.classList.add('invalid'),
//     inputValidation.classList.remove('valid'));
