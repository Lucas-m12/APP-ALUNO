export default function upperCaseInitial(text) {
	if (text == "") {
		return "";
	} else {
		var words = text.toLowerCase().split(" ");
		for (let a = 0; a < words.length; a++) {
			let w = words[a];
			if (w[0] == undefined) continue;

			words[a] = w[0].toUpperCase() + w.slice(1);
		}
		return words.join(" ");
	}
}
