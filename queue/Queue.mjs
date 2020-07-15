import QueueNode from './QueueNode.mjs';

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const removedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removedHead;
  }

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  isEmpty() {
    return !this.head;
  }

  toArray() {
    const queue = [];

    let currentNode = this.head;

    while (currentNode) {
      queue.push(currentNode);
      currentNode = currentNode.next;
    }

    return queue;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}

const q = new Queue();
q.enqueue(123);
q.enqueue(234);
q.enqueue(345);
q.peek();
q.isEmpty();
q.toString();
q.dequeue();
q.dequeue();
q.dequeue();
q.isEmpty();
