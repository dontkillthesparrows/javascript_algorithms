const Stack = function () {
  this.head = null;
  this.tail = null;
};

Stack.prototype.push = function (x) {
  const node = { value: x, next: this.head };
  if (!this.head) {
    this.head = node;
    this.tail = node;

    return this;
  }

  this.head = node;
  return true;
};

Stack.prototype.pop = function () {
  if (!this.head) {
    return null;
  }

  let deletedHead = this.head;

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;

    return deletedHead.value;
  }

  this.head = this.head.next;

  return deletedHead.value;
};

Stack.prototype.top = function () {
  return this.head ? this.head.value : null;
};

Stack.prototype.empty = function () {
  return !this.head;
};
