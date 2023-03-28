const canvas = document.querySelector(".canvas");
let gridSize = 1;

function paintSquare(e) {
	e.target.style.backgroundColor = "Red";
}

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
