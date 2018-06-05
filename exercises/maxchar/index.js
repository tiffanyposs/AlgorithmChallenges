// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let key in charMap) {
    if(charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;

//
// function maxChar(str) {
//   const obj = {};
//   str.split('').forEach(char => {
//     if(obj.hasOwnProperty(char)) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   });
//   let largest = null;
//   for(var key in obj) {
//     if(largest === null || obj[key] > obj[largest]) {
//       largest = key
//     }
//   }
//   return largest;
// }
