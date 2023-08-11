// Task 06.01 - Lopatin
// Напиши скрипт который:
// (1) Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const liItem = document.querySelectorAll("li.item");
console.log("Number of categories:", liItem.length);

// (2) Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории(всех вложенных в него < li >).
liItem.forEach((element) => {
    let h2 = element.querySelector("h2");;
    let ul = element.querySelectorAll("ul li");
    console.log("Category:", h2.textContent,"\nElements:",ul.length);
});