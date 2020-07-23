import DoubleListNode from './doubleListNode.mjs';

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new DoubleListNode(value, this.head);

    if (this.head) {
      this.head.previous = newNode;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new DoubleListNode(value, null, this.tail);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.head.previous = null;

      return deletedNode;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (currentNode.next) {
          currentNode.next.previous = currentNode;
        }
        if (deletedNode.value === this.tail.value) {
          this.tail = currentNode;
        }
      }
      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next === deletedTail) {
        this.tail = currentNode;
        this.tail.next = null;
      }
      currentNode = currentNode.next;
    }

    return deletedTail;
  }

  find(value = undefined, callback = undefined) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value) === value) {
        return currentNode;
      }

      if (value && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}

const doubleList = new DoubleLinkedList();
doubleList.prepend(987);
doubleList.prepend(876);
doubleList.append(123);
doubleList.append(234);
doubleList.find(123);
doubleList.toArray();
doubleList.toString();
