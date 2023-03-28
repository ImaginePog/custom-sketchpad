const canvas = document.querySelector(".canvas");
const gridSizeSlider = document.querySelector("#size-slider");
const displaySize = document.querySelector(".size-display");

const resetBtn = document.querySelector(".reset-btn");

const colorSliders = document.querySelectorAll(".color-slider");
const displayRed = document.querySelector(".red-display");
const displayGreen = document.querySelector(".green-display");
const displayBlue = document.querySelector(".blue-display");
const pickedColor = document.querySelector(".picked-color-display");

let color;
let redValue = 0;
let greenValue = 0;
let blueValue = 0;

function paintSquare(e) {
	console.log(color);
	e.target.style.backgroundColor = color;
}

function resetCanvas() {
	canvas.replaceChildren();
	for (let i = 0; i < gridSize; ++i) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < gridSize; ++j) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.addEventListener("mouseenter", paintSquare);

			row.appendChild(square);
		}

		canvas.appendChild(row);
	}
}

function updateGridSize() {
	gridSize = gridSizeSlider.value;
	displaySize.textContent = `Grid Size: ${gridSize}x${gridSize}`;
	resetCanvas();
}

gridSizeSlider.addEventListener("input", updateGridSize);

function updateColorSlider(e) {
	const sliderType = e.target.getAttribute("id");
	console.log(e.target);
	switch (sliderType) {
		case "red":
			redValue = e.target.value;
			displayRed.textContent = `Red: ${redValue}`;
			break;
		case "green":
			greenValue = e.target.value;
			displayGreen.textContent = `Green: ${greenValue}`;
			break;
		case "blue":
			blueValue = e.target.value;
			displayBlue.textContent = `Blue: ${blueValue}`;
			break;
	}
	updateBrush();
}

colorSliders.forEach((slider) => {
	slider.addEventListener("input", updateColorSlider);
});

resetBtn.addEventListener("click", resetCanvas);

function updateBrush() {
	color = `rgb(${redValue},${greenValue},${blueValue})`;
	pickedColor.style.backgroundColor = color;
}

updateGridSize();
updateBrush();
