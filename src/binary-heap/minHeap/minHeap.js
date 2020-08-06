const Comparator = require('../../utils/comparator');

class MinHeap {
  constructor(comparatorFunction) {
    this.heapContainer = [];
    this.heapMap = new Map();
    this.compare = new Comparator(comparatorFunction);
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
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
    }
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapMap.set(item, item);
    this.heapifyUp();

    return this;
  }

  isEmpty() {
    return !this.heapContainer.length > 0;
  }

  peek() {
    return this.heapContainer[0];
  }
}

module.exports = MinHeap;
