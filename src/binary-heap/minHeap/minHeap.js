const Comparator = require('../../utils/comparator');

class MinHeap {
  constructor(comparatorFunction) {
    this.heapContainer = [];
    this.heapMap = new Map();
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heapContainer.length;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heapContainer.length;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  find(target, comparator = this.compare) {
    const foundIndices = [];
    let index = 0;
    for (let item of this.heapContainer) {
      if (comparator.equal(item, target)) {
        foundIndices.push(index);
      }
      index++;
    }
    return foundIndices;
  }

  has(item) {
    return this.heapMap.has(item);
  }

  peek() {
    return this.heapContainer[0];
  }

  poll() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const head = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();

    this.heapifyDown();

    return head;
  }

  swap(index1, index2) {
    let temp = this.heapContainer[index2];
    this.heapContainer[index2] = this.heapContainer[index1];
    this.heapContainer[index1] = temp;
  }

  heapifyUp(index = this.heapContainer.length - 1) {
    while (
      this.hasParent(index) &&
      this.compare.greaterThan(
        this.heapContainer[this.getParentIndex(index)],
        this.heapContainer[index]
      )
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index = 0) {
    let nextIndex = null;

    while (this.hasLeftChild(index)) {
      if (
        this.hasRightChild(index) &&
        this.compare.lessThanOrEqualTo(
          this.heapContainer[this.getRightChildIndex(index)],
          this.heapContainer[this.getLeftChildIndex(index)]
        )
      ) {
        nextIndex = this.getRightChildIndex(index);
      } else {
        nextIndex = this.getLeftChildIndex(index);
      }

      if (
        this.compare.lessThanOrEqualTo(
          this.heapContainer[index],
          this.heapContainer[nextIndex]
        )
      ) {
        break;
      } else {
        this.swap(index, nextIndex);
        index = nextIndex;
      }
    }
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapMap.set(item, item);
    this.heapifyUp();

    return this;
  }

  remove(item, comparator = this.compare) {
    const indicesToRemove = this.find(item, comparator);

    this.heapMap.delete(item);

    for (let i of indicesToRemove) {
      if (i === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[i] = this.heapContainer.pop();

        const parent = this.heapContainer[this.getParentIndex(i)];
        if (this.hasLeftChild(i) && (!parent || parent <= item)) {
          this.heapifyDown(i);
        } else {
          this.heapifyUp(i);
        }
      }
    }
    return this;
  }

  isEmpty() {
    return !this.heapContainer.length > 0;
  }

  toString() {
    return this.heapContainer.toString();
  }
}

module.exports = MinHeap;
