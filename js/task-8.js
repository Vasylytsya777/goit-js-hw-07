const boxRefs = {
	div: document.getElementById("boxes"),
	input: document.querySelector('input[type="number"]'),
	renderButton: document.querySelector('button[data-action="render"]'),
	destroyButton: document.querySelector('button[data-action="destroy"]'),
};
let count;

boxRefs.input.addEventListener("change", event => {
	//console.log(boxRefs.input.value);
	count = event.target.value;
	// return count;
	// createBoxes(amount)
});
console.log(count);

boxRefs.renderButton.addEventListener("click", () => {
	// console.log('renderButton');
	//createBoxes(boxRefs.input.value)
	createBoxes(count);
});
boxRefs.destroyButton.addEventListener("click", () => {
	//console.log('destroyButton');
	destroyBoxes();
});

function createBoxes(amount = 6) {
	let size = 30;
	let colorBox = document.createElement("div");
	colorBox.style.width = size + "px";
	colorBox.style.height = size + "px";
	//console.log(colorBox);

	for (let i = 1; i <= amount; i += 1) {
		//console.log(i);
		size += 10;
		let colorBox = document.createElement("div");
		colorBox.style.width = size + "px";
		colorBox.style.height = size + "px";

		let color = createRgb();
		colorBox.style.backgroundColor = color;
		boxRefs.div.append(colorBox);
	}
}

function createRgb() {
	let red = Math.round(Math.random() * 255);
	//console.log(red);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);
	return `rgb(${red}, ${green}, ${blue})`;
}

function destroyBoxes() {
	boxRefs.div.innerHTML = "";
	boxRefs.input.value = "";
}
