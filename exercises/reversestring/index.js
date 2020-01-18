// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';

  // Solution 1
  /* [...str].forEach((char) => {
    result = char + result;
  }) */

  // Solution 2 (Easiest & Best)
  /* result = [...str].reverse().join(''); */

  // ES2015 specific
  result = Array.from(str).reduce((result, char) => {
    return char + result;
  })

  return result;
}

module.exports = reverse;
