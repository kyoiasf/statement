const bannerImage = document.querySelector(".reality-toggle img");

if (bannerImage) {
	bannerImage.draggable = false;
}

const thoughtLines = document.querySelectorAll(".thought-line");
const typefaces = [
	"'Canva Sans', Arial, sans-serif",
	"'Canva Sans', Arial, sans-serif",
	"Arial, Helvetica, sans-serif",
	"'Trebuchet MS', sans-serif",
	"Verdana, sans-serif",
	"'Courier New', monospace",
	"Georgia, serif",
];
function applyRandomStyle(element) {
	element.style.setProperty("--thought-font", typefaces[Math.floor(Math.random() * typefaces.length)]);
	element.style.setProperty("--thought-size", `${(1.25 + Math.random() * 0.5).toFixed(2)}rem`);
	element.style.setProperty("--thought-weight", [500, 600, 700][Math.floor(Math.random() * 3)]);
	element.style.setProperty("--thought-style", Math.random() < 0.34 ? "italic" : "normal");
	const usePastel = Math.random() < 0.32;
	element.classList.toggle("thought-pastel", usePastel);
	element.style.setProperty("--thought-color", usePastel ? "transparent" : "#fff");
	element.style.setProperty("--thought-spacing", `${(-0.015 + Math.random() * 0.055).toFixed(3)}em`);
	element.style.setProperty("--thought-tilt", `${(-0.45 + Math.random() * 0.9).toFixed(2)}deg`);
}

thoughtLines.forEach((line) => {
	const text = line.textContent;
	line.dataset.echo = text;
	const pieces = text.match(/\s+|[^\s]+/g) || [];
	const fragment = document.createDocumentFragment();

	pieces.forEach((piece) => {
		if (/^\s+$/.test(piece)) {
			fragment.append(document.createTextNode(piece));
			return;
		}

		const word = document.createElement("span");
		word.className = "thought-word";
		applyRandomStyle(word);
		Array.from(piece).forEach((character) => {
			const letter = document.createElement("span");
			if (/[a-z]/i.test(character) && Math.random() < 0.025) {
				letter.className = "thought-letter--metallic";
			}
			letter.textContent = character;
			word.append(letter);
		});
		fragment.append(word);

	});

	line.replaceChildren(fragment);
});

const statement = document.querySelector(".artist-statement__text");
const statementFonts = [
	"'Canva Sans', Arial, sans-serif",
	"Georgia, 'Times New Roman', serif",
	"'Courier New', monospace",
	"'Trebuchet MS', sans-serif",
];

if (statement) {
	const pieces = statement.textContent.match(/\s+|[^\s]+/g) || [];
	const fragment = document.createDocumentFragment();

	pieces.forEach((piece) => {
		if (/^\s+$/.test(piece)) {
			fragment.append(document.createTextNode(piece));
			return;
		}

		if (Math.random() < 0.12) {
			const word = document.createElement("span");
			word.className = "statement-word--varied";
			word.textContent = piece;
			word.style.setProperty("--statement-font", statementFonts[Math.floor(Math.random() * statementFonts.length)]);
			word.style.setProperty("--statement-size", `${(0.92 + Math.random() * 0.22).toFixed(2)}em`);
			word.style.setProperty("--statement-weight", Math.random() < 0.5 ? "600" : "700");
			word.style.setProperty("--statement-style", Math.random() < 0.62 ? "italic" : "normal");
			if (Math.random() < 0.34) {
				word.classList.add("statement-word--pastel");
			}
			fragment.append(word);
		} else {
			fragment.append(document.createTextNode(piece));
		}
	});

	statement.replaceChildren(fragment);
}