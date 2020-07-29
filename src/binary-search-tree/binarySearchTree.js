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

  toString() {
    return this.root.toString();
  }
}

module.exports = BinarySearchTree;

const tree = new BinarySearchTree();
tree.insert(350);
tree.insert(345);
tree.insert(346);
tree.insert(330);
tree.insert(335);
tree.insert(360);
tree.insert(355);
tree.insert(365);

tree.remove(330);
tree.contains(330);
tree.insert(330);
tree.contains(330);
tree.remove(330);
tree.contains(330);
tree.remove(355);
tree.contains(355);
tree.insert(356);
tree.remove(350);
tree.contains(350);
tree.insert(340);
tree.insert(330);
tree.contains(330);

tree.remove(340);
console.log(tree.toString());
tree.remove(345);
console.log(tree.toString());
tree.remove(346);
console.log(tree.toString());
tree.remove(330);
console.log(tree.toString());
tree.remove(335);
console.log(tree.toString());
tree.contains(360);
tree.toString();
