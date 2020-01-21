// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root){
    return [0];
  }
  root['height'] = 0;
  let nodesToHeight = [root];
  let resultArr = [];
  while (nodesToHeight.length > 0) {
    let curr = nodesToHeight.shift();
    if (resultArr[curr['height']]){
      resultArr[curr['height']]++;
    } else {
      resultArr[curr['height']] = 1;
    }
    nodesToHeight.push(...curr.children.map((node) => {
      node['height'] = curr['height'] + 1;
      return node;
    }))
  }
  return resultArr;
}

module.exports = levelWidth;
