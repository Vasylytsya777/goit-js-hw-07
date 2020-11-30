/*
Задание 2
В HTML есть пустой список ul#ingredients.
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 после чего вставит все li за одну операцию в список ul.ingredients. 
 Для создания DOM-узлов используй document.createElement().

*/

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const ingridientEl = document.createElement("li");
const ul = document.querySelector("#ingredients");

const markupli = ingredients.reduce((string, item) => string + `<li>${item}</li>`, "");

ul.innerHTML = markupli;

//================ Варіант з MDN ================

// const ul = document.querySelector("#ingredients"); // assuming ul exists
// const fragment = document.createDocumentFragment();
// const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

// ingredients.forEach(function (ingredient) {
// 	const li = document.createElement("li");
// 	li.textContent = ingredient;
// 	fragment.appendChild(li);
// });
// ul.append(fragment);
