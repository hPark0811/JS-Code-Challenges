// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let sentenceArr = str.split(' ');
  for (let i = 0; i < sentenceArr.length; i++){
    if (sentenceArr[i]){
      let word = sentenceArr[i];
      word = word[0].toUpperCase() + word.slice(1);
      sentenceArr[i] = word;
    }
  }
  return sentenceArr.join(' ');
}

module.exports = capitalize;
