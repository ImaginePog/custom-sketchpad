const canvas = document.querySelector(".canvas");

for (let i = 0; i < 50; ++i) {
	const row = document.createElement("div");
	row.classList.add("row");

	for (let j = 0; j < 50; ++j) {
		const column = document.createElement("div");
		column.classList.add("square");

		row.appendChild(column);
	}

	canvas.appendChild(row);
}
