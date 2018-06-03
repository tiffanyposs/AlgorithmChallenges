// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = palindrome;

// Not an ideal solution, but gives you something to talk about why it's not ideal
// this method is doing more work than needed
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   });
// }
