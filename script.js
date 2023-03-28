const canvas = document.querySelector(".canvas");

function paintSquare(e) {
	e.target.style.backgroundColor = "Red";
}

for (let i = 0; i < 50; ++i) {
	const row = document.createElement("div");
	row.classList.add("row");

	for (let j = 0; j < 50; ++j) {
		const square = document.createElement("div");
		square.classList.add("square");
		square.addEventListener("mouseenter", paintSquare);

		row.appendChild(square);
	}

	canvas.appendChild(row);
}
