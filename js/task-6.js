/*     
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, 
указывается в его атрибуте data-length.

Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid.
*/

const inputRef = document.querySelector("#validation-input");
const inputLengthRef = Number(inputRef.getAttribute("data-length"));
console.log(inputLengthRef);
console.log(inputRef);

inputRef.addEventListener("blur", handleInputFocus);

function handleInputFocus() {
	if (inputLengthRef === inputRef.value.length) {
		inputRef.classList.add("valid");
		inputRef.classList.remove("invalid");
	} else {
		inputRef.classList.remove("valid");
		inputRef.classList.add("invalid");
	}
}
