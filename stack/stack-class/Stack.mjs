import StackNode from './StackNode.mjs';

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new StackNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let deletedTail = null;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        deletedTail = currentNode.next;
        this.tail = currentNode;
        this.tail.next = null;
      }
      currentNode = currentNode.next;
    }
    return deletedTail.value;
  }

  peek() {
    return this.tail ? this.tail.value : null;
  }

  isEmpty() {
    return !this.head;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes.reverse();
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
