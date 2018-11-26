// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(total, step = 1) {
	if (step > total) return;
	const stair = '#'.repeat(step) + ' '.repeat(total - step);
	console.log(stair);
	steps(total, step + 1);
}

module.exports = steps;

// // NOTE My Original Solution
// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let step = '#'.repeat(i) + ' '.repeat(n - i);
// 		console.log(step);
// 	}
// }

// // NOTE My Recursive Solution
// function steps(total, step = 1) {
// 	if (step > total) return;
// 	const stair = '#'.repeat(step) + ' '.repeat(total - step);
// 	console.log(stair);
// 	steps(total, step + 1);
// }

// // NOTE Class Solution 1
// function steps(n) {
// 	for (let row = 0; row < n; row++) {
// 		let stair = '';
// 		for (let column = 0; column < n; column++) {
// 			if (column <= row) stair += '#';
// 			else stair += ' ';
// 		}
// 		console.log(stair);
// 	}
// }

// // NOTE Class Solution 2 - Recursive
// function steps(n, row = 0, stair = '') {
// 	if (n === row) return;
// 	if (n === stair.length) {
// 		console.log(stair);
// 		return steps(n, row + 1);
// 	}
// const add = stair.length <= row ? '#' : ' ';
//
// 	steps(n, row, stair + add);
// }
