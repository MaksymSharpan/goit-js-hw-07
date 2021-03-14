const counterRef = document.querySelector('#counter');
// console.log(counterRef);
const buttonRem = counterRef.firstElementChild;
// console.log(buttonRem);
const buttonAdd = counterRef.lastElementChild;
// console.log(buttonAdd);
const valueEl = counterRef.querySelector('#value');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

buttonAdd.addEventListener('click', onTargetButtonClickAdd);

function onTargetButtonClickAdd() {
  // console.log('click + ');
  counterValue.increment();
  valueEl.textContent = counterValue.value;
}

buttonRem.addEventListener('click', onTargetButtonClickRem);

function onTargetButtonClickRem() {
  // console.log('click - ');
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
}
buttonAdd.classList.add('buttonAdd');
buttonRem.classList.add('buttonRem');
