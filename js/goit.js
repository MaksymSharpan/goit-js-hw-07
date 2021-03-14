// const peopleRef = document.querySelector('#people-list');
// peopleRef.style.listStyle = 'none';

// const itemRef = peopleRef.querySelectorAll('.person');
// console.log(itemRef);

// itemRef.forEach(item => (item.style.fontWeight = 'bold'));

// const elementBgc = document.querySelectorAll('.person:nth-child(2n)');
// elementBgc.forEach(elem => (elem.style.backgroundColor = 'grey'));

// [...itemRef].forEach(item => (item.style.fontWeight = 'bold'));
// console.log();

// for (let i = 1; i < itemRef.length; i += 2) {
//   itemRef[i].style.backgroundColor = 'grey';
// }

const liElWithId = document.querySelector('#third-item');
const parentLi = liElWithId.parentElement;
const listEl = parentLi.children;

parentLi.style.listStyle = 'none'; // 1

const paragraphWithId = document.querySelector('#main-text');
const firstParentWithClass = paragraphWithId.closest('.main'); // 2
for (const elem of firstParentWithClass.children) {
  elem.style.fontWeight = 'bold';
  elem.style.color = 'red';
}

const siblingEl = document.querySelector('.main-menu-item.active'); //3
console.log(siblingEl);

const botSibling = siblingEl.nextElementSibling;
console.log(botSibling);
const topSibling = siblingEl.previousElementSibling;

botSibling.style.fontWeight = 'bold';
topSibling.style.fontWeight = 'bold';
