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

      return this;
    }

    const newNode = new BinarySearchTreeNode(value, data);

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value, data);
      }

      this.setLeft(newNode);
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, data);
      }

      this.setRight(newNode);
    }

    return newNode;
  }

  remove(value) {
    const removedNode = this.find(value);

    if (!removedNode) {
      throw new Error('node does not exist in tree');
    }

    const { parent } = removedNode;

    if (!removedNode.left && !removedNode.right) {
      //no children
      if (parent) {
        parent.removeChild(removedNode.value);
      } else {
        this.setValue(undefined);
      }
    } else if (removedNode.left && removedNode.right) {
      //two children
      const nextBiggerNode = removedNode.right.findMin();
      if (nextBiggerNode !== removedNode.right) {
        this.remove(nextBiggerNode.value);
        removedNode.setValue(nextBiggerNode.value).setData(nextBiggerNode.data);
      } else {
        removedNode
          .setValue(removedNode.right.value)
          .setData(removedNode.right.data);
        removedNode.setRight(removedNode.right.right);
      }
    } else {
      //one child
      const child = removedNode.left || removedNode.right;

      if (parent) {
        parent.replaceChild(removedNode, child);
      } else {
        BinarySearchTreeNode.copyNode(removedNode, child);
      }
    }

    return true;
  }

  setLeft(node) {
    if (node) {
      node.parent = this;
    }

    this.left = node;

    return node;
  }

  setRight(node) {
    if (node) {
      node.parent = this;
    }

    this.right = node;

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

  contains(value) {
    return this.find(value) ? true : false;
  }

  removeChild(value) {
    if (this.left && this.left.value === value) {
      this.left = null;

      return true;
    }

    if (this.right && this.right.value === value) {
      this.right = null;

      return true;
    }

    return false;
  }

  replaceChild(childToRemove, newChild) {
    if (!childToRemove && !newChild) {
      return false;
    }

    if (this.left && this.left === childToRemove) {
      this.left = newChild;
      newChild.parent = this;

      return true;
    }

    if (this.right && this.right === childToRemove) {
      this.right = newChild;
      newChild.parent = this;

      return true;
    }

    return false;
  }

  static copyNode(target, source) {
    target.setValue(source.value);
    target.setData(source.data);
    target.setLeft(source.left);
    target.setRight(source.right);
  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  findMax() {
    if (!this.right) {
      return this;
    }

    return this.right.findMin();
  }

  traverseInOrder() {
    let traverse = [];

    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    traverse.push(this.value);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}

module.exports = BinarySearchTreeNode;
