//============ 1 вар ================
const resultFirstLi = document.querySelectorAll(".item");
const liCatRefLength = resultFirstLi.length;
console.log(`В списке ${liCatRefLength} категории.`);
const resultUl = [...document.querySelector("#categories").children];
resultUl.forEach(listItem => {
	let nameCategory = listItem.firstElementChild.textContent;
	let nameCategoryLength = listItem.lastElementChild.children.length;
	console.log(`Категория: ${nameCategory} \nКоличество элементов: ${nameCategoryLength}`);
});
