var MyCircularQueue = function (k) {
  this.head = null;
  this.tail = null;
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull() === true) {
    return false;
  }

  const newNode = { value: value, next: this.head };

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;

    return true;
  }

  this.tail.next = newNode;
  this.tail = newNode;

  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (!this.head) {
    return false;
  }

  if (this.head.next && this.head.next !== this.head) {
    this.head = this.head.next;
    this.tail.next = this.head;
  } else {
    this.head = null;
    this.tail = null;
  }

  return true;
};

MyCircularQueue.prototype.Front = function () {
  return this.head ? this.head.value : -1;
};

MyCircularQueue.prototype.Rear = function () {
  return this.tail ? this.tail.value : -1;
};

MyCircularQueue.prototype.isEmpty = function () {
  return !this.head;
};

MyCircularQueue.prototype.isFull = function () {
  if (!this.head) {
    return false;
  }

  if (this.head === this.tail) {
    return false;
  }

  let count = 1;
  let currentNode = this.head;

  while (currentNode.next !== this.head) {
    count++;
    currentNode = currentNode.next;
  }

  if (count >= this.size) {
    return true;
  } else {
    return false;
  }
};
