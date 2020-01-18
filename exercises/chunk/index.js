// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  let resultArr = [];
  /* arr.forEach(element => {
    if (resultArr.length === 0){
      resultArr.push([]);
    }
    else if (resultArr[resultArr.length - 1].length === size){
      resultArr.push([]);
    }
    resultArr[resultArr.length - 1].push(element);
  }); */

  for (let startIndex = 0, endIndex = size;
       startIndex < arr.length;
       startIndex += size, endIndex += size
    ){
      resultArr.push(arr.slice(startIndex, endIndex));
    }

  return resultArr;
}

module.exports = chunk;
