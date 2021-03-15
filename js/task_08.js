const inputValue = document.querySelector('#controls input[type = number]');
const buttonRender = document.querySelector(
  '#controls button[data-action = render]',
);
const buttonDestroy = document.querySelector(
  '#controls button[data-action = destroy]',
);
const boxEl = document.getElementById('boxes');

// inputValue.addEventListener('click', () => {});

buttonRender.addEventListener('click', createBox);

function createBox() {
  let pixel = 0;

  for (let i = 0; i < inputValue.value; i += 1) {
    const firstBox = document.createElement('div');
    firstBox.classList.add('box-style');
    const width = (pixel += 30);

    firstBox.style.width = `${width}px`;
    firstBox.style.height = `${width}px`;
    firstBox.style.backgroundColor = rColor();
    boxEl.append(firstBox);
  }
}
function rColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

buttonDestroy.addEventListener('click', clearBox);
function clearBox() {
  boxEl.innerHTML = '';
}
