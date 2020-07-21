const Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype.push = function (x) {
  const newNode = { value: x, next: null };

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;

    return this;
  }

  this.tail.next = newNode;
  this.tail = newNode;

  return this;
};

Queue.prototype.pop = function () {
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

  return removedHead.value;
};

Queue.prototype.peek = function () {
  return this.head.value || null;
};

Queue.prototype.empty = function () {
  return !this.head;
};
