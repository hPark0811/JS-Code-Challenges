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

function steps(n) {
  recSteps(1, n);
}

function recSteps(n, row){
  let outputString = '';
  for (let i = 0; i < row; i++){
    if (i < n){
      outputString = outputString + '#';
    } else {
      outputString = outputString + ' ';
    }
  }

  console.log(outputString);
  if (n === row){
    return;
  } else {
    recSteps(n + 1, row);
  }
}

module.exports = steps;
