const BinarySearchTreeNode = require('./binarySearchTreeNode');

class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode();
  }

  find(value) {
    return this.root.find(value);
  }

  insert(value, data = null) {
    return this.root.insert(value, data);
  }

  remove(value) {
    return this.root.remove(value);
  }

  contains(value) {
    return this.root.contains(value);
  }

  findMin() {
    return this.root.findMin();
  }

  findMax() {
    return this.root.findMax();
  }

  toString() {
    return this.root.toString();
  }
}

module.exports = BinarySearchTree;
