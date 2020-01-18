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
  let strInt = n.toString();
  let revInt = parseInt([...strInt].reverse().join(''));
  //check negative
  if (n < 0) {
    revInt = -1 * revInt;
  }
  return revInt;
}

module.exports = reverseInt;
