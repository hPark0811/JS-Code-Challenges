// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();

  stringA = stringA.replace(/[^\w]/g, '');
  stringB = stringB.replace(/[^\w]/g, '');

  // solution 1 
  /* let charMapA = {};
  let charMapB = {};

  generateCharMap(stringA, charMapA);
  generateCharMap(stringB, charMapB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
    return false;
  }
  for (let char in charMapA){
    if (charMapA[char] !== charMapB[char]){
      return false;
    }
  } 
  return true;
  */

  // solution 2
  return [...stringA].sort().join('') === [...stringB].sort().join('');;
}

function generateCharMap(str, charMap){
  [...str].forEach((char) => {
    if (charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  })
}
module.exports = anagrams;
