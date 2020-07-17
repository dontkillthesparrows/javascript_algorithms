import LinkedList from '../../linked-list/linkedList/linkedList.mjs';

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    return this.linkedList.append(value);
  }

  dequeue() {
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
