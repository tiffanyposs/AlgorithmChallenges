// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
     .toString()
     .split('')
     .reverse()
     .join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// Tiffany second solution
// function reverseInt(n) {
//   const arr = n.toString().split('');
//   if (arr.length === 1) return n;
//   let multiplier = Math.sign(n);
//   if (multiplier === -1) arr.shift();
//   arr.reverse();
//   return parseInt(arr.join(''))*multiplier;
// }

// Tiffany original solution
// function reverseInt(n) {
//   const arr = n.toString().split('');
//   if (arr.length === 1) return n;
//
//   let multiplier = 1;
//   if (arr[0] === '-') {
//     multiplier = -1;
//     arr.shift()
//   }
//   arr.reverse();
//   const newN = parseInt(arr.join(''));
//   return newN*multiplier;
// }
