const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', fontSize);

function fontSize() {
  const size = this.value;
  textRef.style.fontSize = size + 'px';
}
