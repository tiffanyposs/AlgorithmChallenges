// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 3
// uses ES6 reverse methid that iterates and passes previous value
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev , '');
}

module.exports = reverse;

// SOLUTION 1
// quickest, but may not be allowed to use .reverse in interview
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }


// SOLUTION 2
// here we use new ES6 syntax for for loops, which has less room for error
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed
//   }
//   return reversed;
// }
