class BinarySearchTreeNode {
  constructor(value = null, data = null) {
    this.value = value;
    this.data = data;
    this.parent = null;
    this.right = null;
    this.left = null;
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }

    if (value > this.value && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  insert() {}

  remove() {}

  traverseInOrder() {}

  setLeft() {}

  setRight() {}

  setData() {}

  setValue() {}

  contains() {}

  removeChild() {}

  replaceCild() {}

  static copyNode() {}

  findMin() {}

  findMax() {}

  toString() {}
}
