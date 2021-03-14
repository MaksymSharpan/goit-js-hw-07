// part 1
const categoriesEl = document.querySelector('#categories'); // получаем ссылку
// console.log(categoriesEl);
const countCategories = value => {
  const countChild = categoriesEl.children.length; // можно и без доп. переменной
  return `В списке ${countChild} категории.`;
};
console.log(countCategories(categoriesEl));

//part 2
const itemOfCategoriesEl = categoriesEl.querySelectorAll('.item');
// console.log(itemOfCategoriesEl);

itemOfCategoriesEl.forEach(category => {
  console.log(
    `Категория: ${category.firstElementChild.textContent} \nКолличество элементов: ${category.lastElementChild.children.length}`,
  );
});
