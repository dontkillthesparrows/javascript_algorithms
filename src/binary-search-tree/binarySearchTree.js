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
}

module.exports = BinarySearchTree;

const tree = new BinarySearchTree();
tree.insert(350);
tree.insert(345);
tree.insert(345);
tree.insert(335);
tree.insert(330);
tree.insert(355);
tree.insert(360);
tree.insert(365);
