// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let counter = 0;
	const checker = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checker.includes(char)) counter++;
	}

	return counter;
}

module.exports = vowels;

// NOTE: MY SOLUTION 1
// function vowels(str) {
// 	const vowelChecker = ['a', 'e', 'i', 'o', 'u'];
// 	let counter = 0;
// 	str.toLowerCase().split('').forEach(char => {
// 		if (vowelChecker.includes(char)) counter++;
// 	});
// 	return counter;
// }

// NOTE: MY SOLUTION 2
// function vowels(str) {
// 	const vowelChecker = ['a', 'e', 'i', 'o', 'u'];
// 	return str
// 		.toLowerCase()
// 		.split('')
// 		.filter(char => vowelChecker.includes(char))
// 		.length;
// }

// NOTE: CLASS SOLUTION 2
// function vowels(str) {
// 	const matches = str.match(/[aeiou]/gi);
// 	return matches ? matches.length : 0;
// }

// NOTE: CLASS SOLUTION
// function vowels(str) {
// 	let counter = 0;
// 	const checker = ['a', 'e', 'i', 'o', 'u'];
//
// 	for (let char of str.toLowerCase()) {
// 		if (checker.includes(char)) counter++;
// 	}
//
// 	return counter;
// }
