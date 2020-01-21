// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  getFirst() {
    return this.head;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head){
      return;
    }
    let prev = null;
    let node = this.head;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    if (prev){
      prev.next = null;
    } else {
      this.head = null;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    this.getLast().next = new Node(data);
  }

  getAt(index) {
    let nodeToReturn = this.head;
    for (let i = 0; i < index && nodeToReturn; i++) {
      nodeToReturn = nodeToReturn.next;
    }
    return nodeToReturn;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }

    let prev = this.getAt(index - 1);
    if (!prev || !prev.next){
      return;
    }

    let curr = prev.next;
    prev.next = prev.next.next;

    return curr;
  }

  insertAt(data, index) {
    if(index === 0){
      this.insertFirst(data);
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev) {
      this.insertLast(data);
      return;
    }
    prev.next = new Node(data, prev.next);
  }

  forEach(func) {
    let node = this.head;
    let counter = 0;
    while (node) {
      func(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
