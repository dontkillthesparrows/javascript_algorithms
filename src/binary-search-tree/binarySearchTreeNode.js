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

  insert(value, data) {
    if (!this.value) {
      this.value = value;
      this.data = data;

      return null;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value, data);
      }

      return this.setLeft(new BinarySearchTreeNode(value, data));
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, data);
      }

      return this.setRight(new BinarySearchTreeNode(value, data));
    }

    return this;
  }

  remove() {}

  traverseInOrder() {}

  setLeft(node) {
    if (!this.left) {
      this.left = node;
    }

    if (!node.parent) {
      node.parent = this;
    }

    return node;
  }

  setRight(node) {
    if (!this.right) {
      this.right = node;
    }

    if (!node.parent) {
      node.parent = this;
    }

    return node;
  }

  setData(data) {
    this.data = data;

    return this;
  }

  setValue(value) {
    this.value = value;

    return this;
  }

  contains() {}

  removeChild() {}

  replaceCild() {}

  static copyNode() {}

  findMin() {}

  findMax() {}

  toString() {}
}

module.exports = BinarySearchTreeNode;
