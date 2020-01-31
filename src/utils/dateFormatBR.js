export default function dateFormatBR(date = "") {
	if (date == "") return "";

	let newDate = date.split("-");

	newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

	return newDate;
}
