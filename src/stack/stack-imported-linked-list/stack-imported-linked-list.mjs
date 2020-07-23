import LinkedList from '../../linked-list/linkedList/linkedList.mjs';

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    return this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toString(callback) {
    return this.linkedList
      .toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
