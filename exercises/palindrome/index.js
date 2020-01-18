// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // solution 1 (best)
  /* return str === [...str].reverse().join(); */

  // solution 2 
  // Makes use of array helper.
  return [...str].every((char, i) => {
    return char === [...str][str.length - i - 1];
  })
}

module.exports = palindrome;
