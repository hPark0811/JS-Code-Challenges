// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let fast = list.getFirst();
  let slow = list.getFirst();
  console.log(n);
  console.log(fast.data);

  for (let i = 0; i < n; i++) {
    
    fast = fast.next;
    console.log(fast.data);
  }
  console.log(slow.data);
  console.log(fast.data);
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
    console.log(slow.data);
    console.log(fast.data);
  }
  console.log("result is:" + slow.data);
  return slow;
}

module.exports = fromLast;
