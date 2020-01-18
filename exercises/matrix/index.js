// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let mat = [];
  for (let i = 0; i < n; i++) {
    mat.push([]);
  }
  recMatrix(1, n, 1, n, mat, n, 1);

  return mat;
}

function recMatrix(startRow, endRow, startColumn, endColumn, mat, n, count) {
  //RIGHT
  for (let x = startColumn; x <= endColumn; x++) {
    mat[startRow - 1][x - 1] = count++;
  }
  startRow++;

  //DOWN
  for (let y = startRow; y <= endRow; y++) {
    mat[y - 1][endColumn - 1] = count++;
  }
  endColumn--;

  //LEFT
  for (let x = endColumn; x >= startColumn; x--) {
    mat[endRow - 1][x - 1] = count++;
  }
  endRow--;

  //UP
  for (let y = endRow; y >= startRow; y--) {
    mat[y - 1][startColumn - 1] = count++;
  }
  startColumn++;

  if (count > (n * n)) {
    return true;
  } else {
    recMatrix(startRow, endRow, startColumn, endColumn, mat, n, count)
  }
}

module.exports = matrix;
