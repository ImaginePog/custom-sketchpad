const canvas = document.querySelector(".canvas");
const gridSizeSlider = document.querySelector("#size-slider");
const displaySize = document.querySelector(".size-display");

function paintSquare(e) {
	e.target.style.backgroundColor = "Red";
}

function resetCanvas() {
	canvas.replaceChildren();
}

function updateGridSize() {
	gridSize = gridSizeSlider.value;
	displaySize.textContent = `Grid Size: ${gridSize}x${gridSize}`;
	resetCanvas();
	createCanvas();
}

function createCanvas() {
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

gridSizeSlider.addEventListener("input", updateGridSize);
updateGridSize();
