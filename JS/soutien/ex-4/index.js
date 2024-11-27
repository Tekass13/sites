let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];
let unique_ages = [];

for (age of ages) {
	let duplicate = false;
	for (unique_age of unique_ages) {
		if (age === unique_age) {
			duplicate = true;
			console.log("unique_ages =",unique_ages);
		}
	}
	if(!duplicate) {
		unique_ages.push(age);
	}
}