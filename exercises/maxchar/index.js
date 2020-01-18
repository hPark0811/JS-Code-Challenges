// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charOccMap = {};
  [...str].forEach((char) => {
    if (charOccMap[char]){
      charOccMap[char]++;
    } else {
      charOccMap[char] = 1;
    }
  })
  let maxChar;
  let maxOcc = 0;
  Object.entries(charOccMap).forEach(([char, num]) => {
    if (maxOcc < num){
      maxChar = char;
      maxOcc = num;
    }
  })
  return maxChar;
}

module.exports = maxChar;
