let data = [
	["George", "Barack", "Donald"],
	[43, 44, 45],
	["Superman", "Batman", "Iron Man"],
	["Clark", "Bruce", "Tony"]
];

for (value of data) {
	if (Array.isArray(value)) {
		console.log(value);
	}
}