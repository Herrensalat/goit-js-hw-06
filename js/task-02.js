/*Task 06.02 - Lopatin
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//document.createElement()

const liIngredients = ingredients.map(ingredient => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = ingredient;
  liIngredient.classList.add('item');
  return liIngredient;
})

const ulIngredients = document.querySelector('ul');
ulIngredients.append(...liIngredients);
