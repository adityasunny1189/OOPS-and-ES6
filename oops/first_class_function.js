var years = [1999, 1993, 1990, 2002, 2005];

function calculateAge(year, fn) {
	int age = [];
	for(int i = 0; i < year.length; i++) {
		age.push(fn(year[i]));
	}
	return age;
}

function fnToCalcAge(int yr) {
	return (2020 - yr);
}

var Age = calculateAge(years, fnToCalcAge);

console.log(Age);
