// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let fastNode = list.getFirst();
  let slowNode = list.getFirst();

  while(fastNode.next && fastNode.next.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;

    if (fastNode === slowNode) {
      // this means there is loop;
      return true;
    }
  }

  return false;
}

module.exports = circular;
