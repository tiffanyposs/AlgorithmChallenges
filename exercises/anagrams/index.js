// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
	return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

// // MY ORIGINAL SOLUTION
// function anagrams(stringA, stringB) {
// 	stringA = stringA.replace(/[^a-z0-9]/g, '').toLowerCase();
// 	stringB = stringB.replace(/[^a-z0-9]/g, '').toLowerCase();
//
// 	stringA = stringA.split('').sort().join('');
// 	stringB = stringB.split('').sort().join('');
//
// 	return stringA === stringB;
// }


// // SOLUTION 2
// function buildCharMap(str) {
// 	const charMap = {};
// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap;
// }
//
// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);
//
// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
//
// 	for (let key in aCharMap) {
// 		if (aCharMap[key] !== bCharMap[key]) return false;
// 	}
//
// 	return true;
// }

module.exports = anagrams;
