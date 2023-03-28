/*** DOM CONSTANTS ***/
const canvas = document.querySelector(".canvas");
const gridSizeSlider = document.querySelector("#size-slider");
const displaySize = document.querySelector(".size-display");

const resetBtn = document.querySelector(".reset-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const randomBtn = document.querySelector(".random-btn");

const colorSliders = document.querySelectorAll(".color-slider");
const displayRed = document.querySelector(".red-display");
const displayGreen = document.querySelector(".green-display");
const displayBlue = document.querySelector(".blue-display");
const pickedColor = document.querySelector(".picked-color-display");

/*** UPDATE ***/
let color;
let redValue = 0;
let greenValue = 0;
let blueValue = 0;

function updateGridSize() {
	gridSize = gridSizeSlider.value;
	displaySize.textContent = `Grid Size: ${gridSize}x${gridSize}`;
	resetCanvas();
}

function updateBrush() {
	displayRed.textContent = `Red: ${redValue}`;
	displayGreen.textContent = `Green: ${greenValue}`;
	displayBlue.textContent = `Blue: ${blueValue}`;
	colorSliders.forEach((slider) => {
		const sliderType = slider.getAttribute("id");
		switch (sliderType) {
			case "red":
				slider.value = redValue;
				break;
			case "green":
				slider.value = greenValue;
				break;
			case "blue":
				slider.value = blueValue;
				break;
		}
	});
	color = `rgb(${redValue},${greenValue},${blueValue})`;
	pickedColor.style.backgroundColor = color;
}

/*** EVENT LISTENERS ***/
let eraserMode = false;
let randomMode = false;

function paintSquare(e) {
	if (eraserMode) {
		color = "transparent";
	} else if (randomMode) {
		redValue = Math.floor(Math.random() * 255 + 1);
		greenValue = Math.floor(Math.random() * 255 + 1);
		blueValue = Math.floor(Math.random() * 255 + 1);
		color = `rgb(${redValue},${greenValue},${blueValue})`;
		updateBrush();
	}

	e.target.style.backgroundColor = color;
}

function toggleEraserMode() {
	if (randomMode) toggleRandomMode();

	eraserBtn.classList.toggle("selected-btn");
	if (eraserMode) eraserMode = false;
	else eraserMode = true;
}

function toggleRandomMode() {
	if (eraserMode) toggleEraserMode();

	randomBtn.classList.toggle("selected-btn");
	if (randomMode) randomMode = false;
	else randomMode = true;
}

function updateColorSlider(e) {
	if (eraserMode) toggleEraserMode();
	else if (randomMode) toggleRandomMode();

	const sliderType = e.target.getAttribute("id");
	switch (sliderType) {
		case "red":
			redValue = e.target.value;
			break;
		case "green":
			greenValue = e.target.value;
			break;
		case "blue":
			blueValue = e.target.value;
			break;
	}
	updateBrush();
}

/*** CANVAS ***/
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

/*** START ***/
function start() {
	updateGridSize();
	updateBrush();
}

// ADD EVENT LISTENERS
gridSizeSlider.addEventListener("input", updateGridSize);

colorSliders.forEach((slider) => {
	slider.addEventListener("input", updateColorSlider);
});

resetBtn.addEventListener("click", resetCanvas);
eraserBtn.addEventListener("click", toggleEraserMode);
randomBtn.addEventListener("click", toggleRandomMode);

start();

/**************/
